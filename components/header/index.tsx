'use client'

import React from 'react'
import Link from 'next/link'

import { Logo } from '@/components/ui/logo'
import { buttonVariants } from '@/components/ui/button'
import { JobsBadge } from '@/components/ui/job-badge'
import { MobileMenu } from '@/components/header/mobile-menu'


export const Header = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center justify-center border-b z-50 backdrop-blur-lg border-gray-200 bg-white/90 md:h-24">
      <div className="container flex items-center justify-between xl:px-0">
        <Logo size='28' />
        <JobsBadge className="hidden sm:block" />
        <nav className="hidden space-x-2.5 md:flex">
          <Link href={'/login'} className={buttonVariants({ variant: 'ghost' })}>
            Log in
          </Link>
          <Link href={'/signup'} className={buttonVariants()}>
            Sign up
          </Link>
        </nav>
        <MobileMenu />
      </div >
    </header >
  )
}
