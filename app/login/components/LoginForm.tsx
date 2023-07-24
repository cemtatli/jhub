'use client'
import Link from 'next/link'
import React from 'react'

import { ButtonWithIcon } from '@/components/shared/ButtonWithIcon'
import { Divider } from '@/components/shared/Divider'
import { InputWithLabel } from '@/components/shared/InputWithLabel'
import { Button } from '@/components/ui/button'
export const LoginForm = () => {
  const submitHandle = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    console.log('clicked Login !')
  }
  return (
    <form onSubmit={submitHandle} className="mt-8 flex w-full max-w-lg flex-col gap-5">
      <InputWithLabel label={'E-mail'} id="email" type="email" />
      <InputWithLabel label={'Password'} id="password" type="password" />
      <Button type="submit">Log in</Button>
      <Divider label="or" />
      <ButtonWithIcon size={22} variant="google" />
      <ButtonWithIcon size={24} variant="github" label="Login with GitHub" />
      <Link href="/signup" className="text-center text-sm font-medium">
        Don&lsquo;t have an account?{' '}
        <span className="font-semibold underline hover:text-red-500">Account ?</span>
      </Link>
    </form>
  )
}
