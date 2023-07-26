import React from 'react'

import Link from 'next/link'
import { Boxes } from 'lucide-react'

const Logo = ({ size = 24, label = 'Jhub' }) => {
  return (
    <Link href="/">
      <span className="flex items-center gap-x-2 text-foreground">
        <Boxes stroke="currentColor" width={size} height={size} strokeWidth={1.8} />
        <span className="text-2xl font-bold">{label}</span>
      </span>
    </Link>
  )
}

export { Logo }
