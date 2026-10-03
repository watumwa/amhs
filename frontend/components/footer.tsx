import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "./icons";
import { siteSettings } from "../content/site-settings";

function FooterPayments() {
  const [mtn, airtel] = siteSettings.schoolFeeMobileMoney;

  return <div className="container footer-payments">
    <div className="footer-payments-heading">
      <div><span>School fee payments</span><strong>Official payment channels</strong></div>
      <Link href="/fees#school-fee-payment-methods">View full payment instructions <span aria-hidden="true">→</span></Link>
    </div>
    <div className="footer-payment-options">
      <div className="footer-payment-option footer-payment-option--bank">
        <img src={siteSettings.bankAccount.logo} alt="Equity logo" width={376} height={265} />
        <div><span>Equity Bank account</span><strong>{siteSettings.bankAccount.accountNumber}</strong><small>{siteSettings.bankAccount.accountName}</small></div>
      </div>
      <div className="footer-payment-option footer-payment-option--mtn">
        <div className="footer-payment-brand footer-payment-brand--mtn" aria-label="MTN MoMo"><span>MTN</span><strong>MoMo</strong></div>
        <div><span>MTN merchant ID</span><strong>{mtn.merchantId}</strong><small>{mtn.paymentRoute}</small></div>
      </div>
      <div className="footer-payment-option footer-payment-option--airtel">
        <div className="footer-payment-brand footer-payment-brand--airtel" aria-label="Airtel Money"><strong>airtel</strong><span>money</span></div>
        <div><span>Airtel merchant ID</span><strong>{airtel.merchantId}</strong><small>{airtel.paymentRoute}</small></div>
      </div>
    </div>
  </div>;
}

export function Footer() {
  return <footer className="site-footer">
    <FooterPayments />
    <div className="container footer-grid">
      <div className="footer-brand"><div className="brand"><span className="crest" aria-hidden="true"><Image className="crest-image" src="/asaba-memorial-logo-tight.jpeg" alt="" width={500} height={500} /></span><span>Asaba Memorial <br /><strong>High School</strong></span></div><p>Lighting the Path to a Brighter Tomorrow</p></div>
      <div><h3>Explore</h3><Link href="/about">About AMHS</Link><Link href="/academics">Academics</Link><Link href="/admission">Admissions</Link><Link href="/students-life">Student Life</Link><Link href="/news-and-events">News and Events</Link><Link href="/contact-us">Contact Us</Link></div>
      <div><h3>Community</h3><Link href="/school-policies">Safeguarding</Link><Link href="/donate">Donate</Link><Link href="/sponsor-a-child">Sponsor a Child</Link><Link href="/school-exchange-programmes">Partner With Us</Link></div>
      <div className="footer-contact"><h3>Stay in touch</h3><p>Kitanyata 1 LCI, Kiruli Sub-county,<br />Buruli County, Masindi District, Uganda</p><p>Along Kyatiri–Kitanyata Road, approximately 8 km from Kyatiri Town</p><p>Telephone: +256 766 610 442 / +256 771 477 454</p><p>WhatsApp: +256 775 749 226</p><a href="mailto:info@amhs.sc.ug">info@amhs.sc.ug</a><p>P.O. Box: 480486 Masindi</p><SocialLinks /></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Asaba Memorial High School</span><div><Link href="/apply-now">Apply Now</Link><Link href="/sponsor-a-child">Sponsor a Child</Link><Link href="/school-exchange-programmes">Partner With Us</Link></div></div>
  </footer>;
}
