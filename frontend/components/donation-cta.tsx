import Link from "next/link";
import { Arrow } from "./icons";
import styles from "./donation-cta.module.css";
import { DONATION_URL } from "../content/donation";

type DonationCTAProps = {
  heading: string;
  description: string;
  buttonLabel?: string;
  subtle?: boolean;
};

export function DonationCTA({ heading, description, buttonLabel = "Support AMHS", subtle = false }: DonationCTAProps) {
  return <section className={`${styles.section} ${subtle ? styles.subtle : styles.featured}`} aria-label={heading}>
    <div className={`container ${styles.inner}`}>
      <div className={styles.copy}>
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
      <Link className={subtle ? "text-link" : "button button-navy"} href={DONATION_URL}>{buttonLabel} <Arrow /></Link>
    </div>
  </section>;
}
