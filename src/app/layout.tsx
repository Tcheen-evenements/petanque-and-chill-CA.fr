import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from 'next/font/google'
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Tournoi de Pétanque - Crédit Agricole",
  description: "Inscrivez-vous au tournoi de pétanque du Crédit Agricole",
  icons: {
    icon: [
      { url: "/images/petanque-icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${poppins.className} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
