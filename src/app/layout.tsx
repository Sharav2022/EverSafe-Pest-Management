import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar, MobileActionBarSpacer } from "@/components/layout/MobileActionBar";
import { RevealObserver, revealBootScript } from "@/components/ui/RevealObserver";
import { siteConfig } from "@/lib/site-config";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const defaultTitle = "Ever Safe Pest Management | Inspection-Led Pest Control in Mississauga";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: defaultTitle,
    template: "%s | Ever Safe Pest Management",
  },
  description: siteConfig.description,
  keywords: [
    "ever safe pest management",
    "eversafe pest management",
    "pest control Mississauga",
    "pest control near me",
    "termite control",
    "rodent control",
    "bed bug treatment",
    "commercial pest control",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: defaultTitle,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  // Add the GSC verification code here once a Search Console property is created.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f4ee",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    addressRegion: siteConfig.address.addressRegion,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      className={`${manrope.variable} ${instrument.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Opts in to scroll reveals only when JS runs and motion is welcome. */}
        <script dangerouslySetInnerHTML={{ __html: revealBootScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only z-[80] rounded-full bg-forest px-5 py-3 font-semibold text-ivory focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <UtilityBar />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileActionBarSpacer />
        <MobileActionBar />
        <RevealObserver />
      </body>
    </html>
  );
}
