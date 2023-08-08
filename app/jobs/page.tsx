import { FC } from 'react'
import SelectDate from './components/SelectDate'
import FilterSide from './components/FilterSide'

interface JobsPageProps {

}

const JobsPage: FC<JobsPageProps> = ({ }) => {
  return (
    <div>
      <FilterSide />
    </div>
  )
}

export default JobsPage