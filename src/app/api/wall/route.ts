// http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByCategory&cid=26&start=0

export async function GET() {
  const res = await fetch(`http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByCategory&cid=26&start=0`);
  const data = await res.json();
  if (data.errno === "0") {
    return Response.json(data.data);
  } else {
    return Response.error();
  }
}
