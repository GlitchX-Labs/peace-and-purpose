import { Reveal } from "@/components/Reveal";
import { IconCircle } from "@/components/icons/IconCircle";

export const metadata = {
  title: "Privacy Notice",
  description:
    "Learn how Peace & Purpose handles your information with care and transparency.",
  alternates: { canonical: "/privacy-notice" },
  openGraph: {
    url: "/privacy-notice",
    title: "Privacy Notice, Peace & Purpose",
  },
};

export default function PrivacyNoticePage() {
  return (
    <>
      <div className="page-head wrap">
        <h1>Privacy Notice</h1>
        <p>
          We value your trust. This notice outlines how we handle your
          information with care and transparency, ensuring your digital
          experience with us is as safe as your physical one.
        </p>
      </div>

      <section>
        <div className="wrap">
          <div className="info-grid">
            <Reveal as="div" className="card">
              <h3>
                <IconCircle name="lock" />
                Information We Collect
              </h3>
              <p>
                To provide you with the best support, we only ask for what is
                strictly necessary to arrange and manage your sessions.
              </p>
              <ul className="bullet-list">
                <li>
                  <strong>Basic Details:</strong> Your name and contact
                  information (email, phone number).
                </li>
                <li>
                  <strong>Preferences:</strong> Your preferred mode of contact
                  and scheduling availability.
                </li>
              </ul>
            </Reveal>

            <Reveal as="div" className="card" delay={0.05}>
              <h3>
                <IconCircle name="search" />
                Purpose of Collection
              </h3>
              <p>
                Your data is never sold or used for marketing. We collect this
                information solely for administrative purposes to facilitate
                your therapy journey.
              </p>
              <div className="tag-row">
                <span className="tag">Scheduling</span>
                <span className="tag">Communication</span>
                <span className="tag">Service Delivery</span>
              </div>
            </Reveal>

            <Reveal as="div" className="card full" delay={0.1}>
              <h3>
                <IconCircle name="clock" />
                Data Retention &amp; Deletion
              </h3>
              <p>
                We retain your contact information only as long as you are
                actively seeking our services. You have full control over your
                data. If you wish to have your information removed from our
                systems, simply reach out to us.
              </p>
              <div className="deletion-box">
                <span>
                  <strong>Request Deletion:</strong> email us at{" "}
                  <a href="mailto:infopeacenpurpose@gmail.com">
                    infopeacenpurpose@gmail.com
                  </a>
                </span>
                <a
                  href="mailto:infopeacenpurpose@gmail.com"
                  className="btn btn-outline"
                >
                  Email Request
                </a>
              </div>
            </Reveal>
          </div>

          <p className="updated-note">Last updated: September 2026</p>
        </div>
      </section>
    </>
  );
}
