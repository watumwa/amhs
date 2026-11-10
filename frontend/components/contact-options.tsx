"use client";

import { FormEvent, useRef, useState } from "react";
import { MailIcon } from "./icons";
import styles from "./contact-options.module.css";

const recipient = "asabamemorialhighschool@gmail.com";
const reasons = ["Student Admission Inquiry", "School Fees and Payments", "Academic Programmes", "Boarding and Accommodation", "School Visits and Appointments", "Employment Opportunities", "Partnerships and Support", "General Inquiry", "Other"];

// Keep the email-app handoff separate so a future server-side delivery service can replace it.
function openEmailApplication(data: FormData) {
  const value = (key: string) => String(data.get(key) ?? "").trim();
  const body = `Full Name: ${value("name")}\r\nEmail Address: ${value("email")}\r\nPhone Number: ${value("phone") || "Not provided"}\r\nReason for Contact: ${value("reason")}\r\n\r\n${value("message")}`;
  window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(value("subject"))}&body=${encodeURIComponent(body)}`;
}

export function ContactOptions() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [subject, setSubject] = useState("");
  const [subjectEdited, setSubjectEdited] = useState(false);
  const [handedOff, setHandedOff] = useState(false);
  const submitted = useRef(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitted.current) return;
    const form = event.currentTarget;
    // Native validation also supplies accessible, field-specific error messages.
    for (const field of Array.from(form.elements)) {
      if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
        field.setCustomValidity(field.required && !field.value.trim() ? "Please complete this field." : "");
      }
    }
    if (!form.reportValidity()) return;
    submitted.current = true;
    try {
      openEmailApplication(new FormData(form));
      setHandedOff(true);
    } catch {
      submitted.current = false;
      setHandedOff(false);
    }
  }

  return <section className={`container ${styles.section}`} aria-labelledby="contact-options-title">
    <div className={styles.heading}><p className="eyebrow"><span /> Get in touch</p><h2 id="contact-options-title">We&apos;d Love to Hear From You</h2><p>Have questions about admissions, academics, school fees, boarding facilities, or any of our programmes? Our team at Asaba Memorial High School is ready to assist you. Choose your preferred way to get in touch with us.</p></div>
    <div className={styles.cards}>
      <article className={styles.card}><span className={styles.icon}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7L3 20l1.5-5.2A8 8 0 1 1 20 11.5Z" /><path d="M8 8c0 4 2 6 6 6l1-2-2-1-1 1-2-2 1-1-1-2Z" /></svg></span><h3>WhatsApp Contact</h3><p>Start a conversation with our school team.</p><strong>+256775749226</strong><a className="button button-navy" href="https://wa.me/256775749226?text=Hello%20Asaba%20Memorial%20High%20School%2C%20I%20would%20like%20to%20make%20an%20inquiry." target="_blank" rel="noopener noreferrer">Chat on WhatsApp<span className={styles.srOnly}> (opens in a new tab)</span></a></article>
      <article className={styles.card}><span className={styles.icon}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 3 3 5-3 2a14 14 0 0 0 6 6l2-3 5 3-1 4c-1 3-8 0-12-4S1 5 4 4l4-1Z" /></svg></span><h3>Direct Phone Call</h3><p>Speak with us about your questions and next steps.</p><strong>+256766610442</strong><a className="button button-navy" href="tel:+256766610442">Call Now</a></article>
      <article className={styles.card}><span className={styles.icon}><MailIcon /></span><h3>Email Inquiry</h3><p>Share the details so we can help with your inquiry.</p><strong>{recipient}</strong><button className="button button-navy" type="button" aria-haspopup="dialog" onClick={() => dialog.current?.showModal()}>Send an Email</button></article>
    </div>
    <dialog ref={dialog} className={styles.dialog} aria-labelledby="inquiry-title" aria-describedby="inquiry-help" onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className={styles.dialogContent}>
        <button className={styles.close} type="button" onClick={() => dialog.current?.close()} aria-label="Close email inquiry">×</button>
        <h2 id="inquiry-title">Email Inquiry</h2><p id="inquiry-help">Your email application will open with your inquiry addressed to {recipient}. You must send the message there. This website does not send emails directly. An email application or mail handler must be configured on your device.</p>
        <form onSubmit={submit} onInput={(event) => { const target = event.target; if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) target.setCustomValidity(""); submitted.current = false; setHandedOff(false); }}>
          <p>Fields marked * are required.</p>
          <div className={styles.fields}>
            <label>Full Name *<input name="name" autoComplete="name" required maxLength={120} /></label>
            <label>Email Address *<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
            <label>Phone Number (optional)<input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
            <label>Reason for Contact *<select name="reason" required defaultValue="" onChange={(event) => { if (!subjectEdited) setSubject(`AMHS - ${event.target.value}`); submitted.current = false; setHandedOff(false); }}><option value="" disabled>Select a reason</option>{reasons.map((reason) => <option key={reason}>{reason}</option>)}</select></label>
          </div>
          <label>Email Subject *<input name="subject" required maxLength={200} value={subject} onChange={(event) => { setSubject(event.target.value); setSubjectEdited(Boolean(event.target.value.trim())); }} /></label>
          <label>Your Message *<textarea name="message" rows={6} required maxLength={4000} /></label>
          <button className="button button-gold" type="submit" disabled={handedOff}>Open Email Application</button>
          <p role="status">{handedOff ? "Email application requested. Your inquiry has not been sent by this website. Review and send it in your email application. If nothing opened, configure an email application, then try again." : "Review your details before opening your email application."}</p>
          {handedOff && <button className={styles.retry} type="button" onClick={() => { submitted.current = false; setHandedOff(false); }}>Prepare email again</button>}
        </form>
      </div>
    </dialog>
  </section>;
}
