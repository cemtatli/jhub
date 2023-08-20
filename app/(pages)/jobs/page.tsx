import { FC } from 'react'
import JobItems from './item'

interface JobsPageProps {}

const JobsPage: FC<JobsPageProps> = ({}) => {
  return (
    <div className="grid gap-4 overflow-auto md:grid-cols-2 w-full ">
      <JobItems />
      <JobItems />
      <JobItems />
      <JobItems />
      <JobItems />
      <JobItems />
      <JobItems />
      <JobItems />
      <JobItems />
      <JobItems />
      <JobItems />
      <JobItems />
      <JobItems />
      <JobItems />
    </div>
  )
}

export default JobsPage
