import type { Metadata } from "next";
import Link from "next/link";
import { DONATION_URL } from "../../../content/donation";
import styles from "../../../components/recruitment.module.css";

export const metadata: Metadata = {
  title: "Religious Fellowships | Asaba Memorial High School",
  description: "Discover AMHS’s Christian Scripture Union and Muslim Club, supporting faith, character, mutual respect and an inclusive school community.",
};

export default function ReligiousFellowshipsPage() {
  return <>
    <header className={styles.hero}><div className="container"><p className="eyebrow eyebrow-light">Student Life · Faith &amp; Community</p><h1>Religious Fellowships at AMHS</h1><p className={styles.tagline}>Different Faiths. Equal Respect. One School Community.</p><p>AMHS recognises the importance of faith and spiritual development in students’ lives. We welcome students from different religious backgrounds and do not discriminate on the basis of religious belief.</p></div></header>
    <div className={`container ${styles.body}`}>
      <section className={styles.card}><h2>Faith, Values and Mutual Respect</h2><p>Our religious fellowships nurture spiritual growth, character development and moral responsibility while encouraging respect for different religious backgrounds and positive relationships within the school community.</p><p>AMHS currently has two religious clubs: the <strong>Christian Scripture Union (SU) Club</strong> and the <strong>Muslim Club</strong>. Both offer opportunities to practise faith, deepen religious understanding and build fellowship in a spirit of inclusion and non-discrimination.</p></section>
      <div className={styles.grid}>
        <section className={styles.card}><p className="eyebrow">Christian Fellowship</p><h2>Christian Scripture Union (CSU) Club</h2><p>The club brings Christian students together for prayer, Bible study, worship and fellowship. It encourages understanding of biblical teachings and values of love, honesty, forgiveness, kindness and compassion.</p><h3>Activities</h3><ul><li>Student-led prayers.</li><li>Bible study.</li><li>Sharing the Word of God.</li><li>Worship and gospel singing.</li><li>Christian fellowship.</li><li>Community outreach.</li></ul><h3>Community Outreach</h3><p>Students visit people who are ill in their homes, pray with them and offer encouragement and support.</p><aside className={`${styles.card} ${styles.highlight}`} aria-label="Christian Scripture Union meeting schedule"><h3>CSU Meeting Schedule</h3><p><strong>Tuesday — 4:00 p.m.</strong><br /><strong>Sunday — 10:00 a.m.</strong></p><p>These meeting times apply to the Christian Scripture Union.</p></aside></section>
        <section className={styles.card}><p className="eyebrow">Muslim Fellowship</p><h2>Muslim Club</h2><p>The Muslim Club supports Muslim students in strengthening their faith, understanding Islamic teachings and participating in religious activities. Students grow in their understanding of their faith and their relationships with others.</p><h3>Values in Daily Life</h3><ul><li>Peace.</li><li>Honesty.</li><li>Discipline.</li><li>Kindness.</li><li>Respect for others.</li></ul><h3>Religious Observances</h3><p>AMHS respects and supports Muslim students in attending Friday prayers (Jumu’ah) and observing important Islamic occasions:</p><ul><li>Friday prayers (Jumu’ah).</li><li>Eid al-Fitr.</li><li>Eid al-Adha.</li></ul><p>Through religious participation and positive values, the club strengthens faith and fellowship within the wider school community.</p></section>
      </div>
      <section className={`${styles.card} ${styles.highlight}`}><h2>Support Faith and Fellowship at AMHS</h2><p>Your generosity can help strengthen the spiritual and moral development of our students. Support the provision of religious learning materials, musical instruments, fellowship activities and opportunities for spiritual mentorship.</p><ul><li>Bibles and Qur’ans.</li><li>Religious learning materials.</li><li>Musical instruments.</li><li>Voluntary spiritual guidance and mentorship from pastors, priests, Muslim religious leaders and mentors through the respective clubs.</li><li>Meals and refreshments during Christmas celebrations for Christian students and Eid celebrations for Muslim students.</li></ul><div className={styles.actions}><Link href={DONATION_URL} className="button button-navy">Support Our Religious Fellowships</Link></div><p>To discuss support or volunteering, email <a href="mailto:asabamemorialhighschool@gmail.com">asabamemorialhighschool@gmail.com</a> or contact <a href="https://wa.me/256775749226">WhatsApp: +256775749226</a>.</p></section>
      <Link className="text-link" href="/associations-and-clubs">Explore Clubs and Societies</Link>
    </div>
  </>;
}
