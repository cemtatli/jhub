'use client'

import { useState, useEffect } from 'react'

import { Slider } from '@/components/slider'
import { PopularSearches } from '@/components/populer-search'
import Footer from '@/components/footer'
import Loading from './loading'
import { Testimonial } from '@/components/testimonial'
import Features from '@/components/features'




export default function Home() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient ? <>
        <PopularSearches />
        <Slider />
        <Testimonial />
        <Features />

        <Footer /></> : <>
        <Loading />
      </>
      }
    </>
  )
}
