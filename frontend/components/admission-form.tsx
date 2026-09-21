"use client";

import { FormEvent, useState } from "react";

export function AdmissionForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  if (sent) return <div className="form-success"><span>✓</span><h2>Thank you for your interest.</h2><p>We have received your enquiry and our admissions team will be in touch shortly.</p></div>;
  return <form className="admission-form" onSubmit={submit}><div className="form-heading"><p className="eyebrow"><span /> Start an application</p><h2>Tell us about your child.</h2><p>Complete this short enquiry and we will guide you through the next steps.</p></div><div className="form-grid"><label>Parent / guardian name<input required name="guardian" placeholder="Your full name" /></label><label>Email address<input required type="email" name="email" placeholder="you@example.com" /></label><label>Phone number<input required type="tel" name="phone" placeholder="+256 ..." /></label><label>Child&apos;s name<input required name="student" placeholder="Student's full name" /></label><label>Preferred entry year<select name="year"><option>2027</option><option>2028</option><option>2029</option></select></label><label>Year / class applying for<select name="class"><option>Senior One</option><option>Senior Two</option><option>Senior Three</option><option>Senior Five</option></select></label></div><label className="form-full">Anything you&apos;d like us to know?<textarea name="message" placeholder="Your question or a little about your child's interests" rows={4} /></label><label className="consent"><input required type="checkbox" /> <span>I agree that AMHS may use these details to respond to my admissions enquiry.</span></label><button className="button button-gold" type="submit">Send enquiry <span>→</span></button></form>;
}
