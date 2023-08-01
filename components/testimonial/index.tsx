/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import Star from './Star'

export const Testimonial = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            <span className="border-b-4 border-yellow-300"> Trusted by 300+ world className businesses </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 mt-10 text-center md:mt-20 md:grid-cols-2 gap-y-10 gap-x-24">
          <div>
            <div className="flex items-center justify-center">
              <Star />
            </div>
            <blockquote className="mt-7">
              <p className="text-base leading-relaxed text-gray-800">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam”</p>
            </blockquote>
            <img className="w-auto h-8 mx-auto mt-6 md:mt-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/6/slack.svg" alt="" />
          </div>
          <div>
            <div className="flex items-center justify-center">
              <Star />
            </div>
            <blockquote className="mt-7">
              <p className="text-base leading-relaxed">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam”</p>
            </blockquote>
            <img className="w-auto h-8 mx-auto mt-6 md:mt-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/6/trivago.svg" alt="" />
          </div>
        </div>
      </div>
    </section>


  )
}
