import React from 'react'
import SelectCity from './SelectCity'
import SelectDate from './SelectDate'

const FilterSide = () => {
  return (
    <aside className='w-72 flex flex-col h-fit-screen gap-5 pt-5'>
      <SelectCity />
      <SelectDate />
    </aside>
  )
}

export default FilterSide