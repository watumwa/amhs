/**
 * Edit this file first when preparing the site for launch.
 * These values are used in the header, footer, page metadata and enquiry form.
 */
export const siteSettings = {
  schoolName: "Asaba Memorial High School",
  shortName: "AMHS",
  motto: "Lighting the Path to a Brighter Tomorrow",
  description: "Asaba Memorial High School is a mixed day and boarding secondary school in Kitanyata, Kiruli Sub-county, Masindi District, Uganda.",
  admissions: {
    announcement: "Applications for 2027 are now open",
    entryYears: ["2027", "2028", "2029"],
    email: "info@amhs.sc.ug",
  },
  contact: {
    email: "info@amhs.sc.ug",
    phone: "+256 766 610 442 / +256 771 477 454",
    whatsapp: "+256 775 749 226",
    location: "Kitanyata 1 LCI, Kiruli Sub-county, Buruli County, Masindi District, Uganda",
    postalAddress: "P.O. Box 480486 Masindi",
  },
  socialLinks: [
    { label: "Facebook", symbol: "f", href: "https://www.facebook.com/" },
    { label: "Instagram", symbol: "◎", href: "https://www.instagram.com/" },
    { label: "YouTube", symbol: "▶", href: "https://www.youtube.com/" },
  ],
} as const;
