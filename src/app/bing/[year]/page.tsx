import data from "../../../../public/data.json";
import ImageGrid from "@/components/ImageGrid";
import { BingItem } from "@/types";

export const revalidate = 86400;

export default async function Page({ params }: { params: Promise<{ year: string }> }) {
  const { year } = await params;

  let items: BingItem[] = [];
  await import(`../../../../public/${year}.json`)
    .then((res) => {
      items = res.default;
    })
    .catch(() => {
      items = data;
    });

  return <ImageGrid items={items} />;
}
