'use client'

import React from 'react'
import Link from 'next/link'

import { Logo } from '@/components/shared/Logo'
import { Button } from '@/components/ui/button'
import { JobsBadge } from '@/components/JobBadge'
import { MobileMenu } from '@/components/header/mobile-menu'


export const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center justify-center border-b z-50 backdrop-blur-md border-gray-200 bg-white/95 md:h-24">
      <div className="container flex items-center justify-between xl:px-0">
        <Logo />
        <JobsBadge className="hidden sm:block" />
        <nav className="hidden space-x-2.5 md:flex">
          <Link href={'/login'}>
            <Button variant={'ghost'} className="w-full">
              Log in
            </Button>
          </Link>
          <Link href={'/signup'}>
            <Button className="w-full">Sign up</Button>
          </Link>
        </nav>
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-50 transition-colors hover:bg-gray-100 md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
