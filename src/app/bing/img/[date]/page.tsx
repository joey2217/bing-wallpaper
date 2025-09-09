import data from "../../../../../public/data.json";
import Link from "next/link";
import DownloadImage from "@/components/DownloadImage";
import { getThumbnail } from "@/utils";
import LazyImage from "@/components/LazyImage";
import { BingItem } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default async function Page({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;

  const year = date.substring(0, 4);

  let items: BingItem[] = [];
  await import(`../../../../../public/${year}.json`)
    .then((res) => {
      items = res.default;
    })
    .catch(() => {
      items = data;
    });

  let index = items.findIndex((item) => item.date === date);
  if (index === -1) {
    index = 0;
  }
  const item = items[index];
  let prev;
  if (index > 0) {
    prev = items[index - 1];
  }
  let next;
  if (index < items.length - 1) {
    next = items[index + 1];
  }

  const imgSrc = getThumbnail(item.img, 1280, 720);

  return (
    <div className="text-sm my-2 container">
      <div className="flex items-center justify-between mb-2">
        <Link href={`/bing/${year}`} className={buttonVariants({ variant: "outline", size: "sm" })}>
          <ChevronLeft /> 返回
        </Link>
        <div className="text-xl font-semibold">{item.date}</div>
        <div className="w-11"></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="w-22">
          {prev && (
            <Link href={`/bing/img/${prev.date}`} className={buttonVariants({ variant: "secondary", size: "sm" })}>
              <ChevronLeft /> 上一张
            </Link>
          )}
        </div>
        <DownloadImage item={item} />
        <div className="w-22">
          {next && (
            <Link href={`/bing/img/${next.date}`} className={buttonVariants({ variant: "secondary", size: "sm" })}>
              下一张 <ChevronRight />
            </Link>
          )}
        </div>
      </div>
      <div className="my-2 flex items-center justify-center">
        <LazyImage
          src={imgSrc}
          alt={item.date}
          width={1080}
          height={720}
          className="w-full object-cover aspect-video"
        />
      </div>
      <div>{item.copyright}</div>
    </div>
  );
}
