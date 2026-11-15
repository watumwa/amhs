import type { Metadata } from "next";
import Link from "next/link";
import { directorMessage, directorPortrait } from "../../content/directors-message";
import styles from "../../components/director-message.module.css";

export const metadata: Metadata = {
  title: "Message from the School Director | Asaba Memorial High School",
  description: "Read a welcome message from Bienvenu Byamungu, School Director of Asaba Memorial High School, sharing the school's vision, educational mission, achievements and commitment to inclusive education in Uganda.",
};

export default function DirectorsMessagePage() {
  return <>
    <section className={`page-hero page-hero-short ${styles.banner}`} aria-labelledby="director-heading">
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <p className="eyebrow eyebrow-light"><span /> Who we are</p>
        <h1 id="director-heading">Message from the School Director</h1>
        <p>A welcome from Bienvenu Byamungu to the AMHS community.</p>
      </div>
    </section>
    <article className={`container ${styles.message}`} aria-label="Official message from Bienvenu Byamungu">
      <figure className={styles.profile}>
        <img src={directorPortrait} width={896} height={833} alt="Bienvenu Byamungu, School Director of Asaba Memorial High School" fetchPriority="high" />
        <figcaption className={styles.signature}><strong>Bienvenu Byamungu</strong><span>School Director</span><span>Asaba Memorial High School</span></figcaption>
      </figure>
      <div className={styles.prose}>
        <h2 className={styles.heading}>Welcome to Asaba Memorial High School (AMHS)!</h2>
        <p>Dear Students, Parents, Guardians, Partners and Friends,</p>
        {directorMessage.map(paragraph => {
          const phrase = "Global School Exchange (GSE)";
          const index = paragraph.indexOf(phrase);
          return <p key={paragraph}>{index < 0 ? paragraph : <>
            {paragraph.slice(0, index)}<Link className={styles.inlineLink} href="/school-exchange-programmes">{phrase}</Link>{paragraph.slice(index + phrase.length)}
          </>}</p>;
        })}
        <p className={styles.signature}><strong>Bienvenu Byamungu</strong><strong>School Director</strong><strong>Asaba Memorial High School</strong></p>
      </div>
    </article>
  </>;
}
