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
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"/>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[300px] w-[350px] rounded-full bg-lime-400 opacity-30 blur-[88px]" />
    </Fragment>
  )
}
