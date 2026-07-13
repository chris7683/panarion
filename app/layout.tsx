import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

export const metadata: Metadata = {
  title: "Panarion Center for Patristic Heritage",
  description:
    "Panarion Center — Πανάριον — is dedicated to preserving and promoting Eastern Christian patristic heritage through education, publishing, and academic engagement.",
  keywords: ["patristic", "heritage", "Eastern Christianity", "publishing", "education", "theology", "Panarion", "Epiphanius"],
  openGraph: {
    title: "Panarion Center for Patristic Heritage",
    description: "Preserving Eastern Christian patristic heritage through scholarship.",
    url: "https://panarion.org",
    siteName: "Panarion Center",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-parchment text-ink">
        <SplashScreen />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
