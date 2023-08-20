import React from 'react'
import { Badge } from '@/components/ui/badge'
import { popularSearchs } from '@/mocks/PopularSearch'
import Link from 'next/link'

type PopularSearchesBadgeProps = {
  onClick: (searchValue: string) => void
}

export const PopularSearchesBadge: React.FC<PopularSearchesBadgeProps> = ({ onClick }) => {
  const handleBadgeClick = (title: string) => {
    onClick(title)
  }

  return (
    <>
      {popularSearchs
        .sort((a, b) => parseInt(b.count) - parseInt(a.count))
        .map(({ title, slug, count }) => (
          <Link key={title} href={`/jobs?search=${slug}`}>
            <Badge
              onClick={() => handleBadgeClick(title)}
              className="z-10 w-fit shrink-0 cursor-pointer bg-white p-1.5 px-3 text-sm tracking-tight transition-all duration-300 hover:bg-gray-50"
              variant={'outline'}
              key={title}>
              {title} ({count})
            </Badge>
          </Link>
        ))}
    </>
  )
}
