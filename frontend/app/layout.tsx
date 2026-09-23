import type { Metadata } from "next";
import "./globals.css";
import "./brand-theme.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const metadata: Metadata = {
  title: "Asaba Memorial High School | Lighting the Path to a Brighter Tomorrow",
  description: "Asaba Memorial High School is a mixed day and boarding secondary school in Kitanyata, Kiruli Sub-county, Masindi District, Uganda.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
