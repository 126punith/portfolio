import type { Metadata } from "next";
import { Fraunces, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { resume } from "@/data/resume";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://punithmanthri.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${resume.name} — ${resume.shortTitle}`,
    template: `%s | ${resume.name}`,
  },
  description: resume.summary.slice(0, 160),
  keywords: [
    "React Native Developer",
    "TypeScript",
    "Mobile Developer",
    "Cross-Platform",
    "iOS",
    "Android",
    "Bangalore",
    "Remote",
    "Open Source",
  ],
  authors: [{ name: resume.name, url: siteUrl }],
  creator: resume.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: `${resume.name} — ${resume.shortTitle}`,
    description: resume.summary.slice(0, 160),
    siteName: resume.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${resume.name} — ${resume.shortTitle}`,
    description: resume.summary.slice(0, 160),
    creator: "@punith_manthri",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: resume.name,
  jobTitle: resume.shortTitle,
  email: resume.email,
  telephone: resume.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "IN",
  },
  url: siteUrl,
  sameAs: [
    resume.social.github,
    resume.social.linkedin,
    resume.social.x,
    resume.social.npm,
  ],
  knowsAbout: [
    "React Native",
    "TypeScript",
    "JavaScript",
    "Mobile Development",
    "JSI",
    "Firebase",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.remove('dark');else document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} bg-atmosphere antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
