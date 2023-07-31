import { Slider } from '@/components/slider'
import { PopularSearches } from '@/components/populer-search'
import Footer from '@/components/footer'
import AccordionMenu from '@/components/accordion'


export default function Home() {
  return (
    <>
      <PopularSearches />
      <Slider />
      <AccordionMenu />
      <Footer />
    </>
  )
}
