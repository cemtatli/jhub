import React from 'react';
import { Button } from '../ui/button';
import FeatureItem from './FeatureItem';
import Link from 'next/link';

export const Features = () => {
  return (
    <section className="py-24 pb-12 bg-gray-100 overflow-hidden rounded-lg">
      <div className="container px-4 mx-auto flex flex-col gap-12">
        <div className="max-w-xl text-center mx-auto">
          <h2 className="font-heading mb-5 text-6xl tracking-tighter">Explore Career Opportunities</h2>
          <p className="text-xl tracking-tight">Effortlessly streamline your tasks and enhance efficiency with our cutting-edge productivity tools. Our pre-designed sections provide a seamless layout-building experience.</p>
        </div>
        <div className="flex flex-wrap px-5">
          <FeatureItem title='Select the Perfect Tool' description='Navigate through a multitude of responsive sections to curate the ideal layout. All sections are customizable and ready to use.' />
          <FeatureItem title='Create Your Account' description='Sign up and dive into a world of innovative features. Our intuitive interface makes account setup a breeze.' />
          <FeatureItem title='Embark on Your Jhub Journey' description='Embrace a new way of working with Jhub. Our responsive sections pave the way for a flawless layout that suits your needs.' />
        </div>
        <div className="flex flex-row justify-center mt-5">
          <Button className='py-6 text-base tracking-tighter rounded-lg'>
            <Link href={'/signup'}>Register Now </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
