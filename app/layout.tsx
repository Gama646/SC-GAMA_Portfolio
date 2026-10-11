import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata = {
  metadataBase: new URL("https://sc-gama-portfolio.vercel.app"),
  title: "Sibongikhosi Gama | Aspiring Software Engineer, South Africa",
  description: "Portfolio of Sibongikhosi Gama, an ICT graduate and aspiring software engineer from Mpumalanga, South Africa.",
  alternates: { canonical: "/" },
  openGraph: { title: "Sibongikhosi Gama", type: "website", url: "/" },
};

<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sibongikhosi Gama",
    url: "https://sc-gama-portfolio.vercel.app",
    sameAs: [
      "https://github.com/Gama646",
      "https://www.linkedin.com/in/gama646",
      "https://www.instagram.com/catha2088"
    ]
  })
}} />

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
