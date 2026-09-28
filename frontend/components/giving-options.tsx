"use client";

import { useState } from "react";

const choices = ["UGX 50,000", "UGX 100,000", "UGX 250,000"];
const supportAreas = ["Student Education", "Library & Books", "ICT & Digital Learning", "Science Education", "Vocational Skills", "Sports & Talent", "Infrastructure", "Where Most Needed"];
export function GivingOptions({ sponsor = false }: { sponsor?: boolean }) {
  const [selected, setSelected] = useState(1);
  const [area, setArea] = useState(supportAreas.length - 1);
  const [complete, setComplete] = useState(false);
  if (complete) return <div className="form-success giving-success"><span>♥</span><h2>Thank you for stepping in.</h2><p>Our team will contact you to complete this {sponsor ? "sponsorship" : "donation"} securely.</p></div>;
  return <div className="giving-card"><p className="eyebrow"><span /> {sponsor ? "Sponsor a child" : "Make a gift"}</p><h2>{sponsor ? "Sponsor a Student" : "Choose an Area to Support"}</h2>{sponsor ? <p className="giving-description">A sponsorship programme can help cover approved costs such as tuition, boarding, meals, uniform, learning materials, examination requirements and personal scholastic needs.</p> : <><div className="support-area-grid">{supportAreas.map((name, i) => <button type="button" className={area === i ? "selected" : ""} aria-pressed={area === i} onClick={() => setArea(i)} key={name}>{name}</button>)}</div><div className="amount-grid">{choices.map((choice, i) => <button type="button" className={selected === i ? "selected" : ""} aria-pressed={selected === i} onClick={() => setSelected(i)} key={choice}>{choice}</button>)}</div></>}<label>Your email<input type="email" required placeholder="you@example.com" /></label><button className="button button-gold" onClick={() => setComplete(true)}>{sponsor ? "Sponsor a Student" : "Donate Now"} <span>→</span></button><p className="giving-note">Payment information will be published only after the school&apos;s official receiving account or mobile-money arrangements are formally approved.</p></div>;
}
