'use client'

import { ButtonWithIcon } from '@/components/shared/ButtonWithIcon'
import { CheckboxWithText } from '@/components/shared/CheckboxWithText'
import { Divider } from '@/components/shared/Divider'
import { InputFile } from '@/components/shared/InputFile'
import { InputWithLabel } from '@/components/shared/InputWithLabel'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export const EmployerSignUpForm = () => {
  return (
    <form className="mt-8 flex w-full max-w-lg flex-col gap-5">
      <InputWithLabel label={'Company Name'} id="company_name" type="text" />
      <InputWithLabel label={'E-mail'} id="email" type="email" />
      <InputWithLabel label={'Password'} id="password" type="password" />
      <InputFile label={'Upload your company logo'} />
      <CheckboxWithText />
      <Button>Sign Up</Button>
      <Divider label="or" />
      <ButtonWithIcon size={22} variant="google" label="Login with Google" />
      <Link href="/login" className="text-center text-sm font-medium">
        Do you have already{' '}
        <span className="font-semibold underline hover:text-red-500">Account ?</span>
      </Link>
    </form>
  )
}
