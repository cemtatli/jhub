import { Metadata } from 'next'
import { LoginForm } from './_components/LoginForm'
import { Logo } from '@/components/ui/logo'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'JHubs — Login',
}

const Login = () => {
  return (
    <section className="grid h-fit-screen grid-cols-1 place-items-center lg:grid-cols-2">
      <div className="relative hidden h-full w-full p-2 pl-0 lg:block">
        <div className="relative h-full w-full">
          <Image
            fill
            className="h-full overflow-hidden rounded object-cover"
            alt="Login"
            placeholder="empty"
            src={'/assets/slider/slider-3.webp'}
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center xl:items-end">
        <div className="flex w-full max-w-lg flex-col items-center justify-center">
          <Logo slogan="" />
          <h3 className="mb-4 font-medium">Join and discover job opportunities</h3>
        </div>
        <LoginForm />
      </div>
    </section>
  )
}

export default Login
