import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Book, Compass, Medal, Sparkle } from "../../../components/icons";
import { compulsorySubjects, seniorCompulsorySubjects, electiveSubjects, curriculumPrinciples, learningJourney, teachingApproaches, competencies, curriculumResources } from "../../../content/o-level-curriculum";
import styles from "./o-level-curriculum.module.css";

export const metadata: Metadata = {
  title: "O-Level Curriculum (S.1–S.4) | Asaba Memorial High School",
  description: "Explore the O-Level curriculum at Asaba Memorial High School, including subjects offered, competency-based learning, assessment, academic development and preparation for Uganda Certificate of Education examinations.",
  alternates: { canonical: "https://www.amhs.sc.ug/academics/o-level-curriculum" },
};

const featureIcons = [<Book key="book" />, <Compass key="compass" />, <Medal key="medal" />, <Sparkle key="sparkle" />];

function ExternalIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 3h7v7M21 3 10 14M10 3H3v18h18v-7" /></svg>;
}

function SubjectTable({ id, title, subjects }: { id: string; title: string; subjects: readonly { name: string; description: string }[] }) {
  return <div className={styles.tableScroll} role="region" aria-labelledby={id} tabIndex={0}>
    <table>
      <caption id={id}>{title}</caption>
      <thead><tr><th scope="col">Subject</th><th scope="col">Learning focus</th></tr></thead>
      <tbody>{subjects.map(subject => <tr key={subject.name}><th scope="row">{subject.name}</th><td>{subject.description}</td></tr>)}</tbody>
    </table>
  </div>;
}

export default function OLevelCurriculumPage() {
  return <div className={styles.page}>
    <section className={styles.hero} aria-labelledby="o-level-heading">
      <div className={`container ${styles.heroGrid}`}>
        <div>
          <p className="eyebrow eyebrow-light"><span /> ACADEMICS | LOWER SECONDARY EDUCATION</p>
          <h1 id="o-level-heading">O-Level Curriculum <span>(S.1–S.4)</span></h1>
          <p className={styles.headline}>Building Knowledge, Skills, Values and Competencies for the Future</p>
          <p>At Asaba Memorial High School, our O-Level academic programme is guided by Uganda&apos;s competency-based Lower Secondary Curriculum. We are committed to nurturing knowledgeable, responsible, creative and confident learners through meaningful classroom experiences, practical learning, continuous assessment and the development of essential life skills.</p>
          <p>Our curriculum places emphasis not only on what students know, but also on how effectively they apply their knowledge, solve problems, communicate, collaborate and contribute positively to society.</p>
          <div className={styles.actions}><a className="button button-gold" href="#o-level-subjects">Explore Subjects Offered <Arrow /></a><Link className="button button-outline-light" href="/apply-now">Apply for Admission <Arrow /></Link></div>
        </div>
        <aside className={styles.atGlance} aria-label="O-Level at a glance">
          <Book /><h2>A foundation for life</h2>
          <dl><div><dt>National pathway</dt><dd>Four years · Senior One to Four</dd></div><div><dt>Learning approach</dt><dd>Competency-based education</dd></div><div><dt>End-of-cycle qualification</dt><dd>Uganda Certificate of Education (UCE)</dd></div></dl>
          <a href="#o-level-journey">Explore the four-year journey <Arrow /></a>
        </aside>
      </div>
    </section>

    <nav className={styles.jumpNav} aria-label="On this curriculum page"><div className="container"><a href="#o-level-overview">Overview</a><a href="#o-level-subjects">Subjects</a><a href="#o-level-journey">Four-year journey</a><a href="#o-level-assessment">Assessment &amp; UCE</a><a href="#o-level-support">Student support</a><a href="#o-level-resources">Official resources</a></div></nav>

    <section id="o-level-overview" className={`container ${styles.section}`} aria-labelledby="overview-heading">
      <div className={styles.sectionHeading}><p className="eyebrow"><span /> Understanding the curriculum</p><h2 id="overview-heading">Understanding Uganda&apos;s Lower Secondary Curriculum</h2></div>
      <div className={styles.prose}><p>Uganda&apos;s Lower Secondary Curriculum, developed by the National Curriculum Development Centre (NCDC), adopts a competency-based approach to education. It emphasises the development of knowledge, practical skills, values and attitudes that enable learners to respond effectively to real-life situations.</p><p>Rather than relying exclusively on memorisation and examinations, the curriculum encourages active participation, inquiry, creativity, collaboration, problem-solving and continuous learning.</p><p>At AMHS, we embrace this approach by promoting meaningful learning experiences and encouraging students to connect classroom knowledge with practical situations.</p><p className={styles.source}>Read the <a href="https://ncdc.go.ug/books/curriculum-framework/" target="_blank" rel="noopener noreferrer">official NCDC curriculum framework<span className={styles.srOnly}> (opens in a new tab)</span> <ExternalIcon /></a>.</p></div>
      <div className={styles.fourGrid}>{curriculumPrinciples.map((item, index) => <article className={styles.card} key={item.title}><span className={styles.icon}>{featureIcons[index]}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </section>

    <section id="o-level-subjects" className={styles.tint} aria-labelledby="subjects-heading"><div className={`container ${styles.section}`}>
      <div className={styles.sectionHeading}><p className="eyebrow"><span /> Breadth, choice and strong foundations</p><h2 id="subjects-heading">Our O-Level Subjects</h2><p>Asaba Memorial High School offers a broad range of subjects within Uganda&apos;s Lower Secondary Curriculum, providing learners with opportunities to develop strong academic foundations while exploring their interests, abilities and future educational pathways.</p></div>
      <SubjectTable id="s1-s2-subjects" title="Compulsory subjects — Senior One and Senior Two" subjects={compulsorySubjects} />
      <SubjectTable id="s3-s4-subjects" title="Compulsory subjects — Senior Three and Senior Four" subjects={seniorCompulsorySubjects} />
      <p className={styles.tableNote}>The S.3–S.4 stage combines these compulsory learning areas with selected electives according to the applicable national curriculum requirements.</p>
      <SubjectTable id="elective-subjects" title="Elective subjects offered at AMHS" subjects={electiveSubjects} />
      <aside className={styles.note} aria-labelledby="subject-guidance-heading"><h3 id="subject-guidance-heading">Choosing subjects with confidence</h3><p>Subject combinations and elective selection are guided by the applicable national curriculum framework, school academic guidance and the learner&apos;s educational pathway. Students and parents are encouraged to consult the school administration for guidance on subject choices.</p><p>Electives are choices within the approved subject combination; students do not study every elective simultaneously.</p><Link className="text-link" href="/contact-us">Ask about subject choices <Arrow /></Link></aside>
    </div></section>

    <section id="o-level-journey" className={`container ${styles.section}`} aria-labelledby="journey-heading">
      <div className={styles.sectionHeading}><p className="eyebrow"><span /> Progress with purpose</p><h2 id="journey-heading">Your Academic Journey: Senior One to Senior Four</h2><p>The stages below describe the complete national four-year O-Level pathway. Contact the school for current class availability and admission guidance.</p></div>
      <ol className={styles.journey}>{learningJourney.map(year => <li key={year.year}><span className={styles.year}>{year.year}</span><h3>{year.title}</h3><p className={styles.journeySubtitle}>{year.subtitle}</p><p>{year.text}</p><h4>Key focus areas</h4><ul>{year.focus.map(focus => <li key={focus}>{focus}</li>)}</ul></li>)}</ol>
    </section>

    <section className={styles.tint} aria-labelledby="teaching-heading"><div className={`container ${styles.section}`}>
      <div className={styles.sectionHeading}><p className="eyebrow"><span /> Understanding through participation</p><h2 id="teaching-heading">Learning That Goes Beyond Memorisation</h2><p>Our teaching and learning approach encourages students to understand concepts, apply knowledge, ask meaningful questions and develop competencies that extend beyond the classroom.</p></div>
      <div className={styles.threeGrid}>{teachingApproaches.map((item, index) => <article className={styles.card} key={item.title}><span className={styles.icon}>{featureIcons[index % featureIcons.length]}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      <Link className={`text-link ${styles.sectionLink}`} href="/project-based-learning">Explore Project-Based Learning at AMHS <Arrow /></Link>
    </div></section>

    <section id="o-level-assessment" className={`container ${styles.section}`} aria-labelledby="assessment-heading">
      <div className={styles.sectionHeading}><p className="eyebrow"><span /> Progress, feedback and achievement</p><h2 id="assessment-heading">How Students Are Assessed</h2><p>Assessment under Uganda&apos;s competency-based Lower Secondary Curriculum supports the development and demonstration of knowledge, practical skills, understanding and competencies throughout the learning process.</p></div>
      <div className={styles.threeGrid}>
        <article className={styles.card}><h3>Continuous Assessment</h3><p>Continuous assessment involves evaluating learners&apos; progress through relevant classroom activities, assignments, practical work and other approved assessment methods. It provides opportunities for feedback, improvement and the demonstration of competencies over time.</p></article>
        <article className={styles.card}><h3>Project Work</h3><p>Project work provides opportunities for learners to investigate questions, apply knowledge, demonstrate practical competencies and develop research, creativity and problem-solving skills.</p><p>UNEB reports project achievement separately on the certificate, distinct from the subject-achievement score.</p></article>
        <article className={styles.card}><h3>Uganda Certificate of Education (UCE)</h3><p>At the end of the O-Level cycle, eligible Senior Four candidates undertake the Uganda Certificate of Education examinations administered by the Uganda National Examinations Board (UNEB), in accordance with the applicable national assessment framework.</p></article>
      </div>
      <div className={styles.assessmentPanel}>
        <div><p className="eyebrow"><span /> UCE subject achievement</p><h3>Learning throughout the cycle counts</h3><p>The current competency-based UCE subject-achievement model combines school-based continuous assessment with the UNEB end-of-cycle examination. Project achievement is reported separately.</p><p>Schools follow the applicable UNEB guidance for each candidate cohort. Contact the school for assessment arrangements relevant to your child&apos;s educational pathway.</p></div>
        <dl className={styles.weightings}><div><dt>School-based continuous assessment</dt><dd>20<span>%</span></dd></div><div><dt>End-of-cycle examination</dt><dd>80<span>%</span></dd></div></dl>
      </div>
      <p className={styles.source}>Sources: <a href="https://govinfohub.go.ug/index.php/2026/09/23/uneb-releases-2026-exam-timetables-as-candidature-rises-to-1-63-million/" target="_blank" rel="noopener noreferrer">Government update on 2026 UCE assessment <ExternalIcon /><span className={styles.srOnly}> (opens in a new tab)</span></a> and <a href="https://uneb.ac.ug/2025/04/15/project_theme_for_s3_2025/" target="_blank" rel="noopener noreferrer">UNEB project assessment guidance <ExternalIcon /><span className={styles.srOnly}> (opens in a new tab)</span></a>.</p>
    </section>

    <section className={styles.tint} aria-labelledby="competencies-heading"><div className={`container ${styles.section}`}>
      <div className={styles.sectionHeading}><p className="eyebrow"><span /> Beyond subject knowledge</p><h2 id="competencies-heading">Competencies for Learning, Life and the Future</h2><p>Across subjects and learning experiences, the curriculum encourages learners to develop skills, values and habits they can use in school and everyday life.</p></div>
      <div className={styles.competencyGrid}>{competencies.map((item, index) => <article key={item.title}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
    </div></section>

    <section id="o-level-support" className={`container ${styles.section}`} aria-labelledby="support-heading">
      <div className={styles.sectionHeading}><p className="eyebrow"><span /> Support for steady progress</p><h2 id="support-heading">Supporting Every Learner&apos;s Academic Growth</h2><p>Academic development requires more than classroom instruction. AMHS recognises the importance of guidance, access to learning resources, constructive feedback and an environment that encourages students to reach their potential.</p></div>
      <div className={styles.twoGrid}>
        <article className={styles.card}><h3>School Library</h3><p>Reading, reference materials and independent study help learners revisit ideas, broaden understanding and develop confidence beyond the classroom.</p><Link className="text-link" href="/library">Explore our school library <Arrow /></Link></article>
        <article className={styles.card}><h3>Academic Guidance</h3><p>Understanding progress, developing effective study habits and making informed subject choices are important parts of a learner&apos;s academic journey. Families can consult the school for guidance.</p><Link className="text-link" href="/contact-us">Speak with the school <Arrow /></Link></article>
        <article className={styles.card}><h3>Student Assessment and Feedback</h3><p>Constructive feedback helps learners identify strengths, recognise areas for improvement and take purposeful next steps in their learning.</p></article>
        <article className={styles.card}><h3>Character and Leadership Development</h3><p>Discipline, responsibility, cooperation and student leadership complement academic learning and help students become considerate members of their communities.</p><Link className="text-link" href="/student-leadership">Meet our student leaders <Arrow /></Link></article>
      </div>
    </section>

    <section className={styles.coCurricular} aria-labelledby="co-curricular-heading"><div className={`container ${styles.section} ${styles.coCurricularGrid}`}>
      <div><p className="eyebrow"><span /> Learning through school life</p><h2 id="co-curricular-heading">Developing Well-Rounded Learners</h2><p>At AMHS, academic education is complemented by opportunities for personal development, leadership, teamwork, creativity and responsible participation in school life. Co-curricular learning helps students discover their abilities, strengthen relationships and develop important life skills.</p><p>Participation in school and community life encourages cooperation, service and character development.</p></div>
      <div className={styles.relatedLinks}><Link href="/games-and-sport">Sports and physical development <Arrow /></Link><Link href="/student-leadership">Student leadership and prefectship <Arrow /></Link><Link href="/associations-and-clubs">Clubs and societies <Arrow /></Link><Link href="/arts-and-culture">Arts and creative expression <Arrow /></Link><Link href="/students-life">Explore student life <Arrow /></Link></div>
    </div></section>

    <section id="o-level-resources" className={`container ${styles.section}`} aria-labelledby="resources-heading">
      <div className={styles.sectionHeading}><p className="eyebrow"><span /> Official information</p><h2 id="resources-heading">Curriculum Information and Resources</h2><p>Use these official institutional resources for curriculum details and current assessment guidance. External documents remain on their publishers&apos; websites.</p></div>
      <div className={styles.threeGrid}>{curriculumResources.map(resource => <a className={styles.resourceCard} key={resource.href} href={resource.href} target="_blank" rel="noopener noreferrer"><span className={styles.external}><ExternalIcon /></span><h3>{resource.title}</h3><p>{resource.description}</p><span className={styles.resourceLabel}>Visit official resource <Arrow /><span className={styles.srOnly}> (opens in a new tab)</span></span></a>)}</div>
    </section>

    <section className={styles.admissions} aria-labelledby="admissions-heading"><div className="container"><p className="eyebrow eyebrow-light"><span /> Your next step</p><h2 id="admissions-heading">Begin Your O-Level Journey at AMHS</h2><p>At Asaba Memorial High School, we are committed to nurturing learners through quality education, meaningful learning experiences and the development of knowledge, competencies and character. Discover how our academic environment can support your child&apos;s educational journey.</p><div className={styles.actions}><Link className="button button-gold" href="/apply-now">Apply for Admission <Arrow /></Link><Link className="button button-outline-light" href="/contact-us">Contact the School <Arrow /></Link></div></div></section>
  </div>;
}
