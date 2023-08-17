import { SelectCity } from './City/SelectCity'
import SelectDate from './Date/SelectDate'
import { SelectPosition } from './Position/SelectPosition'

import SelectType from './Type/SelectType'

const FilterSide = () => {
  return (
    <aside className="flex flex-col-reverse gap-5 md:w-52 md:flex-col lg:w-60">
      <SelectCity />
      <SelectPosition />
      <div className="grid grid-cols-2 gap-5 md:grid-cols-1 ">
        <SelectDate />
        <SelectType />
      </div>
    </aside>
  )
}

export default FilterSide
