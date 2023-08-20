import { PopularSearches } from '@/components/populer-search'
import { Testimonial } from '@/components/testimonial'
import { Footer } from '@/components/footer'
import { Career } from '@/components/career'
import { Features } from '@/components/features'
import { Slider } from '@/components/slider'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <PopularSearches />
      <Career />
      <Slider />
      <Testimonial />
      <Features />
      <Footer />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb94_1px,transparent_1px)] [background-size:16px_16px]"></div>
    </Fragment>
  )
}
