import Link from "next/link";

export default function NotFound() { return <section className="not-found container"><p className="eyebrow"><span /> Page not found</p><h1>We couldn&apos;t find<br /><em>that page.</em></h1><p>Let&apos;s get you back to the AMHS home page.</p><Link href="/" className="button button-gold">Return home <span>→</span></Link></section>; }
