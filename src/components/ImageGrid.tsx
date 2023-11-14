import type { BingItem } from '@/types'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  items: BingItem[]
}

const ImageGrid: React.FC<Props> = ({ items }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
      {items.map((item, index) => (
        <Link
          href={`/bing/img/${item.date}`}
          key={item.date}
          className={`${index === 0 ? 'row-span-2 col-span-2' : ''} relative text-xs md:text-sm`}
          title="点击查看详情"
        >
          <Image
            src={item.img}
            alt={item.date}
            width={480}
            height={270}
            className="aspect-video w-full object-cover"
          />
          <div className="absolute top-0 right-0 bg-slate-500/50">{item.date}</div>
          <div className="absolute bottom-0 left-0 bg-slate-500/50">{item.copyright}</div>
        </Link>
      ))}
    </section>
  )
}

export default ImageGrid
