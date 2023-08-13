import React from 'react'
import FilterSide from './components/FilterSide'
import JobsPage from './page'

const JobLayout = () => {
  return (
    <div className='py-5 flex h-fit-screen gap-5' >
      <FilterSide />
      <JobsPage />
    </div>
  )
}

export default JobLayout