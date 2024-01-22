import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Script from 'next/script'

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
      <script
        src="https://hm.baidu.com/hm.js?c77f182c1886de6055308a84f6302ccd"
        async
      ></script>
    </html>
  )
}
