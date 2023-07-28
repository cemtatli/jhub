'use client'

import React from 'react'
import Link from 'next/link'

import { Logo } from '@/components/shared/Logo'
import { Button } from '@/components/ui/button'
import { JobsBadge } from '@/components/NewJobBadge'
import { MobileMenu } from '@/components/header/mobile-menu'

export const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center justify-center border-b border-gray-200 bg-white md:h-24">
      <div className="container flex items-center justify-between xl:px-0">
        <Logo />
        <JobsBadge />
        <nav className="hidden space-x-2.5 md:flex">
          <Button asChild variant="ghost">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href={'/signup'}> Sign up</Link>
          </Button>
        </nav>
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-50 transition-colors hover:bg-gray-100 md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
