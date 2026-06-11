import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Visningsstatistik i Sverige',
  description: 'Se hur många som går på visningar i Sverige just nu.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  )
}
