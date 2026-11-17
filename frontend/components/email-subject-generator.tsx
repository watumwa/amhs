"use client";

import { useState } from "react";
import { applicationGmail, applicationMailto, buildEmailSubject, recruitment, subjectErrors, vacancyStatus } from "../content/vacancies";
import { useVacancyOpen } from "./recruitment-status";
import styles from "./recruitment.module.css";

export function EmailSubjectGenerator({ initialOpen }: { initialOpen: boolean }) {
  const open = useVacancyOpen(initialOpen);
  const [name, setName] = useState("");
  const [subjects, setSubjects] = useState<string[]>([]);
  const [qualification, setQualification] = useState("");
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState("");
  const errors = subjectErrors(name, subjects, qualification);
  const subject = buildEmailSubject(name, subjects, qualification);
  function validate() {
    setChecked(true); setMessage("");
    if (!vacancyStatus().open) {
      setMessage("Applications have closed for this vacancy.");
      return false;
    }
    const missingField = errors.name ? "applicant-name" : errors.subjects ? "teaching-subjects" : errors.qualification ? "qualification" : null;
    if (missingField) {
      document.getElementById(missingField)?.focus();
      return false;
    }
    return true;
  }
  async function copy() {
    if (!validate()) return;
    try { await navigator.clipboard.writeText(subject); setMessage("Email subject copied."); }
    catch { setMessage("Copy was unavailable. Select and copy the preview text manually."); }
  }
  if (!open) return <p role="status"><strong>Applications Closed.</strong> The email subject generator is no longer available for this archived vacancy.</p>;
  return <div className={styles.form}>
    <h3>Email Subject Generator</h3><p>Generate your subject locally in your browser. Your details are not stored or sent to AMHS by this tool.</p>
    <label htmlFor="applicant-name">Applicant&apos;s Full Name</label>
    <input id="applicant-name" type="text" autoComplete="name" value={name} onChange={e => setName(e.target.value)} aria-invalid={checked && errors.name} aria-describedby={checked && errors.name ? "name-error" : undefined} />
    {checked && errors.name && <p id="name-error" className={styles.error}>Enter your full name.</p>}
    <fieldset id="teaching-subjects" tabIndex={-1} aria-describedby="subject-help subject-error"><legend>Teaching Subjects Applied For</legend><p id="subject-help">Select at least two distinct advertised subject areas you are qualified and able to teach.</p><div className={styles.choices}>{recruitment.subjects.map(item => <label key={item}><input type="checkbox" checked={subjects.includes(item)} onChange={e => setSubjects(current => e.target.checked ? [...current, item] : current.filter(value => value !== item))} />{item}</label>)}</div></fieldset>
    <p id="subject-error" className={styles.error}>{checked && errors.subjects ? "Select at least two distinct teaching subjects." : ""}</p>
    <label htmlFor="qualification">Highest Qualification</label><input id="qualification" type="text" value={qualification} onChange={e => setQualification(e.target.value)} aria-invalid={checked && errors.qualification} aria-describedby="qualification-help qualification-error" list="qualification-examples" />
    <datalist id="qualification-examples">{["Diploma in Education", "Bachelor of Education", "Bachelor of Science with Education", "Bachelor of Arts with Education"].map(item => <option key={item} value={item} />)}</datalist>
    <p id="qualification-help">Examples above are illustrative; you may enter another relevant qualification.</p><p id="qualification-error" className={styles.error}>{checked && errors.qualification ? "Enter your highest relevant qualification." : ""}</p>
    <strong>Live email subject preview</strong><output className={styles.preview} aria-live="polite">{name.trim() || subjects.length || qualification.trim() ? subject : "Full Name - Teaching Subjects - Qualification"}</output>
    {checked && Object.values(errors).some(Boolean) && <p role="alert" className={styles.error}>Complete your name, at least two subjects and your qualification before continuing.</p>}
    <div className={styles.actions}><button type="button" className="button button-navy" onClick={copy}>Copy Email Subject</button><a className="button button-navy" href={applicationMailto(subject)} onClick={e => { if (!validate()) { e.preventDefault(); return; } setMessage("If your email application did not open, use Open in Gmail below or copy the subject and email address into your preferred email service."); }}>Apply by Email</a><a className="button button-navy" href={applicationGmail(subject)} target="_blank" rel="noopener noreferrer" onClick={e => { if (!validate()) e.preventDefault(); }}>Open in Gmail</a></div>
    <p>Apply by Email opens a draft in your default email application. If no draft opens, use Open in Gmail (opens a new tab; sign in if needed), or copy the subject and send your application to <a href={`mailto:${recruitment.email}`}>{recruitment.email}</a>.</p><p>Attach all required documents and send the email yourself; opening a draft does not submit an application.</p><p role="status">{message}</p>
  </div>;
}
