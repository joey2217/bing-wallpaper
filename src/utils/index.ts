export function getThumbnail(imgURL: string, w = 384, h = 216) {
  const url = new URL(imgURL);
  const searchParams = url.searchParams;
  searchParams.set("w", String(w));
  searchParams.set("h", String(h));
  return url.toString();
}

export function downImg(imgURL: string, w = 1280, h = 720) {
  const url = new URL(imgURL);
  const query = url.searchParams;
  // OHR.PoetrysCave_ZH-CN3196193909_UHD.jpg
  const id = query.get("id") as string;
  const [ohrName] = id.split("_");
  const name = ohrName.replace("OHR.", "") + w + "x" + h;
  const path = getThumbnail(imgURL, w, h);
  fetch(path)
    .then((res) => res.blob())
    .then((data) => {
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
