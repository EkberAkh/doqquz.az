import { resolveLocale } from './utils'
import { NextRequest, NextResponse } from 'next/server'

const basePath = "" ;

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.includes('_next')) {
    return;
  }

  if (pathname === '/') {
    return NextResponse.redirect(new URL(`${basePath}/az`, req.url));
  }

  const headers = new Headers(req.headers)
  headers.set('X-NEXT-INTL-LOCALE', resolveLocale(req))
  const res = NextResponse.rewrite(new URL(req.url, req.url), { request: { headers } })

  return res;
}

export const config = {
  matcher: [ '/', '/((?!_next|images|videos|favicon).*)' ]
}