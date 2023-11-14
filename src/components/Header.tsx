import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="h-10 px-1 md:px-2 bg-base-300 flex items-center gap-2">
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
      >
        <path
          d="M170.666667 170.666667h298.666666V85.333333H170.666667C123.52 85.333333 85.333333 123.52 85.333333 170.666667v298.666666h85.333334V170.666667z m256 384l-170.666667 213.333333h512l-128-170.666667-86.613333 115.626667L426.666667 554.666667z m298.666666-192c0-35.413333-28.586667-64-64-64s-64 28.586667-64 64 28.586667 64 64 64 64-28.586667 64-64z m128-277.333334H554.666667v85.333334h298.666666v298.666666h85.333334V170.666667c0-47.146667-38.186667-85.333333-85.333334-85.333334z m0 768H554.666667v85.333334h298.666666c47.146667 0 85.333333-38.186667 85.333334-85.333334V554.666667h-85.333334v298.666666zM170.666667 554.666667H85.333333v298.666666c0 47.146667 38.186667 85.333333 85.333334 85.333334h298.666666v-85.333334H170.666667V554.666667z"
          p-id="721"
          fill="#ffffff"
        ></path>
      </svg>
      <span>壁纸</span>
      <nav className="flex items-center gap-1 md:gap-2">
        <Link href="/bing" className="link">
          Bing壁纸
        </Link>
        <Link href="/bing/2022" className="link">
          Bing2022
        </Link>
        <Link href="/bing/2021" className="link">
          Bing2021
        </Link>
      </nav>
    </header>
  )
}

export default Header
