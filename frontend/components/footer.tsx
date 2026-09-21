import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div className="footer-brand"><div className="brand"><span className="crest" aria-hidden="true"><Image className="crest-image" src="/asaba-memorial-logo.jpeg" alt="" width={500} height={500} /></span><span>Asaba Memorial<br /><strong>High School</strong></span></div><p>A caring, ambitious community where young people learn, lead and serve.</p></div>
    <div><h3>Explore</h3><Link href="/about">Who we are</Link><Link href="/academics">Academics</Link><Link href="/admission">Admission</Link><Link href="/our-approach">Our approach</Link></div>
    <div><h3>Community</h3><Link href="/students-life">Student life</Link><Link href="/success-stories">Success stories</Link><Link href="/get-involved">Get involved</Link><Link href="/school-policies">School policies</Link></div>
    <div className="footer-contact"><h3>Stay in touch</h3><p>Asaba, Uganda<br />P.O. Box 245, Kampala</p><a href="mailto:info@amhs.ac.ug">info@amhs.ac.ug</a><p>+256 700 000 000</p><div className="socials"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="YouTube">▶</a></div></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Asaba Memorial High School</span><div><Link href="/school-policies">Privacy</Link><Link href="/school-policies">Terms</Link></div></div></footer>;
}
