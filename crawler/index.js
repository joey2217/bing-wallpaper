const path = require('path')
const fs = require('fs')

const imageUrl =
  'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=7&nc=1612409408851&pid=hp&FORM=BEHPTB&uhd=1&uhdwidth=3840&uhdheight=2160&mkt=zh-CN'

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.81'

const BASE_URL = 'https://cn.bing.com'

async function fetchData() {
  const res = await fetch(imageUrl, {
    headers: {
      'User-Agent': UA,
    },
  })
  const { images } = await res.json()
  const list = images.map((item) => ({
    img: BASE_URL + item.url,
    date: item.enddate,
    copyright: item.copyright,
  }))
  const dataPath = path.resolve(__dirname, '../public/data.json')
  const dataText = fs.readFileSync(dataPath, { encoding: 'utf-8' })
  let imgList = dataText ? JSON.parse(dataText) : []
  imgList = list.concat(imgList)
  fs.writeFileSync(dataPath, JSON.stringify(imgList, null, 2))
}
fetchData()

// ;(async () => {
//   const {
//     data: { images },
//   } = await fetch({
//     url: imageUrl,
//     method: 'GET',
//     headers: {
//       'User-Agent': UA,
//     },
//   })
//   const list = images.map((item) => ({
//     img: BASE_URL + item.url,
//     date: item.enddate,
//     copyright: item.copyright,
//   }))
//   const dataPath = path.resolve(__dirname, '../public/data.json')
//   const dataText = fs.readFileSync(dataPath, { encoding: 'utf-8' })
//   let imgList = dataText ? JSON.parse(dataText) : []
//   imgList = list.concat(imgList)
//   fs.writeFileSync(dataPath, JSON.stringify(imgList, null, 2))
// })()
