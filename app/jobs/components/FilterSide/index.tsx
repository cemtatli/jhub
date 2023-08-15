import { SelectCity } from './City/SelectCity'
import SelectDate from './Date/SelectDate'

const FilterSide = () => {
  return (
    <aside className="flex w-52 flex-col gap-5">
      <SelectDate />
      <SelectCity />
    </aside>
  )
}

export default FilterSide
