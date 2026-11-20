import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getCategories } from "@/lib/data";
import { site } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "A.S. Engineering Works — Snack Food Processing Machinery, Noida",
    template: "%s | A.S. Engineering Works, Noida",
  },
  description: site.description,
  keywords: [
    "food processing machines",
    "snack extruder manufacturer",
    "kurkure making machine",
    "corn puff making machine",
    "pasta making machine",
    "soya nugget plant",
    "industrial dryer",
    "flavour coating system",
    "Noida food machinery exporter",
  ],
  openGraph: {
    title: "A.S. Engineering Works — Food Processing Machinery since 1984",
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/images/hero-line.jpg", width: 1672, height: 941, alt: site.name }],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/real/as-logo.png",
  },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const categories = await getCategories();
  const navCategories = categories.map((category) => ({
    slug: category.slug,
    name: category.name,
    kicker: category.kicker,
  }));

  return (
    <html lang="en" className={`${jakarta.variable} ${plexMono.variable} hide-scrollbar`}>
      <body className="hide-scrollbar">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader categories={navCategories} />
        <main id="main-content">{children}</main>
        <SiteFooter categories={categories.map((c) => ({ slug: c.slug, name: c.name }))} />
        <MobileActionBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${site.url}/#organization`,
                  name: site.name,
                  url: site.url,
                  logo: `${site.url}/images/real/as-logo.png`,
                  image: `${site.url}/images/hero-line.jpg`,
                  description: site.description,
                  foundingDate: String(site.established),
                  email: site.contact.email,
                  telephone: site.contact.phone,
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: site.contact.address.lines[0],
                    addressLocality: "Noida",
                    addressRegion: "Uttar Pradesh",
                    postalCode: "201301",
                    addressCountry: "IN",
                  },
                  identifier: [
                    {
                      "@type": "PropertyValue",
                      name: "GST",
                      value: "09AHNPK3689D1ZX",
                    },
                    {
                      "@type": "PropertyValue",
                      name: "IEC",
                      value: "0504026763",
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": `${site.url}/#website`,
                  url: site.url,
                  name: site.name,
                  publisher: { "@id": `${site.url}/#organization` },
                  inLanguage: "en-IN",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
