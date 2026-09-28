import Link from "next/link";
import { Arrow, Book, Compass, Medal, Sparkle } from "../components/icons";

const featureCards = [
  { icon: <Book />, number: "01", title: "Academic Learning", text: "A broad curriculum designed to build strong foundations in sciences, humanities, languages, technology and practical subjects.", href: "/curriculum" },
  { icon: <Compass />, number: "02", title: "Project-Based Learning", text: "Students apply classroom knowledge to practical projects and real-life challenges through investigation, creativity and teamwork.", href: "/project-based-learning" },
  { icon: <Medal />, number: "03", title: "Day & Boarding Education", text: "Our model serves learners from nearby communities and those travelling from farther away.", href: "/admission" },
  { icon: <Sparkle />, number: "04", title: "Practical & Vocational Skills", text: "Learning opportunities include ICT, tailoring and design, carpentry, entrepreneurship and other practical skills.", href: "/our-approach" },
  { icon: <Book />, number: "05", title: "Inclusive Education", text: "We seek to make secondary education accessible to learners from different social and economic backgrounds, including vulnerable and underserved learners.", href: "/about" },
  { icon: <Compass />, number: "06", title: "Character & Leadership", text: "Education at AMHS develops responsible, disciplined, confident and service-minded young people.", href: "/student-leadership" },
];

const approaches = [
  ["Academic excellence", "Our students learn in a school that values strong foundations, clear thinking and purposeful growth.", "ACADEMIC", "/curriculum"],
  ["Practical skills", "Learning includes areas such as ICT, tailoring and design, carpentry, entrepreneurship and other practical skills.", "PRACTICAL", "/our-approach"],
  ["Character & leadership", "Education at AMHS develops responsible, disciplined, confident and service-minded young people.", "LEAD", "/student-leadership"],
];

const asabaValues = [
  ["A", "Accountability", "We teach learners to take responsibility for their choices, learning and responsibilities and to act with honesty and integrity."],
  ["S", "Service", "We believe leadership begins with serving others. Students are encouraged to care, contribute and use their abilities for the good of others."],
  ["A", "Ambition", "We encourage every learner to dream, set meaningful goals and work persistently towards achieving them."],
  ["B", "Belief", "We nurture confidence, resilience, faith and optimism so that students learn to believe in their potential and the potential of others."],
  ["A", "Action for Empowerment", "Knowledge should lead to action. We equip learners with knowledge, skills and confidence that they can use to improve their lives and contribute positively to society."],
];

const plannedFacilities = ["Science laboratories", "Additional classrooms", "Dormitories", "Sports facilities", "Other learning infrastructure"];

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-image hero-image-one" aria-hidden="true" />
        <div className="hero-content container">
          <p className="eyebrow eyebrow-light"><span /> Asaba Memorial High School</p>
          <h1 id="hero-heading">Lighting the Path to a Brighter Tomorrow</h1>
          <p className="hero-copy">Quality Education. Practical Skills. Strong Values. Brighter Futures.</p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/apply-now">Apply for Admission <Arrow /></Link>
            <Link className="text-link text-link-light" href="/about">Explore AMHS <Arrow /></Link>
          </div>
        </div>
        <a href="#welcome" className="scroll-cue"><span>Explore AMHS</span><i /></a>
        <div className="hero-geometry" />
      </section>

      <section className="stats-band" aria-label="School highlights">
        <div className="container stats-grid">
            <div><strong>2</strong><span>learning<br />pathways</span></div>
            <div><strong>5</strong><span>ASABA<br />values</span></div>
            <div><strong>1</strong><span>shared<br />mission</span></div>
            <div><strong>∞</strong><span>brighter<br />futures</span></div>
        </div>
      </section>

      <section className="intro-section container" id="welcome">
        <div className="intro-media">
          <div className="image-frame image-welcome" />
          <div className="quote-card"><Sparkle /><p>“At AMHS, education goes beyond passing examinations.”</p></div>
          <div className="experience-mark"><strong>AMHS</strong><span>mixed day &amp;<br />boarding</span></div>
        </div>
        <div className="intro-copy">
          <p className="eyebrow"><span /> Welcome to AMHS</p>
          <h2>Welcome to Asaba<br /><em>Memorial High School.</em></h2>
          <p>Asaba Memorial High School (AMHS) is a mixed day and boarding secondary school located in Kitanyata, Kiruli Sub-county, Masindi District, Uganda. We provide an inclusive, values-based and learner-centred education designed to help young people grow academically, socially, spiritually and practically.</p>
          <p>The school was established to improve access to secondary education within Kiruli Sub-county and surrounding communities, particularly for families affected by distance, poverty and limited access to affordable secondary schools.</p>
          <p>At Asaba Memorial High School, we believe that every child deserves an opportunity to learn, discover their potential and build a meaningful future.</p>
          <p>Our school combines the national secondary school curriculum with practical learning, leadership development, character formation, technology, vocational skills, sports and co-curricular activities.</p>
          <p>We serve learners from Kiruli Sub-county, the wider Masindi District and other communities, including learners who require boarding facilities. Particular attention is given to creating opportunities for vulnerable and underserved learners.</p>
          <p>Whether a learner&apos;s future lies in university education, professional training, entrepreneurship, technology, vocational work or community leadership, our goal is to provide the foundation upon which that future can be built.</p>
          <Link className="text-link" href="/about">Who we are <Arrow /></Link>
        </div>
      </section>

      <section className="values-section">
        <div className="container values-grid">
          <div className="values-intro"><p className="eyebrow"><span /> Our foundation</p><h2>Knowledge, character<br /><em>and purpose.</em></h2><p>Our educational approach combines academic excellence, spiritual growth, life skills development and community responsibility.</p></div>
          <div className="values-panel"><div><p className="label">Our Vision</p><p>To be a model school that nurtures responsible, empowered, and values-driven leaders through inclusive, holistic, and transformative education that equips students to become change makers in their communities.</p></div><div><p className="label">Our Mission</p><p>To provide quality, inclusive, and values-based education that empowers students, especially from vulnerable and underserved communities, to grow in knowledge, character, and purpose.</p></div></div>
          <div className="asaba-values"><p className="label">The ASABA Values</p><p className="asaba-note">Our name expresses the values we want every learner to carry beyond the school gates.</p>{asabaValues.map(([letter, name, text]) => <div key={name}><strong>{letter}</strong><span><b>{name}</b> {text}</span></div>)}<p className="asaba-note">These five principles form the school&apos;s documented ASABA Values.</p></div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow"><span /> Why choose AMHS?</p><h2>Big ambitions.<br /><em>Strong values.</em></h2></div>
            <p>At AMHS, education goes beyond passing examinations. We prepare learners to think, create, solve problems, develop practical skills, serve others and become responsible leaders in their communities.</p>
          </div>
          <div className="feature-grid">
            {featureCards.map((card) => <Link href={card.href} className="feature-card" key={card.number}>
              <div className="card-top"><span className="feature-icon">{card.icon}</span><span>{card.number}</span></div>
              <h3>{card.title}</h3><p>{card.text}</p><span className="circle-arrow"><Arrow /></span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="container">
          <div className="section-heading centered"><p className="eyebrow"><span /> Learning for life</p><h2>Learning that comes <em>alive.</em></h2><p>AMHS adopts Project-Based Learning as an important part of its educational approach. Students are encouraged to move beyond memorising information and learn through investigation, creativity, teamwork and practical application.</p><p>The school&apos;s practical learning areas include computer and technology skills, tailoring and design, hairdressing and beauty services, soap making, carpentry, business and entrepreneurship.</p></div>
          <div className="approach-grid">
            {approaches.map(([title, copy, tag, href], i) => <article className={`approach-card approach-${i + 1}`} key={title}>
              <div className="approach-image" /><div className="approach-overlay" />
              <div className="approach-content"><span>{tag}</span><h3>{title}</h3><p>{copy}</p><Link href={href} aria-label={`Learn about ${title}`}><Arrow /></Link></div>
            </article>)}
          </div>
          <div className="center-action"><Link className="text-link" href="/our-approach">Discover Our Approach <Arrow /></Link></div>
        </div>
      </section>

      <section className="content-section container home-facilities">
        <div className="content-copy">
          <p className="eyebrow"><span /> School facilities</p>
          <h2>Building a growing<br /><em>school community.</em></h2>
          <p>AMHS is developing its campus progressively to meet the educational needs of a growing student population.</p>
          <p>Current and developing facilities include classrooms, administration facilities, boarding accommodation, vocational training space, sanitation facilities, a kitchen, playground, library facilities, computer facilities and reliable water and electricity systems.</p>
          <Link className="button button-navy" href="/facilities">Explore Our Facilities <Arrow /></Link>
        </div>
        <aside className="facts-card"><p>Longer-term development programme</p><ul className="check-list">{plannedFacilities.map((item) => <li key={item}>{item}</li>)}</ul></aside>
      </section>

      <section className="admission-callout">
        <div className="container admission-content">
          <p className="eyebrow eyebrow-light"><span /> Admissions are open</p>
          <h2>Your journey at AMHS<br />starts <em>here.</em></h2>
          <p>We welcome families looking for an education that combines academic learning, practical skills, discipline, values and personal development.</p>
          <p>AMHS provides opportunities for both day and boarding students.</p>
          <div className="hero-actions"><Link className="button button-gold" href="/admission">Admission Information <Arrow /></Link><Link className="text-link text-link-light" href="/apply-now">Apply Now <Arrow /></Link></div>
        </div>
        <div className="admission-photo" />
      </section>

      <section className="stories-section container">
        <div className="section-heading split-heading"><div><p className="eyebrow"><span /> From our community</p><h2>Stories that<br /><em>inspire us.</em></h2></div><Link className="text-link" href="/success-stories">Read all stories <Arrow /></Link></div>
        <div className="story-grid">
          <article className="story-main"><div className="story-image" /><div className="story-main-content"><p className="label">Student spotlight</p><h3>Meet the students finding their voice through music.</h3><Link href="/students-life" className="text-link text-link-light">Read their story <Arrow /></Link></div></article>
          <article className="story-quote"><span className="quote-mark">“</span><p>AMHS gave me the confidence to put my hand up, take the lead, and believe I had something to offer.</p><div><strong>Grace N.</strong><span>Class of 2024</span></div></article>
        </div>
      </section>

      <section className="support-strip"><div className="container"><div><p className="eyebrow eyebrow-light"><span /> A shared future</p><h2>Support a student.<br /><em>Transform a future.</em></h2></div><div className="support-copy"><p>Some capable young people face significant financial and social barriers to secondary education.</p><p>AMHS seeks to ensure that vulnerability does not automatically end a learner&apos;s educational journey. The school&apos;s inclusive approach includes consideration of bursary support based on individual socio-economic circumstances.</p><p>Through sponsorships, donations and partnerships, individuals and organisations can help us expand educational opportunities and strengthen the learning environment.</p></div><div className="support-actions"><Link className="button button-gold" href="/sponsor-a-child">Sponsor a Child <Arrow /></Link><Link className="button button-outline-light" href="/get-involved">Support AMHS <Arrow /></Link></div></div></section>
    </>
  );
}
