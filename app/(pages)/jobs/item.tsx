import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
const JobItems = () => {
  return (
    <div className="flex w-full flex-1 items-center justify-center space-x-4 rounded-lg border p-4">
      <Skeleton className="h-14 w-14 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  )
}

export default JobItems
