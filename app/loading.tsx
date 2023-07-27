'use client'

import { Loader } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className="flex h-fit-screen items-center justify-center">
      <Loader className="h-6 w-6 animate-spin text-zinc-400" />
    </div>
  )
}
export default Loading
