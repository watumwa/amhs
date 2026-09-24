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
          <h2>Education with<br /><em>knowledge, character and purpose.</em></h2>
          <p>Asaba Memorial High School is a mixed day and boarding secondary school located in Kitanyata, Kiruli Sub-county, Masindi District, Uganda.</p>
          <p>We provide an inclusive, values-based and learner-centred education designed to help young people grow academically, socially, spiritually and practically.</p>
          <p>Our school combines the national secondary curriculum with practical learning, leadership development, character formation, technology, vocational skills, sports and co-curricular activities.</p>
          <p>Whether a learner&apos;s future lies in university education, professional training, entrepreneurship, technology, vocational work or community leadership, our goal is to provide the foundation upon which that future can be built.</p>
          <Link className="text-link" href="/about">Who we are <Arrow /></Link>
        </div>
      </section>

      <section className="values-section">
        <div className="container values-grid">
          <div className="values-intro"><p className="eyebrow"><span /> Our foundation</p><h2>Knowledge, character<br /><em>and purpose.</em></h2><p>Our vision and mission guide an education that is inclusive, holistic, transformative and rooted in community responsibility.</p></div>
          <div className="values-panel"><div><p className="label">Our Vision</p><p>To be a model school that nurtures responsible, empowered, and values-driven leaders through inclusive, holistic, and transformative education that equips students to become change makers in their communities.</p></div><div><p className="label">Our Mission</p><p>To provide quality, inclusive, and values-based education that empowers students, especially from vulnerable and underserved communities, to grow in knowledge, character, and purpose.</p></div></div>
          <div className="asaba-values"><p className="label">The ASABA Values</p><div><strong>A</strong><span><b>Accountability</b> Responsibility, honesty and integrity.</span></div><div><strong>S</strong><span><b>Service</b> Leadership begins with serving others.</span></div><div><strong>A</strong><span><b>Ambition</b> Dream, set goals and work persistently.</span></div><div><strong>B</strong><span><b>Belief</b> Confidence, resilience, faith and optimism.</span></div><div><strong>A</strong><span><b>Action for Empowerment</b> Turn knowledge into positive action.</span></div></div>
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
          <div className="section-heading centered"><p className="eyebrow"><span /> Learning beyond the classroom</p><h2>Learning that comes <em>alive.</em></h2><p>Opportunity here is never one-size-fits-all. It happens in the classroom, on the field, on stage, and out in the community.</p></div>
          <div className="approach-grid">
            {approaches.map(([title, copy, tag, href], i) => <article className={`approach-card approach-${i + 1}`} key={title}>
              <div className="approach-image" /><div className="approach-overlay" />
              <div className="approach-content"><span>{tag}</span><h3>{title}</h3><p>{copy}</p><Link href={href} aria-label={`Learn about ${title}`}><Arrow /></Link></div>
            </article>)}
          </div>
          <div className="center-action"><Link className="text-link" href="/our-approach">Explore our approach <Arrow /></Link></div>
        </div>
      </section>

      <section className="admission-callout">
        <div className="container admission-content">
          <p className="eyebrow eyebrow-light"><span /> Admissions are open</p>
          <h2>Your journey at AMHS<br />starts <em>here.</em></h2>
          <p>We welcome families looking for an education that combines academic learning, practical skills, discipline, values and personal development.</p>
          <Link className="button button-gold" href="/apply-now">Admission Information <Arrow /></Link>
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

      <section className="support-strip"><div className="container"><div><p className="eyebrow eyebrow-light"><span /> A shared future</p><h2>Support a student.<br /><em>Transform a future.</em></h2></div><p>Some capable young people face significant financial and social barriers to secondary education. Through sponsorships, donations and partnerships, individuals and organisations can help us expand educational opportunities and strengthen the learning environment.</p><Link className="button button-outline-light" href="/sponsor-a-child">Sponsor a Child <Arrow /></Link></div></section>
    </>
  );
}
