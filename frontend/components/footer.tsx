import { policies } from "../content/policies";
import { PolicyIcon } from "./school-policies";
import policyStyles from "./school-policies.module.css";
import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "./icons";
import { siteSettings } from "../content/site-settings";
import { DONATION_URL } from "../content/donation";
import licenceStyles from "./footer-licence.module.css";

function FooterLicence() {
  return <section className={`container ${licenceStyles.section}`} aria-labelledby="footer-licence-heading">
    <div className={licenceStyles.copy}>
      <h2 id="footer-licence-heading" className={licenceStyles.heading}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Z" /><path d="m8 12 3 3 5-6" /></svg>
        Officially Licensed Secondary School
      </h2>
      <p className={licenceStyles.statement}>Asaba Memorial High School (AMHS) is officially licensed to operate as a secondary school by the Ministry of Education and Sports of the Republic of Uganda.</p>
      <dl className={licenceStyles.details}>
        <div><dt>Licence No.:</dt><dd>ME/32/6833</dd></div>
        <div><dt>Issued:</dt><dd><time dateTime="2026-09-15">15 September 2026</time></dd></div>
      </dl>
    </div>
    <a className={licenceStyles.documentLink} href="/documents/AMHS_MoES_Operation_License.pdf" target="_blank" rel="noopener noreferrer">
      <span>View Operating Licence<span className={licenceStyles.srOnly}> (PDF, opens in a new tab)</span></span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 3h7v7M21 3 10 14M10 3H3v18h18v-7" /></svg>
    </a>
  </section>;
}

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
    <div className="container footer-support"><div><h2>Support AMHS</h2><p>Help strengthen our school community and its learning environment.</p></div><Link className="button button-gold" href={DONATION_URL}>Donate to AMHS</Link></div>
    <div className={`container footer-grid ${policyStyles.footerGrid}`}>
      <div className="footer-brand"><div className="brand"><span className="crest" aria-hidden="true"><Image className="crest-image" src="/asaba-memorial-logo-tight.jpeg" alt="" width={500} height={500} /></span><span>Asaba Memorial <br /><strong>High School</strong></span></div><p>Lighting the Path to a Brighter Tomorrow</p></div>
      <div><h3>Explore</h3><Link href="/about">About AMHS</Link><Link href="/academics">Academics</Link><Link href="/admission">Admissions</Link><Link href="/students-life">Student Life</Link><Link href="/news-and-events">News and Events</Link><Link href="/contact-us">Contact Us</Link></div>
      <div><h3>Community</h3><Link href="/school-policies">Safeguarding</Link><Link href="/donate">Donate</Link><Link href="/sponsor-a-child">Sponsor a Child</Link><Link href="/school-exchange-programmes">Partner With Us</Link></div>
      <div className={policyStyles.footerPolicies}><h3>School Policies</h3><Link href="/school-policies">View All School Policies</Link>{policies.filter(policy => policy.document).map(policy => <a key={policy.id} href={policy.document} download={policy.document!.split("/").pop()}><PolicyIcon type="download" /><span>{policy.title}<span className={policyStyles.srOnly}> (download PDF)</span></span></a>)}</div>
      <div className="footer-contact"><h3>Stay in touch</h3><p>Kitanyata 1 LCI, Kiruli Sub-county,<br />Buruli County, Masindi District, Uganda</p><p>Along Kyatiri–Kitanyata Road, approximately 8 km from Kyatiri Town</p><p>Telephone: +256 766 610 442 / +256 771 477 454</p><p>WhatsApp: +256 775 749 226</p><a href="mailto:asabamemorialhighschool@gmail.com">asabamemorialhighschool@gmail.com</a><p>P.O. Box: 480486 Masindi</p><SocialLinks /></div>
    </div>
    <FooterLicence />
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Asaba Memorial High School</span><div><Link href="/apply-now">Apply Now</Link><Link href="/sponsor-a-child">Sponsor a Child</Link><Link href="/school-exchange-programmes">Partner With Us</Link></div></div>
  </footer>;
}
