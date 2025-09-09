import data from "../../../public/data.json";
import ImageGrid from "@/components/ImageGrid";

export const revalidate = 86400;

export default async function Page() {
  return <ImageGrid items={data} />;
}
