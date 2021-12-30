import React, { memo } from "react";
import Link from "next/link";

const Logo = memo(() => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
  >
    <defs>
      <style type="text/css"></style>
    </defs>
    <path
      d="M170.666667 170.666667h298.666666V85.333333H170.666667C123.52 85.333333 85.333333 123.52 85.333333 170.666667v298.666666h85.333334V170.666667z m256 384l-170.666667 213.333333h512l-128-170.666667-86.613333 115.626667L426.666667 554.666667z m298.666666-192c0-35.413333-28.586667-64-64-64s-64 28.586667-64 64 28.586667 64 64 64 64-28.586667 64-64z m128-277.333334H554.666667v85.333334h298.666666v298.666666h85.333334V170.666667c0-47.146667-38.186667-85.333333-85.333334-85.333334z m0 768H554.666667v85.333334h298.666666c47.146667 0 85.333333-38.186667 85.333334-85.333334V554.666667h-85.333334v298.666666zM170.666667 554.666667H85.333333v298.666666c0 47.146667 38.186667 85.333333 85.333334 85.333334h298.666666v-85.333334H170.666667V554.666667z"
      p-id="721"
      fill="#ffffff"
    ></path>
  </svg>
));

const Header: React.FC = () => {
  return (
    <header className="w-full h-16 bg-indigo-500 flex items-center justify-between px-10">
      <Link href="/">
        <a className="flex items-center">
          <Logo />
          <h1 className="text-white font-medium text-base ml-4">
            BingWallpaper
          </h1>
        </a>
      </Link>
      <div className="flex items-center">
        <Link href="/2020">
          <a>2020</a>
        </Link>
      </div>
    </header>
  );
};

export default memo(Header);
