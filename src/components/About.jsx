import Image from "next/image";
import profileImage from "../../public/images/profile.jpg";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="wrap about">
        <Reveal as="figure" className="avatar-photo">
          <Image src={profileImage} alt="Jennifer Jason" width={400} height={400} />
        </Reveal>
        <Reveal className="about-copy" delay={0.1}>
          <h2>Meet Jennifer Jason</h2>
          <p>
            Hi! I&apos;m Jennifer Jason, the heart and brain behind Peace &amp; Purpose. I&apos;m here to
            listen, support, and help you find your peace. I believe that mental health doesn&apos;t have
            to feel like a TED Talk, it can be real, messy, and totally okay.
          </p>
          <span className="credential-note">MSc. Counselling Psychology</span>
          <ul className="about-list">
            <li>A safe, non-judgmental environment</li>
            <li>Tailored approaches for individual needs</li>
            <li>Focus on long-term, sustainable well-being</li>
          </ul>

          <div className="note-row">
            <div>
              <h3>Non-Judgmental</h3>
              <p>A space where you don&apos;t have to perform or explain yourself.</p>
            </div>
            <div>
              <h3>Confidential &amp; Safe</h3>
              <p>What you share stays private, always.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
