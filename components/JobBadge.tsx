import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { ArrowIcon } from '@/components/ui/icons'

import { cn } from '@/lib/utils'

export const JobsBadge = ({ className }: any) => {
  const apiResponse = {
    jobsCount: 3,
  }

  const jobsCount = apiResponse?.jobsCount || 0

  return jobsCount > 0 ? (
    <Link href="/" className={(cn('shrink-0'), className)}>
      <Badge className="cursor-pointer bg-muted p-1 text-foreground hover:bg-muted/50">
        <span className="mr-2.5 rounded-full bg-yellow-200 px-2.5 py-0.5 font-medium text-yellow-800">New</span>
        Job Advertisements ({jobsCount})
        <ArrowIcon />
      </Badge>
    </Link>
  ) : null
}
