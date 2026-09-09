export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ success: false });
  }

  const body = request.body || {};

  if (body.botcheck) {
    return response.status(200).json({ success: true });
  }

  const requiredFields = ["name", "phone", "email", "slot1", "consent"];
  if (requiredFields.some((field) => !String(body[field] || "").trim())) {
    return response.status(400).json({
      success: false,
      message: "Please complete the required fields.",
    });
  }

  const email = String(body.email).trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return response.status(400).json({
      success: false,
      message: "Please provide a valid email address.",
    });
  }

  const phone = String(body.phone).trim();
  if (!/^[0-9+\-\s]{10,15}$/.test(phone)) {
    return response.status(400).json({
      success: false,
      message: "Please provide a valid phone number.",
    });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return response.status(500).json({ success: false });
  }

  const upstreamResponse = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...body,
      access_key: accessKey,
      subject: "New Booking Request - Peace & Purpose",
    }),
  });

  const result = await upstreamResponse.json();
  return response.status(upstreamResponse.status).json({
    success: Boolean(result.success),
  });
}
