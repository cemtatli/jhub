import { PopularSearches } from '@/components/populer-search'
import { Testimonial } from '@/components/testimonial'
import { Footer } from '@/components/footer'
import { Career } from '@/components/career'
import { Features } from '@/components/features'


export default function Home() {

  return (
    <>
      <PopularSearches />
      <Career />
      <Testimonial />
      <Features />
      <Footer />
    </>
  )
}
