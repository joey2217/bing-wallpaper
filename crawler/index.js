// import axios from 'axios'
const axios = require('axios')
const path = require('path')
const fs = require('fs')

const imageUrl =
  'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=1&n=1&nc=1614909948410&pid=hp&scope=web&FORM=ANNTH1'

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36 Edg/88.0.705.81'

const BASE_URL = 'https://cn.bing.com'

  ; (async () => {
    const {
      data: {
        images: [{ url, enddate, copyright }],
      },
    } = await axios({
      url: imageUrl,
      method: 'GET',
      headers: {
        'User-Agent': UA,
      },
    })
    const wallPaperUrl = BASE_URL + url
    const dataPath = path.resolve(__dirname, '../public/data.json')
    const dataText = fs.readFileSync(dataPath, { encoding: 'utf-8' })
    const imgList = dataText ? JSON.parse(dataText) : []
    const index = imgList.findIndex(i => i.date === enddate)
    if (index === -1) {
      const item = {
        img: wallPaperUrl,
        date: enddate,
        copyright,
      }
      imgList.unshift(item)
      fs.writeFileSync(dataPath, JSON.stringify(imgList))
    }
  })()
