import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { ArrowIcon } from '@/components/ui/icons'
import { cn } from '@/lib/utils'


export const JobsBadge = ({ className }: any) => {
  const apiResponse = {
    jobsCount: 5,
  }

  const jobsCount = apiResponse?.jobsCount || 0

  return jobsCount > 0 ? (
    <Link href="/jobs" className={(cn('shrink-0'), className)}>
      <Badge className="cursor-pointer bg-muted p-1 text-foreground hover:bg-muted/20 hover:border hover:border-gray-200">
        <span className="mr-2.5 rounded-full bg-blue-200 px-3 py-1 font-medium text-blue-800 tracking-tight">New</span>
        Job Advertisements ({jobsCount})
        <ArrowIcon />
      </Badge>
    </Link>
  ) : null
}
