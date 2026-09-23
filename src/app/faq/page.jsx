import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs } from "@/lib/faq";

export const metadata = {
  title: "FAQ",
  description: "Answers to common questions about starting therapy, sessions, payment, and what to expect.",
  alternates: { canonical: "/faq" },
  openGraph: { url: "/faq", title: "FAQ, Peace & Purpose" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="wrap">
        <div className="faq-split">
          <Reveal className="faq-intro">
            <h1>Frequently Asked Questions</h1>
            <p>
              Starting therapy can feel overwhelming. We&apos;ve compiled some common questions to
              help demystify the process and give you a clear idea of what to expect.
            </p>
            <div className="still-questions">
              <h2 style={{ fontSize: "1.5rem" }}>Still have questions?</h2>
              <p style={{ fontSize: "0.9rem" }}>
                We&apos;re happy to answer any other questions you might have before scheduling.
              </p>
              <a href="/contact">Contact us directly →</a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <FaqAccordion />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
