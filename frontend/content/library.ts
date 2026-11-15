const libraryPhoto = (filename: string) => `/Images/AMHS%20Library%20Photos/${encodeURIComponent(filename)}`;

export const libraryHeroPhotos = [
  { src: libraryPhoto("WhatsApp Image 2026-11-15 at 4.39.17 PM.jpeg"), alt: "AMHS students reading at a library table and browsing books beside wooden shelves", position: "center 50%" },
  { src: libraryPhoto("WhatsApp Image 2026-11-15 at 4.39.17 PM (10).jpeg"), alt: "Students seated around a library table with open books", position: "center 48%" },
  { src: libraryPhoto("WhatsApp Image 2026-11-15 at 4.39.17 PM (3).jpeg"), alt: "AMHS student in a maroon blazer reading beside the library bookshelves", position: "center 45%" },
  { src: libraryPhoto("WhatsApp Image 2026-11-15 at 4.39.18 PM (2).jpeg"), alt: "Students studying with books spread across a table in the AMHS library", position: "center 48%" },
  { src: libraryPhoto("WhatsApp Image 2026-11-15 at 4.39.17 PM (6).jpeg"), alt: "Three AMHS students reading open books together in the library", position: "center 42%" },
] as const;

export const libraryOverviewPhoto = {
  src: libraryPhoto("WhatsApp Image 2026-11-15 at 4.39.18 PM (3).jpeg"),
  alt: "AMHS student looking through an open book in front of the library shelves",
};

export const libraryGalleryPhotos = [
  { src: libraryPhoto("WhatsApp Image 2026-11-15 at 4.39.17 PM (4).jpeg"), alt: "Two AMHS students reading and writing at a library table", title: "Focused Independent Study", caption: "Supporting concentration, self-discipline and the confidence to learn independently." },
  { src: libraryPhoto("WhatsApp Image 2026-11-15 at 4.39.18 PM (4).jpeg"), alt: "AMHS students studying from open books at a shared library table", title: "Learning Beyond the Classroom", caption: "Extending classroom knowledge through reading, reflection and academic exploration." },
  { src: libraryPhoto("WhatsApp Image 2026-11-15 at 4.39.17 PM (1).jpeg"), alt: "Student reading an illustrated book beside the AMHS library bookshelves", title: "Reading and Discovery", caption: "Encouraging students to explore ideas, discover new perspectives and appreciate reading." },
  { src: libraryPhoto("WhatsApp Image 2026-11-15 at 4.39.18 PM (5).jpeg"), alt: "Students gathered around a table with books in the school library", title: "Growing Together Through Learning", caption: "An environment where curiosity, shared ideas and academic determination can flourish." },
  { src: libraryPhoto("WhatsApp Image 2026-11-15 at 4.39.18 PM (1).jpeg"), alt: "Students concentrating on their books around an AMHS library table", title: "Knowledge for the Future", caption: "Building the reading, inquiry and critical-thinking habits that support lifelong learning." },
] as const;
