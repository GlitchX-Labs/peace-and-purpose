export const dynamic = "force-static";

const routes = ["", "/contact", "/faq", "/privacy-notice", "/terms-of-service"];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `https://peacenpurpose.in${route}`,
    lastModified,
  }));
}
