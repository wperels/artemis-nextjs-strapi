import "./globals.css";
import Header from './_components/Layout/Header'
import Footer from './_components/Layout/Footer'
import '../scss/main.scss';
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3003'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Artemis Moon Journey',
    template: '%s | Artemis Moon Journey',
  },
  description: 'Humanity\'s return to the Moon and journey to Mars.',
  openGraph: {
    siteName: 'Artemis Moon Journey',
    type: 'website',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("font-mono", jetbrainsMono.variable)}>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}