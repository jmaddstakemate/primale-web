import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Primale — Optimize your testosterone, for real",
    template: "%s — Primale",
  },
  description:
    "UK membership that pairs monthly at-home blood tests with personalized supplement and lifestyle protocols, then tracks your testosterone over time.",
  openGraph: {
    title: "Primale — Optimize your testosterone, for real",
    description:
      "Monthly at-home blood tests, personalized protocols, and testosterone tracking. Join the waitlist.",
    siteName: "Primale",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Primale — Optimize your testosterone, for real",
    description:
      "Monthly at-home blood tests, personalized protocols, and testosterone tracking. Join the waitlist.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
