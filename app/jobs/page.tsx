import { FC } from 'react'
import FilterSide from './components/FilterSide'

interface JobsPageProps {

}

const JobsPage: FC<JobsPageProps> = ({ }) => {
  return (
    <div className='flex'>
      <FilterSide />
    </div>
  )
}

export default JobsPage