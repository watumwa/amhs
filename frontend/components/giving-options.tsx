"use client";

import { useState } from "react";

const choices = ["UGX 50,000", "UGX 100,000", "UGX 250,000"];
export function GivingOptions({ sponsor = false }: { sponsor?: boolean }) {
  const [selected, setSelected] = useState(1);
  const [complete, setComplete] = useState(false);
  if (complete) return <div className="form-success giving-success"><span>♥</span><h2>Thank you for stepping in.</h2><p>Our team will contact you to complete this {sponsor ? "sponsorship" : "donation"} securely.</p></div>;
  return <div className="giving-card"><p className="eyebrow"><span /> {sponsor ? "Sponsor a child" : "Make a gift"}</p><h2>{sponsor ? "Choose your monthly support" : "Choose an amount"}</h2><div className="amount-grid">{choices.map((choice, i) => <button type="button" className={selected === i ? "selected" : ""} onClick={() => setSelected(i)} key={choice}>{choice}{sponsor && <small>/ month</small>}</button>)}</div><label>Your email<input type="email" required placeholder="you@example.com" /></label><button className="button button-gold" onClick={() => setComplete(true)}>{sponsor ? "Sponsor a child" : "Continue to donate"} <span>→</span></button><p className="giving-note">You will be taken to our secure payment partner to complete your gift.</p></div>;
}
