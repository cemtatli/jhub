import React from 'react'
import FilterSide from './components/FilterSide'
import JobsPage from './page'

const JobLayout = () => {
  return (
    <div className="flex h-fit-screen-mobile flex-col gap-5 py-5 md:h-fit-screen md:flex-row">
      <FilterSide />
      <JobsPage />
    </div>
  )
}

export default JobLayout
