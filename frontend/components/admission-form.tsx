"use client";

import { FormEvent, useState } from "react";

export function AdmissionForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  if (sent) return <div className="form-success"><span>✓</span><h2>Thank you for applying to Asaba Memorial High School.</h2><p>Our admissions team will review your application and contact you regarding the next stage of the admission process.</p></div>;
  return <form className="admission-form" onSubmit={submit}>
    <div className="form-heading"><p className="eyebrow"><span /> Start an application</p><h2>Begin Your AMHS Journey.</h2><p>Complete the application details below and our admissions team will guide you through the next steps.</p></div>
    <p className="form-section-label">Step 1 — Student Details</p>
    <div className="form-grid"><label>Full name<input required name="student" placeholder="Student's full name" /></label><label>Date of birth<input required type="date" name="dateOfBirth" /></label><label>Gender<select required name="gender"><option value="">Select gender</option><option>Female</option><option>Male</option></select></label><label>Nationality<input required name="nationality" placeholder="Nationality" /></label><label>Class applying for<select required name="class"><option value="">Select class</option><option>Senior One</option><option>Senior Two</option><option>Senior Three</option><option>Senior Four</option><option>Senior Five</option><option>Senior Six</option></select></label><label>Previous school<input required name="previousSchool" placeholder="Previous school" /></label></div>
    <p className="form-section-label">Step 2 — Parent / Guardian</p>
    <div className="form-grid"><label>Parent / guardian name<input required name="guardian" placeholder="Your full name" /></label><label>Relationship to learner<input required name="relationship" placeholder="Parent, guardian..." /></label><label>Telephone<input required type="tel" name="phone" placeholder="+256 ..." /></label><label>WhatsApp<input type="tel" name="whatsapp" placeholder="+256 ..." /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Home address / district<input required name="address" placeholder="Home address or district" /></label></div>
    <p className="form-section-label">Step 3 — Admission Type</p>
    <div className="choice-grid"><label><input required type="radio" name="admissionType" value="day" /> Day Scholar</label><label><input required type="radio" name="admissionType" value="boarding" /> Boarding Student</label></div>
    <p className="form-section-label">Step 4 — Educational Information</p>
    <div className="form-grid"><label>Previous class<input required name="previousClass" placeholder="Previous class" /></label><label>Previous school<input required name="previousSchoolRepeat" placeholder="Previous school" /></label></div><label className="form-full">Most recent academic results<textarea required name="results" rows={3} placeholder="Summarise the most recent results" /></label>
    <p className="form-section-label">Step 5 — Additional Information</p>
    <div className="form-grid"><label>Medical or accessibility needs<textarea name="medicalNeeds" rows={3} placeholder="Please tell us anything relevant" /></label><label>Special learning needs<textarea name="learningNeeds" rows={3} placeholder="Please tell us anything relevant" /></label></div><label className="form-full">Bursary / sponsorship enquiry<textarea name="bursary" rows={3} placeholder="Tell us if you would like to discuss support" /></label>
    <p className="form-section-label">Step 6 — Documents</p><label className="form-full">Previous school report, results and other admission documents<input type="file" name="documents" multiple /></label>
    <p className="form-section-label">Step 7 — Declaration</p><label className="consent"><input required type="checkbox" /> <span>I confirm that the information provided is accurate and complete.</span></label><button className="button button-gold" type="submit">Submit application <span>→</span></button>
  </form>;
}
