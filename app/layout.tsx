/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "PT. INTI TEKNOLOGI BERDIKARI",
  description:
    "Solusi digital terintegrasi untuk software development, IT consulting, dan teknologi bisnis modern. Partner teknologi terpercaya untuk mendukung pertumbuhan bisnis Anda.",
  keywords: [
    "software house indonesia",
    "jasa pembuatan aplikasi",
    "pengembangan sistem",
    "IT consultant",
    "digital solutions",
    "PT Inti Teknologi Berdikari",
  ],
  openGraph: {
    title: "PT. INTI TEKNOLOGI BERDIKARI",
    description:
      "Partner teknologi terpercaya dalam software development dan IT consulting. Membangun solusi digital yang modern, scalable, dan efisien.",
    url: "https://your-domain.com",
    siteName: "PT. INTI TEKNOLOGI BERDIKARI",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "PT. INTI TEKNOLOGI BERDIKARI",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/images/inteb.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts langsung */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Readex+Pro:400,500,600,700&display=swap"
        />
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/images/inteb.png" />
        {/* Alpine.js */}
        <script
          src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.3/dist/cdn.min.js"
          defer
        ></script>
        {/* CSS Template (jika memang dipakai) */}
        <link rel="stylesheet" href="/css/tailwind.min.css" />
      </head>
      {/* Gunakan font lewat CSS biasa */}
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
