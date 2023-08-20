'use client'

import React from 'react'
import Link from 'next/link'

import { Logo } from '@/components/ui/logo'
import { buttonVariants } from '@/components/ui/button'

import { MobileMenu } from '@/components/header/mobile-menu'

import NavMenu from './navigation'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-center border-b border-gray-100 bg-white/90 backdrop-blur-lg md:h-24">
      <div className="container flex items-center justify-between xl:px-0">
        <Logo size="28" />
        <nav className="hidden space-x-2.5 md:flex">
          <Link href={'/login'} className={buttonVariants({ variant: 'ghost' })}>
            Log in
          </Link>
          <Link href={'/signup'} className={buttonVariants()}>
            Sign up
          </Link>
        </nav>
        <MobileMenu />
      </div>
    </header>
  )
}
