import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Bing壁纸',
  description: 'Bing壁纸',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className="min-h-screen;">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
