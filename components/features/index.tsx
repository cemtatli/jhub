import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

const Features = () => {
  return (
    <>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24 rounded-lg">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Grow business with Celebration.</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>

            <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
              <div className="relative w-full h-full flex-1 mt-4 mb-10 ml-auto">
                <Image width={600} height={500} loading='lazy' className="ml-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/person.jpg" alt="features/1/person" />
                <div className="absolute -bottom-10 -left-16 hidden sm:block  ">
                  <div className="bg-yellow-300 rounded-lg">
                    <div className="px-8 py-10">
                      <span className="block text-4xl font-bold text-black lg:text-5xl"> 53% </span>
                      <span className="block mt-2 text-base leading-tight text-black"> High Conversions<br />Everything </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center">
              <div className="w-20 h-20 -mr-6 overflow-hidden bg-gray-300 rounded-full">
                <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-1.jpg" alt="" />
              </div>

              <div className="relative overflow-hidden bg-gray-300 border-8 border-white rounded-full w-28 h-28">
                <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/male-avatar-1.jpg" alt="" />
              </div>

              <div className="w-20 h-20 -ml-6 overflow-hidden bg-gray-300 rounded-full">
                <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/2/female-avatar-2.jpg" alt="" />
              </div>
            </div>

            <h2 className="mt-8 text-3xl font-bold leading-tight text-black lg:mt-12 sm:text-4xl lg:text-5xl">Join <span className="border-b-8 border-yellow-300">5,482</span> other developers</h2>
            <p className="max-w-xl mx-auto mt-6 text-xl md:mt-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
            <Link href={'/login'}><Button className='mt-8 h-12 px-10'>Get instant access</Button></Link>
          </div>
        </div>
      </section>
    </>


  )
}

export default Features