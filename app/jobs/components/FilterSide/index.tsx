import { SelectCity } from "./SelectCity"
import SelectDate from "./SelectDate"


const FilterSide = () => {
  return (
    <aside className='w-[200px] flex flex-col h-fit-screen gap-5 pt-5'>
      <SelectDate />
      <SelectCity />

    </aside>
  )
}

export default FilterSide