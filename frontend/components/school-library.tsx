import Image from "next/image";
import Link from "next/link";
import { libraryGalleryPhotos, libraryOverviewPhoto } from "../content/library";
import { DONATION_URL } from "../content/donation";
import { Arrow, Book, Compass, Medal, Sparkle } from "./icons";
import { LibraryHero } from "./library-hero";
import styles from "./school-library.module.css";

const benefits = [
  { title: "Reading Culture", icon: <Book />, text: "Encouraging regular reading habits that strengthen vocabulary, comprehension and a lifelong interest in learning." },
  { title: "Independent Learning", icon: <Compass />, text: "Supporting students as they develop confidence, responsibility and effective personal study habits." },
  { title: "Academic Development", icon: <Medal />, text: "Providing opportunities for students to reinforce classroom learning and deepen their understanding of academic subjects." },
  { title: "Research and Discovery", icon: <Sparkle />, text: "Inspiring curiosity, thoughtful inquiry and the ability to explore information critically." },
];

export function SchoolLibrary() {
  return <div className={styles.page}>
    <LibraryHero />

    <section id="library-overview" className={`container ${styles.overview}`} aria-labelledby="library-overview-heading">
      <div>
        <p className="eyebrow"><span /> A place for possibility</p>
        <h2 id="library-overview-heading">A Place to Read,<br /><em>Discover and Grow</em></h2>
        <p>At Asaba Memorial High School, we recognise that meaningful learning extends beyond the classroom. Our school library provides an important space for reading, academic preparation, independent learning and the development of research skills. Through continued investment in learning resources and a supportive study environment, we seek to nurture confident, curious and knowledgeable learners.</p>
        <p>AMHS is developing a modern library as a learning hub and community resource centre for reading, research, independent learning and innovation.</p>
        <a className="text-link" href="#library-experience">Step inside our library <Arrow /></a>
      </div>
      <figure className={styles.overviewPhoto}>
        <Image src={libraryOverviewPhoto.src} alt={libraryOverviewPhoto.alt} width={1280} height={720} sizes="(max-width: 820px) 100vw, 50vw" loading="lazy" />
        <figcaption>Creating space for curiosity, concentration and academic growth.</figcaption>
      </figure>
    </section>

    <section id="library-experience" className={styles.experience} aria-labelledby="library-experience-heading">
      <div className="container">
        <div className={styles.sectionHeading}><p className="eyebrow"><span /> Library life at AMHS</p><h2 id="library-experience-heading">Inside Our Learning Environment</h2><p>Every reading session, shared discovery and moment of concentration contributes to a stronger foundation for lifelong learning.</p></div>
        <div className={styles.gallery}>
          {libraryGalleryPhotos.map((photo, index) => <figure className={`${styles.galleryCard} ${index === 0 ? styles.galleryFeatured : ""}`} key={photo.src}>
            <div className={styles.galleryImage}><Image src={photo.src} alt={photo.alt} fill sizes={index === 0 ? "(max-width: 820px) 100vw, 60vw" : "(max-width: 590px) 100vw, (max-width: 820px) 50vw, 33vw"} loading="lazy" /></div>
            <figcaption><h3>{photo.title}</h3><p>{photo.caption}</p></figcaption>
          </figure>)}
        </div>
      </div>
    </section>

    <section className={`container ${styles.resources}`} aria-labelledby="library-resources-heading">
      <div className={styles.sectionHeading}><p className="eyebrow"><span /> Today’s readers. Tomorrow’s leaders.</p><h2 id="library-resources-heading">A Reading Culture.<br /><em>A Growing Vision.</em></h2></div>
      <div className={styles.resourcesGrid}>
        <article><span className={styles.number}>01</span><h3>Lifelong habits</h3><p>AMHS has established a Reading Club and organises Spelling Bees to strengthen reading, spelling, vocabulary, communication and confidence.</p><p>Students are encouraged to explore new ideas, research classroom subjects, deepen their understanding and develop independent study habits.</p></article>
        <article><span className={styles.number}>02</span><h3>A library in development</h3><p>The physical library is being developed with textbooks, reference materials, academic journals, reading corners and research stations.</p><p>The school’s vision also includes a virtual library supported by digital learning resources, computers, e-learning platforms and AI-powered research tools. These are development ambitions, rather than a statement that all services are currently available.</p></article>
        <article><span className={styles.number}>03</span><h3>Knowledge for our community</h3><p>The vision extends to the wider community: students from other schools and adults will be able to read, learn new skills and access digital information as the library develops.</p><p>As the only secondary school in Kiruli Sub-county, AMHS welcomes support to help students access knowledge and build brighter futures.</p></article>
      </div>
    </section>

    <section className={styles.benefits} aria-labelledby="library-benefits-heading">
      <div className="container">
        <div className={styles.sectionHeading}><p className="eyebrow"><span /> Learning that lasts</p><h2 id="library-benefits-heading">More Than Books —<br /><em>A Foundation for Success</em></h2></div>
        <div className={styles.benefitGrid}>{benefits.map(benefit => <article className={styles.benefitCard} key={benefit.title}><span className={styles.benefitIcon}>{benefit.icon}</span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div>
      </div>
    </section>

    <section className={styles.support} aria-labelledby="library-support-heading">
      <div className={`container ${styles.supportGrid}`}>
        <div><p className="eyebrow eyebrow-light"><span /> Help bring books closer</p><h2 id="library-support-heading">Help Us Build a Stronger Library for Tomorrow</h2><p>A well-resourced school library opens doors to knowledge, opportunity and academic achievement. Asaba Memorial High School welcomes individuals, organisations and education partners who share our commitment to strengthening access to quality learning resources.</p><div className={styles.supportActions}><Link className="button button-gold" href={DONATION_URL}>Support Our School Library <Arrow /></Link><Link className="text-link text-link-light" href="/contact-us">Become an Education Partner <Arrow /></Link></div></div>
        <aside className={styles.opportunities}><h3>Ways you could support the library</h3><p>Potential opportunities for individuals and education partners include:</p><ul><li>Textbooks and curriculum reference materials.</li><li>General reading books and educational publications.</li><li>Library furniture and shelving.</li><li>Educational technology and digital learning resources.</li><li>Library improvement and development partnerships.</li></ul></aside>
      </div>
    </section>
  </div>;
}
