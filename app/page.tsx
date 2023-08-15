import { PopularSearches } from '@/components/populer-search'
import { Testimonial } from '@/components/testimonial'
import { Footer } from '@/components/footer'
import { Career } from '@/components/career'
import { Features } from '@/components/features'
import { Slider } from '@/components/slider'

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      <PopularSearches />
      <Career />
      <Slider />
      <Testimonial />
      <Features />
      <Footer />
    </>
  )
}
