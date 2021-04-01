import Head from 'next/head'
import data from '../public/data.json'
import Image from 'rc-image'
import { memo } from 'react'

function Home() {
  return (
    <>
      <Head>
      </Head>

      <Image.PreviewGroup
        icons={{
          rotateLeft: <RotateLeft />,
          rotateRight: <RotateRight />,
          zoomIn: <ZoomIn />,
          zoomOut: <ZoomOut />,
          close: <Close />,
          left: <Left />,
          right: <Right />,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {data.map((img, index) => (
            <div
              className={`relative flex ${index === 0 &&
                'row-span-2 col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2'
                }`}
              key={img.date}
            >
              <Image
                className="object-cover block"
                src={img.img}
                placeholder={
                  <img src="/loading.png" alt="loading" />
                }
                alt={img.date + '-BingWallpaper'}
                loading="lazy"
              />
              <span className="absolute truncate top-0 right-0 opacity-50  bg-white text-black px-1 text-xs md:text-sm">
                {img.date}
              </span>
              <div className="absolute opacity-50 bg-white text-black left-0 bottom-0 px-1 text-xs md:text-sm">
                {img.copyright}
              </div>
            </div>
          ))}
        </div>
      </Image.PreviewGroup>
    </>
  )
}

export default memo(Home)

const Right = memo(() => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" fill="white" fillOpacity="0.01" />
    <path
      d="M19 12L31 24L19 36"
      stroke="#333"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
))

const Left = memo(() => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" fill="white" fillOpacity="0.01" />
    <path
      d="M31 36L19 24L31 12"
      stroke="#333"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
))

const RotateRight = memo(() => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="#333"
  >
    <path
      d="M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-0.4-12.6 6.1l-0.2 64c-118.6 0.5-235.8 53.4-314.6 154.2-69.6 89.2-95.7 198.6-81.1 302.4h74.9c-0.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"
      p-id="8427"
    ></path>
    <path
      d="M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H396V494h440v326z"
      p-id="8428"
    ></path>
  </svg>
))

const RotateLeft = memo(() => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="8069"
    width="24"
    height="24"
    fill="#333"
  >
    <path
      d="M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H188V494h440v326z"
      p-id="8070"
    ></path>
    <path
      d="M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-0.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7 0.4 12.6-6.1v-63.9c12.9 0.1 25.9 0.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8 11 40.7 14 82.7 8.9 124.8-0.7 5.4-1.4 10.8-2.4 16.1h74.9c14.8-103.6-11.3-213-81-302.3z"
      p-id="8071"
    ></path>
  </svg>
))

const ZoomOut = memo(() => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" fill="white" fillOpacity="0.01" />
    <path
      d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"
      fill="none"
      stroke="#333"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path
      d="M15 21L27 21"
      stroke="#333"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33.2218 33.2218L41.7071 41.7071"
      stroke="#333"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
))

const Close = memo(() => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" fill="white" fillOpacity="0.01" />
    <path
      d="M8 8L40 40"
      stroke="#333"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 40L40 8"
      stroke="#333"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
))

const ZoomIn = memo(() => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" fill="white" fillOpacity="0.01" />
    <path
      d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"
      fill="none"
      stroke="#333"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path
      d="M21 15L21 27"
      stroke="#333"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 21L27 21"
      stroke="#333"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33.2218 33.2218L41.7071 41.7071"
      stroke="#333"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
))
