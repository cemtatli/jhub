import { ButtonWithIcon } from '@/components/shared/ButtonWithIcon'
import { NotFoundIcon } from '@/components/ui/icons'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="flex h-fit-screen flex-col items-center justify-center gap-y-4">
      <NotFoundIcon />
      <span className="text-center text-lg font-medium">The page you are looking for was not found.</span>
      <Link href={'/'}>
        <ButtonWithIcon variant="back" text="Back to homepage" className="mt-2.5" />
      </Link>
    </div>
  )
}

export default NotFound
