/* eslint-disable @next/next/no-img-element */

import { Metadata } from 'next'
import { LoginForm } from './components/LoginForm'
import { Logo } from '@/components/shared/Logo'

export const metadata: Metadata = {
  title: 'JHubs — Login',
}

const Login = () => {
  return (
    <section className="grid h-fit-screen grid-cols-1 place-items-center lg:grid-cols-2">
      <div className="hidden h-full w-full p-2 pl-0 lg:block">
        <img
          className="h-full w-full rounded object-cover"
          alt="login-photo"
          src="https://images.pexels.com/photos/140945/pexels-photo-140945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div className="flex w-full flex-col items-center">
        <Logo />
        <h2 className="mb-4 font-medium">Join and discover job opportunities</h2>
        <LoginForm />
      </div>
    </section>
  )
}

export default Login
