import React from 'react'
import { Badge } from '@/components/ui/badge'
import { popularSearchs } from '@/api/populer-search'

export const PopularSearchesBadge = () => {
  return (
    <>
      {popularSearchs.map(({ title }, key) => (
        <Badge
          className="shrink-0 cursor-pointer p-1.5 px-3 transition-all duration-300 hover:bg-destructive-foreground"
          variant={'outline'}
          key={key}>
          {title}
        </Badge>
      ))}
    </>
  )
}
