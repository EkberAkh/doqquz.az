import { useTranslations } from 'next-intl'
import { NextRequest } from 'next/server'
import { defaultLocale, locales } from './i18n'
import {createSharedPathnamesNavigation} from 'next-intl/navigation';

const resolveLocale = (req: NextRequest) => {
  const pathname = req.nextUrl.pathname
  const [, locale] = pathname.split('/')

  if (!locale.includes(locale)) {
    return defaultLocale
  }

  return locale || defaultLocale
}

export { resolveLocale, useTranslations }

 
export const localePrefix = 'always'; // Default
 
export const {Link, redirect, usePathname, useRouter,} =
  createSharedPathnamesNavigation({locales, localePrefix});