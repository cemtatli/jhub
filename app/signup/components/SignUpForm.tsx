'use client'

import Link from 'next/link'
import React from 'react'

import { ButtonWithIcon } from '@/components/shared/ButtonWithIcon'
import { CheckboxWithText } from '@/components/shared/CheckboxWithText'
import { Divider } from '@/components/shared/Divider'
import { InputFile } from '@/components/shared/InputFile'
import { InputWithLabel } from '@/components/shared/InputWithLabel'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const SignUpForm = () => {
  const submitHandle = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    console.log('clicked !')
  }
  return (
    <Tabs defaultValue="user" className="w-full max-w-lg">
      <TabsList>
        <TabsTrigger value="user">User</TabsTrigger>
        <TabsTrigger value="employer">Employer</TabsTrigger>
      </TabsList>
      <TabsContent value="user">
        <form onSubmit={submitHandle} className="mt-8 flex w-full max-w-lg flex-col gap-5">
          <span className="flex gap-x-2.5">
            <InputWithLabel label={'Name'} id="name" type="text" />
            <InputWithLabel label={'Surname'} id="surname" type="text" />
          </span>
          <InputWithLabel label={'E-mail'} id="email" type="email" />
          <InputWithLabel label={'Password'} id="password" type="password" />
          <CheckboxWithText />
          <Button type="submit">Sign Up</Button>
          <Divider label="or" />
          <ButtonWithIcon size={22} variant="google" />
          <ButtonWithIcon size={24} variant="github" label="Login with GitHub" />
          <Link href="/login" className="text-center text-sm font-medium">
            Do you have already{' '}
            <span className="font-semibold underline hover:text-red-500">Account ?</span>
          </Link>
        </form>
      </TabsContent>
      <TabsContent value="employer">
        <form onSubmit={submitHandle} className="mt-8 flex w-full max-w-lg flex-col gap-5">
          <span className="flex gap-x-2.5">
            <InputWithLabel label={'Company Name'} id="company_name" type="text" />
            <InputFile label={'Company Logo'} />
          </span>
          <InputWithLabel label={'E-mail'} id="email" type="email" />
          <InputWithLabel label={'Password'} id="password" type="password" />
          <CheckboxWithText />
          <Button type="submit">Sign Up</Button>
          <Divider label="or" />
          <ButtonWithIcon size={22} variant="google" />
          <ButtonWithIcon size={24} variant="github" label="Login with GitHub" />
          <Link href="/login" className="text-center text-sm font-medium">
            Do you have already{' '}
            <span className="font-semibold underline hover:text-red-500">Account ?</span>
          </Link>
        </form>
      </TabsContent>
    </Tabs>
  )
}
