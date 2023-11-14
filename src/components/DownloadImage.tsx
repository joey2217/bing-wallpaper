'use client'

import { BingItem } from '@/types'
import { downImg } from '@/utils'
import React, { type SVGProps } from 'react'

export function FluentArrowDownload(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3.5 13h9a.75.75 0 0 1 .102 1.493l-.102.007h-9a.75.75 0 0 1-.102-1.493L3.5 13h9h-9ZM7.898 1.007L8 1a.75.75 0 0 1 .743.648l.007.102v7.688l2.255-2.254a.75.75 0 0 1 .977-.072l.084.072a.75.75 0 0 1 .072.977l-.072.084L8.53 11.78a.75.75 0 0 1-.976.073l-.084-.073l-3.536-3.535a.75.75 0 0 1 .977-1.133l.084.072L7.25 9.44V1.75a.75.75 0 0 1 .648-.743L8 1l-.102.007Z"
      ></path>
    </svg>
  )
}

interface Props {
  item: BingItem
}


const DownloadImage: React.FC<Props> = ({ item }) => {
  return (
    <div className="join">
      <button
        className="btn btn-xs md:btn-sm"
        onClick={() => downImg(item.img)}
      >
        <FluentArrowDownload className="inline-block" />
        <span>720P</span>
      </button>
      <button
        className="btn btn-xs md:btn-sm"
        onClick={() => downImg(item.img, 1920, 1080)}
      >
        <FluentArrowDownload className="inline-block" />
        <span>1080P</span>
      </button>
      <button
        className="btn btn-xs md:btn-sm"
        onClick={() => downImg(item.img, 2560, 1440)}
      >
        <FluentArrowDownload className="inline-block" />
        <span>2K</span>
      </button>
      <button
        className="btn btn-xs md:btn-sm"
        onClick={() => downImg(item.img, 3840, 2160)}
      >
        <FluentArrowDownload className="inline-block" />
        <span>4K</span>
      </button>
    </div>
  )
}

export default DownloadImage
