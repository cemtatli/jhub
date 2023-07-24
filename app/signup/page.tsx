/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { SignUpForm } from './components/SignUpForm'
import { Metadata } from 'next'
import { Logo } from '@/components/shared/Logo'

export const metadata: Metadata = {
  title: 'JHubs — Sign up',
}

const SignUp = () => {
  return (
    <section className="grid h-fit-screen grid-cols-1 place-items-center lg:grid-cols-2">
      <div className="hidden h-full w-full p-2 pl-0 lg:block">
        <img
          className="h-full rounded object-cover"
          alt="sign-up-photo"
          src="https://images.pexels.com/photos/140945/pexels-photo-140945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center xl:items-end">
        <SignUpForm />
      </div>
    </section>
  )
}

export default SignUp
