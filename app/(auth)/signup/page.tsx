import React from 'react'
import { SignUpForm } from './_components/SignUpForm'
import { Metadata } from 'next'
import Image from 'next/image'
export const metadata: Metadata = {
  title: 'JHubs — Sign up',
}

const SignUp = () => {
  return (
    <section className="grid h-fit-screen grid-cols-1 place-items-center lg:grid-cols-2">
      <div className="relative hidden h-full w-full p-2 pl-0 lg:block">
        <div className="relative h-full w-full">
          <Image
            fill
            loading="lazy"
            className="h-full overflow-hidden rounded object-cover"
            alt="Sign up"
            src="https://images.pexels.com/photos/140945/pexels-photo-140945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
      <div className=" flex h-full w-full flex-col items-center justify-center xl:items-end">
        <SignUpForm />
      </div>
    </section>
  )
}

export default SignUp
