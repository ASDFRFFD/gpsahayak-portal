import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import PWAInstaller from "@/components/pwa/PWAInstaller";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#0f766e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gpsahayak.in"),
  applicationName: "GPSahayak",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "GPSahayak",
  },
  formatDetection: {
    telephone: false,
  },
  title: {
    default: "पंचायत सहायक पोर्टल 2026 | UP Panchayat Sahayak Salary, Work & Tools",
    template: "%s | GPSAHAYAK.IN",
  },
  description:
    "उत्तर प्रदेश पंचायत सहायक भर्ती, सैलरी (मानदेय), ई-ग्राम स्वराज काम, किसान रजिस्ट्री ID कार्ड और जरूरी PDF फॉर्म्स के लिए सबसे बेहतरीन स्वतंत्र डिजिटल पोर्टल।",
  keywords: [
    "Panchayat Sahayak",
    "पंचायत सहायक",
    "UP Panchayat Sahayak Portal",
    "Panchayat Sahayak Salary 2026",
    "farmer id card generator up",
    "kisan registry card print",
    "hindi office editor",
    "gpsahayak in",
  ],
  authors: [{ name: "Panchayat Sahayak Portal Team" }],
  creator: "GPSAHAYAK Team",
  publisher: "GPSAHAYAK.IN",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://gpsahayak.in/",
    languages: {
      hi: "https://gpsahayak.in/",
      "en-IN": "https://gpsahayak.in/",
      "x-default": "https://gpsahayak.in/",
    },
  },
  openGraph: {
    type: "website",
    locale: "hi_IN",
    alternateLocale: "en_IN",
    url: "https://gpsahayak.in/",
    siteName: "Panchayat Sahayak Portal",
    title: "Panchayat Sahayak Portal UP | पंचायत सहायक Salary, Login & Services 2026",
    description:
      "UP Panchayat Sahayak Portal — Salary ₹6,000, Login, CSC, e-District, Vacancy & Gram Panchayat Services। पंचायत सहायक के लिए सबसे तेज़ डिजिटल पोर्टल।",
    images: [
      {
        url: "https://gpsahayak.in/images/panchayat_logo.png",
        width: 1200,
        height: 630,
        alt: "Panchayat Sahayak Portal UP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panchayat Sahayak Portal UP | पंचायत सहायक Salary & Login",
    description:
      "UP Panchayat Sahayak Portal — CSC, e-District, Salary, Login, Gram Panchayat Services in Hindi & English।",
    images: ["https://gpsahayak.in/images/panchayat_logo.png"],
  },
  verification: {
    google: "NjKEys-M3hLrTEfVqG4QfLA7qd05KJSEf3mo6aYD0gs",
  },
  icons: {
    icon: "/images/panchayat_favicon.png",
    shortcut: "/images/panchayat_favicon.png",
    apple: "/images/panchayat_favicon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Panchayat Sahayak Portal UP",
    alternateName: "पंचायत सहायक पोर्टल",
    url: "https://gpsahayak.in/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://gpsahayak.in/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="hi" className={`${plusJakarta.variable} font-sans dark`}>
      <head>
        {/* Schema.org WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3320237271717237"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Google Analytics (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1T48Y2LMSJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1T48Y2LMSJ');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950 pb-16 md:pb-0">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBottomNav />
        <PWAInstaller />
      </body>
    </html>
  );
}
