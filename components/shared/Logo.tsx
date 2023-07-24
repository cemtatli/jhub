import { Boxes } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = ({ size = 24, label = 'Jhub' }) => {
  return (
    <Link href="/" passHref>
      <div className="flex items-center gap-x-2 text-foreground ">
        <Boxes stroke="currentColor" width={size} height={size} strokeWidth={1.75} />
        <h1 className="text-2xl font-bold">{label}</h1>
      </div>
    </Link>
  )
}

export { Logo }
