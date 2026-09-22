"use client";

import { useRef, useState } from "react";
import Script from "next/script";
import { SlotPickerDialog } from "@/components/SlotPickerDialog";
import { addRipple } from "@/lib/ripple";

const WEB3FORMS_ACCESS_KEY = "2735aa3c-7319-4894-8fae-d0c6f9c69b7b";
const MAX_SLOTS = 3;

export function BookingForm() {
  const formRef = useRef(null);
  const dialogRef = useRef(null);
  const [slots, setSlots] = useState([]);
  const [status, setStatus] = useState({ text: "", tone: "" });

  const addSlot = () => {
    if (slots.length >= MAX_SLOTS) return;
    dialogRef.current?.open();
  };

  const confirmSlot = (label) => {
    setSlots((prev) => (prev.length >= MAX_SLOTS ? prev : [...prev, label]));
  };

  const removeSlot = (index) => {
    setSlots((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    if (slots.length === 0) {
      setStatus({ text: "Please add at least one preferred time slot.", tone: "err" });
      return;
    }

    const formData = Object.fromEntries(new FormData(form).entries());

    if (formData.botcheck) {
      setStatus({ text: "Thank you, I'll get back to you within a day.", tone: "ok" });
      form.reset();
      setSlots([]);
      return;
    }

    if (!formData["h-captcha-response"]) {
      setStatus({ text: "Please complete the captcha verification.", tone: "err" });
      return;
    }

    setStatus({ text: "Sending...", tone: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { Accept: "application/json", "Content-Type": "application/json" },
      });
      const result = await response.json();

      if (result.success) {
        setStatus({ text: "Thank you, I'll get back to you within a day.", tone: "ok" });
        form.reset();
        setSlots([]);
      } else {
        setStatus({
          text: result.message || "Something went wrong. Please try again or reach out directly.",
          tone: "err",
        });
      }
    } catch {
      setStatus({ text: "Network error, please check your connection and try again.", tone: "err" });
    }

    if (window.hcaptcha) window.hcaptcha.reset();
  };

  return (
    <>
      <Script src="https://web3forms.com/client/script.js" strategy="lazyOnload" />
      <form className="booking-form" id="booking-form" autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
        <input type="hidden" name="subject" value="New Booking Request - Peace & Purpose" />
        <input type="checkbox" name="botcheck" className="honeypot" tabIndex={-1} autoComplete="off" />

        <div className="field">
          <label htmlFor="name">Full Name *</label>
          <input type="text" id="name" name="name" required autoComplete="off" placeholder="John Doe" />
        </div>

        <div className="field">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            autoComplete="off"
            pattern="[0-9+\-\s]{10,15}"
            placeholder="+91 98765 xxxxx"
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required autoComplete="off" placeholder="john.doe@example.com" />
        </div>

        <div className="field">
          <label htmlFor="mode">Preferred Session Mode</label>
          <select id="mode" name="mode" defaultValue="Online / Telehealth">
            <option value="Online / Telehealth">Online / Telehealth</option>
          </select>
        </div>

        <div className="field">
          <label>
            Preferred Date &amp; Time<span className="hint">, add up to 3 slots that work for you</span>
          </label>
          <div className="slot-chips">
            {slots.map((label, i) => (
              <span className="slot-chip" key={label + i}>
                <span>{label}</span>
                <button type="button" aria-label="Remove this time slot" onClick={() => removeSlot(i)}>
                  ✕
                </button>
              </span>
            ))}
          </div>
          <button
            type="button"
            className="btn btn-outline btn-add-slot"
            disabled={slots.length >= MAX_SLOTS}
            onClick={addSlot}
            onMouseDown={addRipple}
          >
            {slots.length >= MAX_SLOTS
              ? "Maximum 3 slots added"
              : slots.length === 0
                ? "+ Add a time slot"
                : "+ Add another time slot"}
          </button>
          <input type="hidden" name="slot1" value={slots[0] || ""} readOnly />
          <input type="hidden" name="slot2" value={slots[1] || ""} readOnly />
          <input type="hidden" name="slot3" value={slots[2] || ""} readOnly />
        </div>

        <div className="consent-row">
          <input type="checkbox" id="consent" name="consent" required />
          <label htmlFor="consent">
            I consent to Peace &amp; Purpose contacting me about this request. See{" "}
            <a href="/privacy-notice">Privacy Notice</a>.
          </label>
        </div>

        <div className="captcha-field">
          <div className="h-captcha" data-captcha="true" />
        </div>

        <button type="submit" className="btn btn-primary" onMouseDown={addRipple}>
          Request Appointment
        </button>
        <p id="form-status" role="status" className={status.tone}>
          {status.text}
        </p>
      </form>

      <SlotPickerDialog ref={dialogRef} onConfirm={confirmSlot} />
    </>
  );
}
