import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { ContactRow } from "@/components/ContactRow";
import { RippleLink } from "@/components/RippleLink";
import therapyImage from "../../../public/images/therapy.jpg";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Peace & Purpose to ask questions or request a therapy appointment.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact, Peace & Purpose" },
};

export default function ContactPage() {
  return (
    <section>
      <div className="wrap">
        <Reveal className="section-head" style={{ maxWidth: 640 }}>
          <h1 style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.6rem)" }}>We&apos;d love to hear from you.</h1>
          <p>
            Whether you have a question about our services, want to schedule a session, or just need
            someone to talk to about the process, we are here in a safe, judgment-free space.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal delay={0.05} style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: 20 }}>
            <div className="card">
              <h2>Direct Contact</h2>
              <p>
                Reach out directly through email or WhatsApp. We aim to keep our communication open
                and straightforward.
              </p>

              <ContactRow icon="message-square-more">
                <div className="label-sm">Email</div>
                <strong>
                  <a href="mailto:infopeacenpurpose@gmail.com">infopeacenpurpose@gmail.com</a>
                </strong>
              </ContactRow>

              <ContactRow icon="phone-call">
                <div className="label-sm">Phone / WhatsApp</div>
                <a href="tel:+918310879825">
                  <strong>+91 831 087 9825</strong>
                </a>
              </ContactRow>
            </div>

            <div className="card alt">
              <div className="label-sm" style={{ marginBottom: 6 }}>
                FOLLOW OUR JOURNEY
              </div>
              <strong style={{ fontSize: "1.05rem" }}>
                <a href="https://www.instagram.com/peace_npurpose/" target="_blank" rel="noopener">
                  @peace_npurpose
                </a>
              </strong>
            </div>

            <div className="card">
              <h3>What to expect</h3>
              <ul className="expect-list">
                <li>Response within 1 business day.</li>
                <li>A brief intake form to understand your needs.</li>
                <li>Total confidentiality and a safe, judgment-free space.</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} as="div" className="contact-cta-card">
            <Image src={therapyImage} alt="A calm, softly lit room" fill style={{ objectFit: "cover" }} />
            <div className="contact-cta-overlay">
              <h3>Ready to take the first step?</h3>
              <p>
                Skip the back-and-forth, request an appointment directly and I&apos;ll confirm a time
                that works.
              </p>
              <RippleLink href="/#booking" className="btn btn-primary" style={{ marginTop: 14 }}>
                Book an Appointment
              </RippleLink>
            </div>
          </Reveal>
        </div>

        <div className="location-banner">
          Our physical space is designed to be an extension of our digital calm. Location details are
          provided upon booking to ensure privacy.
        </div>
      </div>
    </section>
  );
}
