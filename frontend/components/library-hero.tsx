"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { libraryHeroPhotos } from "../content/library";
import { Arrow } from "./icons";
import styles from "./school-library.module.css";

export function LibraryHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const hero = useRef<HTMLElement>(null);
  const playing = !paused && !reducedMotion && visible && pageVisible && !hovered && !focused;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    preference.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = "IntersectionObserver" in window ? new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 }) : null;
    if (observer && hero.current) observer.observe(hero.current);
    else setVisible(true);
    return () => {
      preference.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setActive(index => (index + 1) % libraryHeroPhotos.length), 5000);
    return () => window.clearInterval(timer);
  }, [playing, active]);

  function selectSlide(index: number) {
    setActive((index + libraryHeroPhotos.length) % libraryHeroPhotos.length);
  }

  return <section ref={hero} className={styles.hero} aria-label="Our school library" aria-roledescription="carousel"
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
    <div className={styles.slides}>
      {libraryHeroPhotos.map((photo, index) => <div className={styles.slide} data-active={index === active} aria-hidden={index !== active} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${libraryHeroPhotos.length}`} key={photo.src}>
        <Image src={photo.src} alt={photo.alt} fill sizes="100vw" priority={index === 0} loading={index === 0 ? undefined : "lazy"} style={{ objectPosition: photo.position }} />
      </div>)}
    </div>
    <div className={styles.heroShade} />
    <div className={`container ${styles.heroContent}`}>
      <p className="eyebrow eyebrow-light"><span /> Academics · Reading for life</p>
      <h1>OUR SCHOOL LIBRARY</h1>
      <p className={styles.heroHeadline}>Where Knowledge<br /><em>Inspires Possibilities</em></p>
      <p className={styles.heroDescription}>Discover a learning environment that encourages reading, independent study, curiosity and the pursuit of academic excellence.</p>
      <a className="button button-gold" href="#library-overview">Explore Our Library <Arrow /></a>
    </div>
    <div className={`container ${styles.controls}`} role="group" aria-label="Library slideshow controls">
      <div className={styles.arrows}>
        <button type="button" aria-label="Previous library photograph" onClick={() => selectSlide(active - 1)}><span className={styles.previous}><Arrow /></span></button>
        <button type="button" aria-label="Next library photograph" onClick={() => selectSlide(active + 1)}><Arrow /></button>
      </div>
      <div className={styles.indicators}>
        {libraryHeroPhotos.map((photo, index) => <button type="button" key={photo.src} aria-label={`Show photograph ${index + 1}: ${photo.alt}`} aria-pressed={active === index} onClick={() => selectSlide(index)}><span /></button>)}
      </div>
      <button type="button" className={styles.playback} disabled={reducedMotion} aria-label={reducedMotion ? "Automatic slideshow disabled for reduced motion" : paused ? "Play library slideshow" : "Pause library slideshow"} onClick={() => setPaused(value => !value)}>
        <svg viewBox="0 0 20 20" aria-hidden="true">{paused || reducedMotion ? <path d="m6 3 11 7-11 7Z" fill="currentColor" /> : <path d="M6 4v12M14 4v12" stroke="currentColor" strokeWidth="3" />}</svg>
        <span>{reducedMotion ? "Auto-play off" : paused ? "Play" : "Pause"}</span>
      </button>
      <span className={styles.srOnly} aria-live={playing ? "off" : "polite"} aria-atomic="true">Photograph {active + 1} of {libraryHeroPhotos.length}</span>
    </div>
  </section>;
}
