import { Slider } from '@/components/Slider'
import { PopularSearches } from '@/components/populer-search'


export default function Home() {
  return (
    <section className='flex flex-col gap-12 mt-12'>
      <PopularSearches />
      <Slider />
    </section>
  )
}
