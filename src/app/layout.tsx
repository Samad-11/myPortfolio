import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: ' %s | Dev Sam',
    default: 'Dev Sam',
  },
  description: "Web Portfolio of Abdus Samad",
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
