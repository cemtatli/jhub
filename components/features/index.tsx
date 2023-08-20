import React from 'react'
import { Button } from '../ui/button'
import FeatureItem from './feature-item'
import Link from 'next/link'

export const Features = () => {
  return (
    <section className="overflow-hidden  rounded-lg bg-gray-100 sm:py-24 py-4 text-center">
      <div className="container mx-auto flex flex-col gap-12 px-4">
        <div className="mx-auto hidden max-w-xl px-5 text-center sm:block">
          <h2 className="font-heading mb-5 text-6xl tracking-tighter">
            Explore Career Opportunities
          </h2>
          <p className="text-xl tracking-tight">
            Effortlessly streamline your tasks and enhance efficiency with our cutting-edge
            productivity tools. Our pre-designed sections provide a seamless layout-building
            experience.
          </p>
        </div>
        <div className="flex flex-wrap px-5">
          <FeatureItem
            title="Analytics Dashboard"
            description="Track your job applications and analyze the success rate with our comprehensive analytics dashboard."
          />
          <FeatureItem
            title="Job Matching Algorithm"
            description="Our advanced algorithm matches your skills and preferences with the perfect job opportunities."
          />
          <FeatureItem
            title="Chat Support"
            description="Embrace a new way of working with Jhub. Our responsive sections pave the way for a flawless layout that suits your needs."
          />
        </div>
        <div className="mt-2.5 flex justify-center">
          <Button className="rounded-lg py-6 text-base tracking-tighter">
            <Link href={'/signup'}>Register Now</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
