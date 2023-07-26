'use client'

import Link from 'next/link'
import React from 'react'
import LoginWithGoogleButton from '@/app/firebase/google-auth'
import { Divider } from '@/components/shared/Divider'
import { InputFile } from '@/components/shared/InputFile'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const EmployerSignUpForm = () => {
  return (
    <div className="mt-8 flex w-full max-w-lg flex-col gap-5 ">
      <form className="flex w-full max-w-lg flex-col gap-5">
        <Input placeholder={'Company Name'} id="company_name" type="text" />
        <Input placeholder={'E-mail'} id="email" type="email" />
        <Input type="password" placeholder="Password" />
        <InputFile label={'Upload your company logo'} />
        <Button>Sign Up</Button>
      </form>
      <Divider label="or" />
      <LoginWithGoogleButton />
      <Link href="/login" className="text-center text-sm font-medium">
        Do you have already <span className="font-semibold underline hover:text-red-500">Account ?</span>
      </Link>
    </div>
  )
}
