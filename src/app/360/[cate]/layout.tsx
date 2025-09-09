import type { ListData, Cate } from "@/types";
import Link from "next/link";
import React from "react";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ cate: string }>;
}) {
  const { cate } = await params;
  const res = await fetch("http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAllCategories");
  const data: ListData<{ [p: string]: Cate }> = await res.json();
  const list = Object.values(data.data).filter(
    (item) => item.mobile_hidden !== "1" && item.order_createtime_hidden !== "1",
  );
  if (list.length > 0) {
    return (
      <>
        <nav className="grid grid-cols-4">
          {list.map((item) => (
            <Link key={item.id} className={`link ${cate === item.id ? "text-primary" : ""} `} href={`/360/${item.id}`}>
              {item.name}
            </Link>
          ))}
        </nav>
        {children}
      </>
    );
  }

  return <div>暂无数据</div>;
}
