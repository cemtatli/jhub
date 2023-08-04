import { ButtonWithIcon } from '@/components/ui/shared/ButtonWithIcon'
import { NotFoundIcon } from '@/components/ui/icons'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <section className="flex h-fit-screen flex-col items-center justify-center gap-y-5">
      <NotFoundIcon />
      <span className="text-center text-lg font-medium">The page you are looking for was not found.</span>
      <Link href={'/'}>
        <ButtonWithIcon variant="" text="Back to homepage" className="mt-2.5" />
      </Link>
    </section>
  )
}

export default NotFound
