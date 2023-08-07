import { PopularSearches } from '@/components/populer-search'
import { Testimonial } from '@/components/testimonial'
import { Footer } from '@/components/footer'
import { Career } from '@/components/career'
import { Features } from '@/components/features'
import { Slider } from '@/components/slider'



export default function Home() {

  return (
    <>
      <PopularSearches />
      <Career />
      <Slider />
      <Testimonial />
      <Features />
      <Footer />
    </>
  )
}
