import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import React from 'react'

export const JobsBadge = () => {
  // API'den gelecek jobsCount değeri
  const apiResponse = {
    jobsCount: 12,
  }

  const jobsCount = apiResponse?.jobsCount || 0

  return jobsCount > 0 ? (
    <Link href="/" className="hidden shrink-0 md:block">
      <Badge className="cursor-pointer bg-muted p-1 text-foreground hover:bg-muted/50">
        <span className="mr-2.5 rounded-full bg-yellow-200 px-2.5 py-0.5 text-yellow-800">New</span>
        Job Advertisements ({jobsCount})
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12px"
          height="12px"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mx-2">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </Badge>
    </Link>
  ) : null
}
