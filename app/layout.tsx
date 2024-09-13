import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import { ToastProvider } from "@/providers/toast-provider";
import Script from "next/script"; // Import Script for JSON-LD

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexaDevs",
  description: "At NexaDevs, we believe that every business deserves a digital presence that reflects its unique identity and resonates with its target audience. Our team of skilled designers and developers collaborates closely with you to understand your vision and bring it to life.",
  keywords: "web development, mobile app development, UI/UX design, graphic design, AI solutions, custom software, SEO services, responsive design, Next.js, React, Node.js, Figma, Adobe XD",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NexaDevs",
  "url": "https://nexadevs.pro",
  "logo": "https://nexadevs.pro/N2.png",
  "sameAs": [
    "https://x.com/NexaDevsPro",
    "https://www.linkedin.com/company/nexadevs-pro",
    "https://www.instagram.com/nexadevs.pro_",
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9601551074",
    "contactType": "Customer Service",
    "areaServed": "Global",
    "availableLanguage": "English, Hindi, Gujarati"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "A/16, Narayan Park Society",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "382470",
    "addressCountry": "IND"
  },
  "description": "Nexadevs.pro is a leading agency specializing in web and mobile app development, UI/UX design, graphic design, and AI solutions. Our experienced team delivers innovative and customized digital solutions to meet your business needs."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-row">
          <div className="sticky top-0 h-screen">
            <Sidebar />
          </div>
          {children}
        </main>
        <ToastProvider />
        
        {/* Add JSON-LD to your page */}
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}