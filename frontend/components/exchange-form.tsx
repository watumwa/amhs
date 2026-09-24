"use client";

import { FormEvent, useState } from "react";

export function ExchangeForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  if (sent) return <div className="form-success"><span>✓</span><h2>Thank you for getting in touch.</h2><p>The AMHS team will review your exchange enquiry and contact you about the next conversation.</p></div>;
  return <form className="admission-form exchange-form" onSubmit={submit}>
    <div className="form-heading"><p className="eyebrow"><span /> Interested in partnering?</p><h2>Build a bridge between schools.</h2><p>Tell us about your school or organisation and the exchange you would like to explore.</p></div>
    <div className="form-grid"><label>School / organisation name<input required name="organisation" placeholder="Organisation name" /></label><label>Country<input required name="country" placeholder="Country" /></label><label>Contact person<input required name="contact" placeholder="Full name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label></div>
    <label className="form-full">Type of exchange proposed<select required name="exchangeType"><option value="">Select an option</option><option>Student-to-student correspondence</option><option>Virtual classroom exchange</option><option>Joint project</option><option>Cultural exchange</option><option>Teacher collaboration</option><option>Educational visit</option><option>Sports or arts exchange</option></select></label>
    <label className="form-full">Message<textarea required name="message" rows={5} placeholder="Tell us about your idea" /></label>
    <button className="button button-gold" type="submit">Start a conversation <span>→</span></button>
  </form>;
}