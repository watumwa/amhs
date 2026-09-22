/**
 * Edit this file first when preparing the site for launch.
 * These values are used in the header, footer, page metadata and enquiry form.
 */
export const siteSettings = {
  schoolName: "Asaba Memorial High School",
  shortName: "AMHS",
  motto: "Learn. Lead. Serve.",
  description: "A caring, ambitious learning community in Uganda.",
  admissions: {
    announcement: "Applications for 2027 are now open",
    entryYears: ["2027", "2028", "2029"],
    email: "admissions@amhs.ac.ug",
  },
  contact: {
    email: "info@amhs.ac.ug",
    phone: "+256 700 000 000",
    location: "Asaba, Uganda",
    postalAddress: "P.O. Box 245, Kampala",
  },
  socialLinks: [
    { label: "Facebook", symbol: "f", href: "https://www.facebook.com/" },
    { label: "Instagram", symbol: "◎", href: "https://www.instagram.com/" },
    { label: "YouTube", symbol: "▶", href: "https://www.youtube.com/" },
  ],
} as const;
