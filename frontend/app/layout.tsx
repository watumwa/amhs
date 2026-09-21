import type { Metadata } from "next";
import "./globals.css";
import "./brand-theme.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const metadata: Metadata = {
  title: "Asaba Memorial High School | Learn. Lead. Serve.",
  description: "A caring, ambitious learning community in Uganda.",
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
