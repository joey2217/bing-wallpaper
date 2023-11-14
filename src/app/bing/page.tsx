import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Bing壁纸',
  description: 'Bing壁纸',
}

export default function Page({}: {}) {
  redirect(`/bing/${new Date().getFullYear()}`)
  return null
}
