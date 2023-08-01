import { PopularSearches } from '@/components/populer-search'
import { Slider } from '@/components/slider'
import { Testimonial } from '@/components/testimonial'
import { Comments } from '@/components/comments'
import { Footer } from '@/components/footer'

export default function Home() {

  return (
    <>
      <PopularSearches />
      <Slider />
      <Testimonial />
      <Comments />
      <Footer />
    </>
  )
}
