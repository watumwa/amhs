"use client";

import { useEffect, useId, useRef, useState } from "react";
import { siteSettings } from "../content/site-settings";
import styles from "./whatsapp-support.module.css";

const message = "Hello Asaba Memorial High School, I visited your website and would like to make an enquiry.";
const chatUrl = `https://wa.me/${siteSettings.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
const welcomeSessionKey = "amhs-whatsapp-welcome-handled";

function welcomeHandled() {
  try {
    return window.sessionStorage.getItem(welcomeSessionKey) !== null;
  } catch {
    // Avoid repeated automatic popups when session storage is unavailable.
    return true;
  }
}

function rememberWelcome() {
  try {
    window.sessionStorage.setItem(welcomeSessionKey, "true");
  } catch {
    // Manual controls remain available when browser storage is blocked.
  }
}

function WhatsAppLogo() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M20.52 3.48A11.89 11.89 0 0 0 12.05 0C5.45 0 .07 5.37.06 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.34-1.66a11.97 11.97 0 0 0 5.71 1.45h.01c6.6 0 11.98-5.37 11.99-11.98a11.9 11.9 0 0 0-3.53-8.33ZM12.06 21.77a9.93 9.93 0 0 1-5.06-1.39l-.36-.21-3.76.99 1-3.67-.24-.38a9.94 9.94 0 0 1-1.52-5.13c0-5.49 4.47-9.96 9.97-9.96a9.9 9.9 0 0 1 7.05 2.93 9.9 9.9 0 0 1 2.92 7.05c-.01 5.5-4.48 9.97-9.98 9.97Zm5.47-7.46c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.12 4.51.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" /></svg>;
}

export function WhatsAppSupport() {
  const [open, setOpen] = useState(false);
  const id = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const welcomeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function cancelAutomaticWelcome() {
    if (welcomeTimer.current !== null) {
      clearTimeout(welcomeTimer.current);
      welcomeTimer.current = null;
    }
    // Manual interaction also consumes this session's automatic welcome.
    rememberWelcome();
  }

  useEffect(() => {
    if (welcomeHandled()) return;
    welcomeTimer.current = setTimeout(() => {
      welcomeTimer.current = null;
      if (welcomeHandled()) return;
      rememberWelcome();
      setOpen(true);
    }, 3000);
    return () => {
      if (welcomeTimer.current !== null) {
        clearTimeout(welcomeTimer.current);
        welcomeTimer.current = null;
      }
    };
  }, []);

  function close() {
    cancelAutomaticWelcome();
    setOpen(false);
    trigger.current?.focus();
  }

  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus({ preventScroll: true });
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && !document.querySelector("dialog[open]")) {
        event.preventDefault();
        rememberWelcome();
        setOpen(false);
        trigger.current?.focus({ preventScroll: true });
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return <aside className={styles.widget} aria-label="WhatsApp support">
    <button ref={trigger} className={styles.trigger} type="button" aria-expanded={open} aria-controls={id} aria-haspopup="dialog" onClick={() => { cancelAutomaticWelcome(); setOpen(value => !value); }}>
      <WhatsAppLogo /><span>WhatsApp</span>
    </button>
    <section id={id} className={styles.popup} data-open={open} role="dialog" aria-modal="false" aria-labelledby={`${id}-heading`} aria-describedby={`${id}-description`} aria-hidden={!open} inert={!open}>
      <header className={styles.header}>
        <div><h2 id={`${id}-heading`}>Asaba Memorial High School</h2><p>WhatsApp Support</p></div>
        <button ref={closeButton} type="button" className={styles.close} aria-label="Close WhatsApp support" onClick={close}><span aria-hidden="true">×</span></button>
      </header>
      <div className={styles.body}>
        <div id={`${id}-description`} className={styles.welcome}>
          <p>Welcome to Asaba Memorial High School (AMHS)! 👋</p>
          <p>Hello! How can we assist you today?</p>
          <p>Feel free to contact us about admissions, school fees, academic programmes, partnerships or general enquiries.</p>
          <p>We look forward to hearing from you!</p>
        </div>
        <a className={styles.action} href={chatUrl} target="_blank" rel="noopener noreferrer"><WhatsAppLogo /><span>Start WhatsApp Chat<span className={styles.srOnly}> (opens in a new tab)</span></span></a>
      </div>
    </section>
  </aside>;
}
