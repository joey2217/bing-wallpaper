import Link from "next/link";
import React from "react";
import { Image as ImageIcon } from "lucide-react";

const start = 2021;

const Header: React.FC = () => {
  const now = new Date().getFullYear();
  const years = Array.from({ length: now - start }, (_, i) => now - i - 1)
  return (
    <header className="h-10 px-1 md:px-2 bg-base-300 flex items-center gap-2">
      <Link href="/bing" className="flex items-center gap-1 md:gap-2">
        <ImageIcon />
        <span>壁纸</span>
      </Link>
      <nav className="flex items-center gap-1 md:gap-2">
        <Link href="/bing" className="link">
          Bing壁纸
        </Link>
        {years.map((year) => (
          <Link key={year} href={`/bing/${year}`} className="link">
            Bing{year}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
