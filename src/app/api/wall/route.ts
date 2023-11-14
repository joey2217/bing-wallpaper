import { type NextRequest } from 'next/server'

// http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByCategory&cid=26&start=0

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')
  const res = await fetch(
    `http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByCategory&cid=26&start=0`
  )
  const data = await res.json()
  if (data.errno === '0') {
    return Response.json(data.data)
  } else {
    return Response.error()
  }
}
