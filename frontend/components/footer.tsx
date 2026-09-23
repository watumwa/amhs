import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div className="footer-brand"><div className="brand"><span className="crest" aria-hidden="true"><Image className="crest-image" src="/asaba-memorial-logo.jpeg" alt="" width={500} height={500} /></span><span>Asaba Memorial<br /><strong>High School</strong></span></div><p>Lighting the Path to a Brighter Tomorrow</p></div>
    <div><h3>Explore</h3><Link href="/about">About AMHS</Link><Link href="/academics">Academics</Link><Link href="/admission">Admissions</Link><Link href="/students-life">Student Life</Link></div>
    <div><h3>Community</h3><Link href="/school-policies">Safeguarding</Link><Link href="/get-involved">Donate</Link><Link href="/sponsor-a-child">Sponsor a Child</Link><Link href="/contact-us">Contact Us</Link></div>
    <div className="footer-contact"><h3>Stay in touch</h3><p>Kitanyata 1 LCI, Kiruli Sub-county,<br />Buruli County, Masindi District, Uganda</p><p>Along Kyatiri–Kitanyata Road, approximately 8 km from Kyatiri Town</p><p>Telephone: +256 766 610 442 / +256 771 477 454</p><p>WhatsApp: +256 775 749 226</p><a href="mailto:info@amhs.sc.ug">info@amhs.sc.ug</a><p>P.O. Box: 480486 Masindi</p></div>
  </div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Asaba Memorial High School</span><div><Link href="/apply-now">Apply Now</Link><Link href="/sponsor-a-child">Sponsor a Child</Link><Link href="/school-exchange-programmes">Partner With Us</Link></div></div></footer>;
}
