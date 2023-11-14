import data from '../../../../public/data.json'
import data_2022 from '../../../../public/2022.json'
import data_2021 from '../../../../public/2021.json'
import ImageGrid from '@/components/ImageGrid'

export const revalidate = 86400

export default function Page({ params }: { params: { year: string } }) {
  const { year } = params

  let items = []
  if (year === '2022') {
    items = data_2022
  } else if (year === '2021') {
    items = data_2021
  } else {
    items = data
  }

  return <ImageGrid items={items} />
}
