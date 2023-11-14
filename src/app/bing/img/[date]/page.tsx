import data from '../../../../../public/data.json'
import data_2022 from '../../../../../public/2022.json'
import data_2021 from '../../../../../public/2021.json'
import Link from 'next/link'
import Image from 'next/image'
import DownloadImage from '@/components/DownloadImage'
import { getThumbnail } from '@/utils'

export default function Page({ params }: { params: { date: string } }) {
  const { date } = params

  const year = date.substring(0, 4)

  let items = []
  if (year === '2022') {
    items = data_2022
  } else if (year === '2021') {
    items = data_2021
  } else {
    items = data
  }

  let index = items.findIndex((item) => item.date === date)
  if (index === -1) {
    index = 0
  }
  const item = items[index]
  let prev
  if (index > 0) {
    prev = items[index - 1]
  }
  let next
  if (index < items.length - 1) {
    next = items[index + 1]
  }

  const imgSrc = getThumbnail(item.img, 1280, 720)

  return (
    <div className="text-sm md:text-base my-2">
      <div className="flex items-center justify-between mb-2">
        <Link href={`/bing/${year}`}> ❮ 返回</Link>
        <div>{item.date}</div>
        <div className="w-11"></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="w-14">
          {prev && <Link href={`/bing/img/${prev.date}`}>❮ 上一张</Link>}
        </div>
        <DownloadImage item={item} />
        <div className="w-14">
          {next && <Link href={`/bing/img/${next.date}`}>下一张 ❯</Link>}
        </div>
      </div>
      <div className="my-2 flex items-center justify-center">
        <Image
          src={imgSrc}
          alt={item.date}
          width={1080}
          height={720}
          className="w-full object-cover aspect-video"
        />
      </div>
      <div>{item.copyright}</div>
    </div>
  )
}
