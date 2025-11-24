import type { Metadata } from 'next'
import { Raleway } from "next/font/google"
import './globals.css'

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans", 
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Токийога',
  description: 'Намери спокойствие, баланс и общност в нашето йога студио',
  icons: {
    icon: [
      {
        url: '/images/favicon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/favicon.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/images/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bg" className={raleway.variable}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
