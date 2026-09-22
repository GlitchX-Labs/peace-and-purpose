import { Reveal } from "@/components/Reveal";
import { IconCircle } from "@/components/icons/IconCircle";
import { RippleLink } from "@/components/RippleLink";

export const metadata = {
  title: "Terms of Service",
  description: "Review the terms that guide services and communication with Peace & Purpose.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: { url: "/terms-of-service", title: "Terms of Service, Peace & Purpose" },
};

export default function TermsOfServicePage() {
  return (
    <>
      <div className="page-head wrap">
        <h1>Terms of Service</h1>
        <p>
          Welcome to Peace &amp; Purpose. These terms are designed to clarify the nature of our online
          presence and the boundaries of our initial communications. Please read them carefully to
          understand how we operate before formally entering into a therapeutic relationship.
        </p>
        <p className="updated-note" style={{ marginTop: 0 }}>
          Last Updated: September 5, 2026
        </p>
      </div>

      <section>
        <div className="wrap">
          <div className="info-grid">
            <Reveal as="div" className="card">
              <h3>
                <IconCircle name="blocks" />
                Informational Purpose Only
              </h3>
              <p>
                The content provided on the Peace &amp; Purpose website, including blog posts,
                service descriptions, and general resources, is solely for informational and
                educational purposes.
              </p>
              <p>
                Reading this website, contacting Jennifer Jason, or utilizing the resources provided
                does not constitute a therapist-client relationship. The information here should never
                be considered a substitute for professional medical or mental health advice, diagnosis,
                or treatment.
              </p>
            </Reveal>

            <Reveal as="div" className="card warning-card" delay={0.05}>
              <h3>
                <IconCircle name="search" />
                Not for Emergencies
              </h3>
              <p>
                This practice does not provide crisis intervention or emergency services. If you are
                experiencing a medical or mental health emergency, please immediately call your local
                emergency number or go to the nearest emergency room.
              </p>
            </Reveal>

            <Reveal as="div" className="card" delay={0.1}>
              <h3>
                <IconCircle name="clock" />
                Booking is an Inquiry
              </h3>
              <ul className="tos-list">
                <li>
                  Submitting a booking request or scheduling a consultation through this website is an
                  inquiry, not a guarantee of services.
                </li>
                <li>
                  A formal therapeutic relationship is only established after an initial consultation,
                  mutually agreeing to proceed, and completing the necessary clinical intake paperwork.
                </li>
                <li>
                  Jennifer Jason reserves the right to decline services if it is determined that her
                  practice is not the best clinical fit for your specific needs, in which case referrals
                  will be provided when possible.
                </li>
              </ul>
            </Reveal>

            <Reveal as="div" className="card" delay={0.15}>
              <h3>
                <IconCircle name="star" />
                Clinical Boundaries
              </h3>
              <p>
                Clear boundaries are essential for a safe and effective therapeutic environment. These
                will be discussed in detail during the initial session, but key principles include:
              </p>
              <ul className="bullet-list">
                <li>
                  Communication outside of scheduled sessions is limited to scheduling or
                  administrative matters.
                </li>
                <li>
                  Social media interactions between therapist and client are not permitted to protect
                  confidentiality.
                </li>
                <li>A 48-hour cancellation policy applies to all scheduled sessions.</li>
              </ul>
            </Reveal>
          </div>

          <div className="tos-agree">
            <p>
              By using this website and submitting inquiries, you acknowledge that you have read and
              understood these terms. Formal informed consent for therapy will be provided during the
              intake process.
            </p>
            <RippleLink href="/" className="btn btn-outline">
              Return to Home
            </RippleLink>
          </div>
        </div>
      </section>
    </>
  );
}
