import Link from "next/link";
import { policies, policyRequestHref, type Policy } from "../content/policies";
import styles from "./school-policies.module.css";

const iconPaths: Record<string, string> = {
  safeguarding: "M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Z M8 12l3 3 5-6",
  students: "M5 4h14v17H5z M8 8h8 M8 12h8 M8 16h5",
  staff: "M8 7V4h8v3 M3 7h18v14H3z M3 12h18 M10 12v3h4v-3",
  admissions: "M4 4h11v16H4z M8 8h3 M8 12h3 M17 10l4 4-4 4 M13 14h8",
  boarding: "m3 10 9-7 9 7 M5 9v12h14V9 M9 21v-7h6v7",
  "anti-bullying": "M12 21S2 15 2 8a5 5 0 0 1 10-1A5 5 0 0 1 22 8c0 7-10 13-10 13Z",
  ict: "M3 4h18v13H3z M8 21h8 M12 17v4 M7 8l-2 2 2 2 M17 8l2 2-2 2",
  "health-safety": "M8 3h8v5h5v8h-5v5H8v-5H3V8h5z",
  academic: "M3 4c4-1 7 0 9 2 2-2 5-3 9-2v16c-4-1-7 0-9 2-2-2-5-3-9-2z M12 6v16",
  complaints: "M3 4h18v13H9l-6 4z M7 8h10 M7 12h7",
  download: "M14 3H4v18h16V9l-6-6Z M14 3v6h6 M12 11v7 M9 15l3 3 3-3",
};

export function PolicyIcon({ type }: { type: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={iconPaths[type] ?? iconPaths.download} /></svg>;
}

function PolicyCard({ policy }: { policy: Policy }) {
  return <article className={styles.card} aria-labelledby={`${policy.id}-title`}>
    <div className={styles.cardHeading}><span className={styles.icon}><PolicyIcon type={policy.id} /></span><h3 id={`${policy.id}-title`}>{policy.title}</h3></div>
    <p>{policy.description}</p>
    <h4>{policy.document ? "Key Focus Areas" : "Key Focus Areas (general summary)"}</h4>
    <ul>{policy.focusAreas.map(area => <li key={area}>{area}</li>)}</ul>
    <div className={styles.actions}>
      <p className={styles.status}>Availability: {policy.document ? "Available for Download · PDF" : "Available Upon Request"}</p>
      {policy.document ? <>
        <a className={`button button-navy ${styles.action}`} href={policy.document} download={policy.document.split("/").pop()}><PolicyIcon type="download" />{policy.downloadLabel}</a>
        <a className={styles.preview} href={policy.document} target="_blank" rel="noopener noreferrer" aria-label={`View ${policy.title} PDF (opens in a new tab)`}>View PDF <span aria-hidden="true">↗</span><span className={styles.srOnly}> (opens in a new tab)</span></a>
      </> : <a className={`button button-navy ${styles.action}`} href={policyRequestHref(policy)} aria-label={`Request Policy by Email: ${policy.title}`}>Request Policy by Email <span aria-hidden="true">↗</span></a>}
    </div>
  </article>;
}

export function SchoolPolicies() {
  return <div className={styles.page}>
    <section className={styles.hero}><div className="container">
      <p className="eyebrow eyebrow-light"><span /> Who we are</p>
      <h1>School Policies <em>&amp; Governance</em></h1>
      <p>At Asaba Memorial High School (AMHS), our policies provide an essential framework for maintaining a safe, inclusive, disciplined and supportive learning environment. They guide the responsibilities, conduct and relationships of learners, staff, parents and other members of our school community.</p>
      <p>Our policies reflect our commitment to accountability, safeguarding, academic excellence, student wellbeing and responsible school governance.</p>
    </div></section>
    <div className={`container ${styles.content}`}>
      <p className={styles.intro}>Explore our school policies below. Selected documents are available for immediate download, while additional policies may be requested directly from the school administration.</p>
      <nav className={styles.jumpLinks} aria-label="Policy categories"><a href="#download-policies">Available for Download <span>03</span></a><a href="#request-policies">Available Upon Request <span>07</span></a></nav>
      <section className={styles.section} id="download-policies" aria-labelledby="download-heading">
        <p className="eyebrow"><span /> Section A · Official documents</p><h2 id="download-heading">Available for Download</h2>
        <p>Download an official policy or preview the PDF in a new tab.</p>
        <div className={styles.grid}>{policies.filter(policy => policy.availability === "download").map(policy => <PolicyCard key={policy.id} policy={policy} />)}</div>
      </section>
      <section className={styles.section} id="request-policies" aria-labelledby="request-heading">
        <p className="eyebrow"><span /> Section B · Contact the school</p><h2 id="request-heading">Available Upon Request</h2>
        <p>These descriptions and focus areas are general summaries of intended subject areas, not quotations or verified provisions of approved policy documents. Please request the official document from the administration for confirmation.</p>
        <p>Email links open your email application with a prepared request for you to review and send.</p>
        <div className={styles.grid}>{policies.filter(policy => policy.availability === "request").map(policy => <PolicyCard key={policy.id} policy={policy} />)}</div>
      </section>
      <section className={styles.contact} aria-labelledby="policy-contact-heading"><div><h2 id="policy-contact-heading">Need Further Information?</h2><p>If you require clarification about any of our school policies or would like to request an additional policy document, please contact the AMHS administration. We welcome inquiries from parents, learners, staff and other stakeholders.</p></div><Link className="button button-gold" href="/contact-us">Contact School Administration</Link></section>
    </div>
  </div>;
}
