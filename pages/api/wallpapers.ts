// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export interface Img {
  img: string;
  date: string;
  copyright: string;
}
const BASE_URL = "https://cn.bing.com";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Img[]>
) {
  const index = req.query.index as string;
  let idx = 0;
  if (index && Number(index)) {
    idx = Number(index) * 7;
  }
  axios({
    url: `https://cn.bing.com/HPImageArchive.aspx?format=js&idx=${idx}&n=7&nc=1612409408851&pid=hp&FORM=BEHPTB&uhd=1&uhdwidth=3840&uhdheight=2160&mkt=zh-CN`,
    method: "GET",
  })
    .then(({ data }) => {
      const list = data.images.map(
        (item: { url: string; enddate: any; copyright: any }) => ({
          img: BASE_URL + item.url,
          date: item.enddate,
          copyright: item.copyright,
        })
      );
      res.status(200).json(list);
    })
    .catch((error) => {
      res.status(500).json([]);
    });
}
