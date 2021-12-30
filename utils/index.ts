import axios from "axios";

export function getThumbnail(url: string, w = 384, h = 216) {
  const [path, search] = url.split("?");
  // const query = qs.parse(search);
  // return path + "?" + qs.stringify({ ...query, w, h });
  const searchParams = new URLSearchParams(search);
  searchParams.set("w", String(w));
  searchParams.set("h", String(h));
  return path + "?" + searchParams.toString();
}

export function downImg(url: string, w = 1280, h = 720) {
  const [_, search] = url.split("?");
  const query = qs.parse(search);
  // OHR.PoetrysCave_ZH-CN3196193909_UHD.jpg
  const id = query.id as string;
  const [ohrName] = id.split("_");
  let name = ohrName.replace("OHR.", "") + w + "x" + h;
  const path = getThumbnail(url, w, h);
  axios({
    url: path,
    method: "GET",
    responseType: "blob",
  }).then((res) => {
    const { data } = res;
    const blob = new Blob([data], { type: data.type });
    const downloadElement = document.createElement("a");
    const href = window.URL.createObjectURL(blob); //创建下载的链接
    downloadElement.href = href;
    downloadElement.download = name || "bing-wallpaper"; //下载后文件名
    document.body.appendChild(downloadElement);
    downloadElement.click(); //点击下载
    document.body.removeChild(downloadElement); //下载完成移除元素
    window.URL.revokeObjectURL(href); //释放掉blob对象
  });
}

export function nextWeek() {}
