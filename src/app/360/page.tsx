import type { ListData, Cate } from '@/types'
import { redirect } from 'next/navigation'

export default async function Page({}: {}) {
  const res = await fetch(
    'http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAllCategories'
  )
  const data: ListData<{ [p: string]: Cate }> = await res.json()
  const list = Object.values(data.data).filter(
    (item) => item.mobile_hidden !== '1' && item.order_createtime_hidden !== '1'
  )
  if (list.length > 0) {
    redirect(`/360/${list[0].id}`)
  }
  return <div>暂无数据</div>
}
