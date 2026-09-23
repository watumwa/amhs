"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavigationItem = {
  label: string;
  href?: string;
  links?: readonly (readonly [string, string])[];
};

const navigation: readonly NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Who we are", links: [["About us", "/about"], ["AMHS Roots", "/amhs-roots"], ["Our team", "/team"], ["Our staff", "/staff"], ["Board of Governors", "/board-of-governors"], ["PTA Leadership", "/pta-leadership"], ["Student Leadership", "/student-leadership"], ["Success stories", "/success-stories"], ["School policies", "/school-policies"], ["Our partners", "/partners"], ["School facilities", "/facilities"]] },
  { label: "Academics", links: [["Curriculum", "/curriculum"], ["Academic calendar", "/academic-calendar"], ["Subjects offered", "/subjects"], ["School library", "/library"], ["National & school syllabus", "/syllabus"]] },
  { label: "Admission", links: [["Fees structure", "/fees"], ["School uniform", "/uniform"], ["Apply now", "/apply-now"]] },
  { label: "Our approach", links: [["Our approach overview", "/our-approach"], ["Project-based learning", "/project-based-learning"], ["School exchange programmes", "/school-exchange-programmes"], ["Brass Band Club (BBC)", "/brass-band-club"], ["Games & sports", "/games-and-sport"], ["Talent development", "/talent-development"], ["Associations & clubs", "/associations-and-clubs"]] },
  { label: "Students life", href: "/students-life" },
  { label: "Get involved", links: [["Donate", "/donate"], ["Sponsor a child", "/sponsor-a-child"], ["School exchanges", "/school-exchange-programmes"]] },
] as const;

function Crest() {
  return <span className="crest" aria-hidden="true">
    <Image className="crest-image" src="/asaba-memorial-logo.jpeg" alt="" width={500} height={500} priority />
  </span>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return <>
    <div className="utility-bar"><div className="container"><span>Applications for 2027 are now open</span><div><a href="mailto:info@amhs.sc.ug">info@amhs.sc.ug</a><span className="utility-dot" /> <span>+256 766 610 442</span></div></div></div>
    <header className="site-header"><div className="container header-inner">
      <Link href="/" className="brand" aria-label="Asaba Memorial High School home"><Crest /><span>Asaba Memorial<br /><strong>High School</strong></span></Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><i /><i /><i /></button>
      <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
        {navigation.map((item) => item.href ? <Link className={path === item.href ? "active" : ""} aria-current={path === item.href ? "page" : undefined} href={item.href} key={item.label} onClick={() => setOpen(false)}>{item.label}</Link> :
          <div className="nav-menu" key={item.label}><button className={item.links!.some(([, href]) => path === href) ? "active" : ""}>{item.label}</button><div className="dropdown">{item.links!.map(([name, href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{name}</Link>)}</div></div>)}
      </nav>
      <Link href="/apply-now" className="header-apply">Apply now <span>↗</span></Link>
    </div></header>
  </>;
}
