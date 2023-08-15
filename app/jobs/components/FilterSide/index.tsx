import { SelectCity } from './City/SelectCity'
import SelectDate from './Date/SelectDate'
import { SelectPosition } from './Position/SelectPosition'

import SelectType from './Type/SelectType'

const FilterSide = () => {
  return (
    <aside className="flex flex-col-reverse gap-5 md:w-52 md:flex-col">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-1 ">
        <SelectDate />
        <SelectType />
      </div>
      <SelectPosition />
      <SelectCity />
    </aside>
  )
}

export default FilterSide
