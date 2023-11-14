import { redirect } from 'next/navigation'

export default function Page({}: {}) {
  redirect(`/bing/${new Date().getFullYear()}`)
  return null
}
