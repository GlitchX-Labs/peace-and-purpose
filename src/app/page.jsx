import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { HowIWork } from "@/components/HowIWork";
import { Testimonials } from "@/components/Testimonials";
import { Booking } from "@/components/Booking";

export const metadata = {
  title: "Peace & Purpose · Healing Minds",
  description:
    "A safe, non-judgmental space for therapy and healing with Jennifer Jason. Individual therapy, couples counseling, and mindfulness workshops.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Peace & Purpose · Healing Minds",
    description: "A safe, non-judgmental space for therapy and healing with Jennifer Jason.",
  },
  twitter: {
    title: "Peace & Purpose · Healing Minds",
    description: "A safe, non-judgmental space for therapy and healing with Jennifer Jason.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Peace & Purpose",
  description:
    "Solo private practice offering individual therapy, couples counseling, and mindfulness workshops with Jennifer Jason, MSc. Counselling Psychology.",
  url: "https://peacenpurpose.in/",
  image: "https://peacenpurpose.in/images/therapy.jpg",
  email: "infopeacenpurpose@gmail.com",
  telephone: "+918310879825",
  areaServed: "IN",
  medicalSpecialty: "Psychiatric",
  founder: {
    "@type": "Person",
    name: "Jennifer Jason",
    jobTitle: "Counselling Psychologist",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <div className="about-services-bg">
        <About />
        <Services />
      </div>
      <HowIWork />
      <Testimonials />
      <Booking />
    </>
  );
}
