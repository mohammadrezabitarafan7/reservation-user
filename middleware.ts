import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// نام کوکی که چک می‌کنیم
const COOKIE_KEY = 'stepData'

export function middleware(req: NextRequest) {
  // دریافت کوکی‌ها از درخواست
  const cookie = req.cookies.get(COOKIE_KEY)

  // مسیرهایی که نیاز به احراز هویت دارند
  const protectedRoutes = ['/time', '/login']

  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    if (!cookie) {
      // اگر کوکی وجود نداشته باشد، به صفحه لاگین هدایت شود
      return NextResponse.redirect(new URL('/', req.url))
    }
  }

  return NextResponse.next()
}

// اعمال میدلور فقط روی صفحات خاص
export const config = {
  matcher: ['/time', '/login'], // فقط روی این صفحات اجرا شود
}
