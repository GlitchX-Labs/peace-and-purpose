import { Reveal } from "@/components/Reveal";
import { BookingForm } from "@/components/BookingForm";

export function Booking() {
  return (
    <section id="booking" className="booking-section">
      <div className="wrap booking-grid">
        <Reveal>
          <h2>Request an Appointment</h2>
          <p>
            Take the first step towards feeling better. Fill out the form to request a session, and
            I&apos;ll personally reach out to confirm details.
          </p>
          <div className="expect-box">
            <p className="label">What to expect next:</p>
            <ol>
              <li>I review your preferred times.</li>
              <li>I contact you directly to confirm the appointment.</li>
              <li>You receive a secure link for intake paperwork.</li>
            </ol>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <BookingForm />
        </Reveal>
      </div>
    </section>
  );
}
