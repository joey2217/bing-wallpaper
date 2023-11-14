import { ListData, ImgData } from '@/types'
import Image from 'next/image'

export default async function Page({ params }: { params: { cate: string } }) {
  const res = await fetch(
    `http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByCategory&cid=${params.cate}&start=0`
  )
  const data: ListData<ImgData[]> = await res.json()
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
      {data.data.map((item) => (
        <Image
          key={item.id}
          src={item.url_thumb}
          alt={item.id}
          width={480}
          height={270}
          className="aspect-video w-full object-cover"
        />
      ))}
    </section>
  )
}
