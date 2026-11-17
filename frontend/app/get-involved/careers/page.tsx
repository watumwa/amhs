import type { Metadata } from "next";
import Link from "next/link";
import { EmailSubjectGenerator } from "../../../components/email-subject-generator";
import { VacancyBadge } from "../../../components/recruitment-status";
import { recruitment as job, vacancyStatus } from "../../../content/vacancies";
import styles from "../../../components/recruitment.module.css";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Careers & Job Opportunities | Asaba Memorial High School",
  description: "Explore AMHS career opportunities, the 2027 full-time teacher advertisement, application instructions and our commitment to safeguarding students.",
};

const format = "Applicant’s Full Name - Teaching Subjects Applied For - Highest Qualification";
const example = "Kato John - Mathematics & Physics - Bachelor of Education";

export default function CareersPage() {
  const { open } = vacancyStatus();
  return <>
    <header className={styles.hero}><div className="container"><p className="eyebrow eyebrow-light">Get Involved · Work with AMHS</p><h1>Careers &amp; Job Opportunities</h1><p className={styles.tagline}>Join Our Team. Inspire the Next Generation.</p><p>Asaba Memorial High School is a mixed day and boarding secondary school committed to quality education, student development, responsible leadership and community transformation. We welcome dedicated professionals who share our educational values and commitment to safeguarding children.</p></div></header>
    <div className={`container ${styles.body}`}>
      <article className={`${styles.card} ${styles.highlight}`}><VacancyBadge initialOpen={open} /><p className="eyebrow">Job Vacancy Announcement</p><h2>{job.title} — {job.academicYear} Academic Year</h2><p><strong>Application Deadline: {job.deadlineLabel}</strong> (Uganda time)</p><p>This recruitment advertisement invites qualified, dedicated and enthusiastic full-time secondary school teachers for the 2027 academic year. {job.description}</p><p>Experience teaching at both levels is an added advantage.</p><p>Female teachers and applicants from refugee backgrounds are particularly encouraged to apply. AMHS values diversity, equal opportunity and the contributions of people from different backgrounds to education and the wider school community.</p><p>The advertisement remains available for reference after applications close. Only officially advertised opportunities are listed here.</p></article>
      <section className={styles.card}><h2>Teaching Subjects</h2><ul className={styles.subjects}>{job.subjects.map(subject => <li key={subject}>{subject}</li>)}</ul><p><strong>Specify at least two subjects</strong> you are qualified and able to teach, and indicate whether you are applying for O-Level, A-Level or both.</p></section>
      <div className={styles.grid}>
        <section className={styles.card}><h2>Minimum Qualifications and Requirements</h2><ul>{job.requirements.map(item => <li key={item}>{item}</li>)}</ul><h3>Added Advantages</h3><ul>{job.advantages.map(item => <li key={item}>{item}</li>)}</ul></section>
        <section className={styles.card}><h2>Information to Include in Your Application</h2><ul><li>At least two subjects you are qualified and able to teach.</li><li>Your applicable teaching levels: O-Level, A-Level or both.</li><li>Previous teaching experience, including classes and levels taught.</li><li>Whether you have experience teaching at both O-Level and A-Level.</li><li>Additional skills or talents, including sports, brass band, music, drama, debate, vocational skills, counselling, leadership or other extracurricular activities.</li></ul><h3>Required Application Documents</h3><ol>{job.documents.map(item => <li key={item}>{item}</li>)}</ol></section>
      </div>
      <section aria-labelledby="how-to-apply"><h2 id="how-to-apply">How to Apply</h2><p>Application Deadline for both methods: <strong>{job.deadlineLabel}</strong> (Uganda time).</p><p>These instructions describe the advertised application arrangements. Applications close at the end of the deadline date.</p><div className={styles.grid}>
        <article className={styles.card}><p className="eyebrow">Option A · Apply by Email</p><h3>Email Your Application</h3><p>{open ? <a href={`mailto:${job.email}`}>{job.email}</a> : <strong>{job.email}</strong>}</p><p>Attach your application letter, updated CV and copies of relevant academic and professional qualifications. Use this mandatory email subject format, with dashes as separators:</p><p className={styles.preview}>{format}</p><p>Example: <span className={styles.preview}>{example}</span></p><p><strong>Deadline: {job.deadlineLabel}</strong></p><EmailSubjectGenerator initialOpen={open} /></article>
        <article className={styles.card}><p className="eyebrow">Option B · Hand Delivery</p><h3>Submit Your Application in Person</h3><p>Physical applications may be submitted at the AMHS premises, addressed to <strong>School Administration</strong>.</p><address>Asaba Memorial High School (AMHS)<br />Kitanyata Trading Centre<br />Kiruli Sub-county<br />Masindi, Uganda</address><p>Place your application letter, updated CV and copies of qualifications in an envelope. Write these identification details on the envelope:</p><p className={styles.preview}>{format}</p><p>Example (selectable for copying):</p><p className={styles.preview}>{example}</p><p><strong>Deadline: {job.deadlineLabel}</strong></p><VacancyBadge initialOpen={open} /></article>
      </div></section>
      <section className={`${styles.card} ${styles.highlight}`}><h2>Our Commitment to Child Protection and Safeguarding</h2><p>The safety, dignity and well-being of every student are paramount at AMHS. Corporal punishment, physical violence, child abuse, verbal abuse and any other form of student mistreatment are prohibited.</p><p>Successful applicants must read, understand and sign the school’s Child Protection and Safeguarding Policy and Staff Code of Conduct before commencing work.</p><div className={styles.actions}><Link className="text-link" href="/school-policies">School Policies</Link><a href="/documents/AMHS_Child_Protection_and_Safeguarding_Policy_2026.pdf" download>Download Safeguarding Policy (PDF)</a><a href="/documents/AMHS_Staff_Code_of_Conduct_2026.pdf" download>Download Staff Code of Conduct (PDF)</a></div></section>
      <section className={styles.card}><h2>Official Recruitment Advertisement</h2><a className="button button-navy" href={job.advertisement} target="_blank" rel="noopener noreferrer">View the Job Advert (PDF, opens in a new tab)</a><p>Read the school-provided recruitment advert in a new tab. Please also follow the email-subject and hand-delivery instructions on this page.</p></section>
    </div>
  </>;
}
