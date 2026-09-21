import Link from "next/link";
import { Arrow, Book, Compass, Medal, Sparkle } from "../components/icons";

const featureCards = [
  { icon: <Book />, number: "01", title: "Academic rigour", text: "A curriculum that builds confident thinkers, purposeful writers, and lifelong learners.", href: "/curriculum" },
  { icon: <Compass />, number: "02", title: "Whole-child growth", text: "Every learner has room to explore their character, creativity, talents, and voice.", href: "/our-approach" },
  { icon: <Medal />, number: "03", title: "A culture of excellence", text: "High expectations, personal care, and a community that celebrates progress.", href: "/success-stories" },
];

const approaches = [
  ["Hands-on learning", "We make learning tangible through projects that connect knowledge with the real world.", "PBL"],
  ["Made for the team", "Sport, brass band, clubs and exchanges teach our students how to belong and contribute.", "LIFE"],
  ["Grounded leadership", "Our students learn to lead with humility, courage, and service to others.", "LEAD"],
];

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-image" />
        <div className="hero-content container">
          <p className="eyebrow eyebrow-light"><span /> Est. 1985 · A community of possibility</p>
          <h1 id="hero-heading">A place to grow<br /><em>and make a difference.</em></h1>
          <p className="hero-copy">At Asaba Memorial High School, we nurture capable, curious young people who are ready to shape a brighter future.</p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/apply-now">Begin your journey <Arrow /></Link>
            <Link className="text-link text-link-light" href="/about">Discover AMHS <Arrow /></Link>
          </div>
        </div>
        <a href="#welcome" className="scroll-cue"><span>Explore AMHS</span><i /></a>
        <div className="hero-geometry" />
      </section>

      <section className="stats-band" aria-label="School highlights">
        <div className="container stats-grid">
          <div><strong>40</strong><span>years of<br />shaping lives</span></div>
          <div><strong>98<span className="small">%</span></strong><span>national exam<br />pass rate</span></div>
          <div><strong>24</strong><span>clubs &amp;<br />activities</span></div>
          <div><strong>1</strong><span>remarkable<br />community</span></div>
        </div>
      </section>

      <section className="intro-section container" id="welcome">
        <div className="intro-media">
          <div className="image-frame image-welcome" />
          <div className="quote-card"><Sparkle /><p>“The best preparation for tomorrow is a meaningful today.”</p></div>
          <div className="experience-mark"><strong>40</strong><span>years of<br />excellence</span></div>
        </div>
        <div className="intro-copy">
          <p className="eyebrow"><span /> Welcome to AMHS</p>
          <h2>Education with<br /><em>heart and purpose.</em></h2>
          <p>We believe a truly excellent education sees every child: their potential, their questions, their gifts, and where they want to go next.</p>
          <p>In our warm, energetic community, students become accomplished learners and grounded young leaders.</p>
          <Link className="text-link" href="/about">Who we are <Arrow /></Link>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow"><span /> The AMHS difference</p><h2>Big ambitions.<br /><em>Individual attention.</em></h2></div>
            <p>We create the conditions for every student to discover what they can do, then support them as they go further.</p>
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
            {approaches.map(([title, copy, tag], i) => <article className={`approach-card approach-${i + 1}`} key={title}>
              <div className="approach-image" /><div className="approach-overlay" />
              <div className="approach-content"><span>{tag}</span><h3>{title}</h3><p>{copy}</p><Link href="/our-approach" aria-label={`Learn about ${title}`}><Arrow /></Link></div>
            </article>)}
          </div>
          <div className="center-action"><Link className="text-link" href="/our-approach">Explore our approach <Arrow /></Link></div>
        </div>
      </section>

      <section className="admission-callout">
        <div className="container admission-content">
          <p className="eyebrow eyebrow-light"><span /> Admissions are open</p>
          <h2>Your next chapter<br />starts <em>here.</em></h2>
          <p>Give your child a strong start in a community that will know them, challenge them, and cheer them on.</p>
          <Link className="button button-gold" href="/apply-now">Apply to AMHS <Arrow /></Link>
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

      <section className="support-strip"><div className="container"><div><p className="eyebrow eyebrow-light"><span /> A shared future</p><h2>Help a young person<br /><em>go further.</em></h2></div><p>When you give to AMHS, you help open up learning, opportunity, and a hopeful future for the children in our care.</p><Link className="button button-outline-light" href="/get-involved">Get involved <Arrow /></Link></div></section>
    </>
  );
}
