import "./globals.css";
import Header from './_components/Layout/Header'
import Footer from './_components/Layout/Footer'
import '../scss/main.scss';
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

export const metadata = {
  title: 'NASA Artemis',
  description: 'Humanity\'s return to the Moon and journey to Mars.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("font-mono", jetbrainsMono.variable)}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}