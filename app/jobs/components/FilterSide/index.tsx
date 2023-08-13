import { SelectCity } from "./City/SelectCity"
import SelectDate from "./Date/SelectDate"


const FilterSide = () => {
  return (
    <aside className='w-52 flex flex-col gap-5'>
      <SelectDate />
      <SelectCity />
    </aside>
  )
}

export default FilterSide