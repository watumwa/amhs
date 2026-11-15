import Link from "next/link";
import { Arrow } from "./icons";
import { directorExcerpt, directorPortrait } from "../content/directors-message";
import styles from "./director-message.module.css";

export function DirectorPreview() {
  return <section className={styles.preview} aria-labelledby="director-preview-heading">
    <div className={`container ${styles.previewGrid}`}>
      <img className={styles.previewPortrait} src={directorPortrait} width={896} height={833} alt="Bienvenu Byamungu, School Director of Asaba Memorial High School" loading="lazy" />
      <div>
        <p className="eyebrow"><span /> School leadership</p>
        <h2 id="director-preview-heading" className={styles.heading}>A Message from Our School Director</h2>
        <blockquote className={styles.excerpt}><p>&ldquo;{directorExcerpt}&rdquo;</p></blockquote>
        <p className={styles.signature}><strong>Bienvenu Byamungu</strong><span>School Director</span></p>
        <Link className="button button-navy" href="/directors-message">Read Full Message <Arrow /></Link>
      </div>
    </div>
  </section>;
}
