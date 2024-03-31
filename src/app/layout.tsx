import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: ' %s | Dev Sam',
    default: 'Dev Sam | Connect Today and build a beautiful cyber presence',
  },
  description: "Web Portfolio of Abdus Samad, Samad does wide range of development from Website development to Application Development. Get in touch with him today and make an online presence of yourself",
  authors: { name: "Abdus Samad", url: process.env.NEXT_BASE_URL },
  category: "Portfolio",
  creator: "Abdus Samad",
  robots: { follow: true, index: true },
  alternates: {
    canonical: `dev.${process.env.NExt_BASE_URL}`,
    languages: {
      'en-US': process.env.NEXT_BASE_URL,
    },
  },
  openGraph: {
    siteName: "DEV SAM",
    description: "Web Portfolio of Abdus Samad, Samad does wide range of development from Website development to Application Development. Get in touch with him today and make an online presence of yourself",
    images: './opengraph-image.png',
    type: "website",
    title: "Dev Sam | Connect Today and build a beautiful cyber presence",
    url: process.env.NEXT_BASE_URL,
  },
  keywords: ['WEBSITE', 'APPLICATION', 'DEVELOPER', 'PROGRAMMER'],
  verification: { google: 'bKHS0Re-QcRIZkH3UYplJ5AxSR9LwMDJB-9SleG8JAU' },


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>

        <main className="h-screen  text-white" style={{ width: '100vw' }}>
          <Navbar />
          {children}
        </main>

      </body>
    </html>
  );
}
