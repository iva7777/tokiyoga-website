import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="bg">
      <body className="antialiased" style={{ fontFamily: "var(--font-sans)" }}>
        {children}
      </body>
    </html>
  )
}
