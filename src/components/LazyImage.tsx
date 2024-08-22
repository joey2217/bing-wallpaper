/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useRef } from 'react'

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  placeholderSrc?: string
}

export default function LazyImage({
  placeholderSrc = '/loading.png',
  src,
  alt,
  ...props
}: Props) {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target as HTMLImageElement
          lazyImage.src = src!
          observer.unobserve(lazyImage) // 观察一次后停止观察
          observer.disconnect() // 停止观察
        }
      })
    })
    const imgEl = imgRef.current
    if (imgEl) {
      lazyImageObserver.observe(imgEl)
    }
    return () => {
      lazyImageObserver.disconnect()
    }
  }, [src])

  return (
    <img
      {...props}
      alt={alt}
      ref={imgRef}
      src={placeholderSrc}
      onError={(e) => {
        ;(e.target as HTMLImageElement).onerror = null
        ;(e.target as HTMLImageElement).src = '/loading.png'
      }}
    />
  )
}
