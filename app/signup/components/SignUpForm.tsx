'use client'

import Link from 'next/link'
import React, { useState } from 'react'

import { ButtonWithIcon } from '@/components/shared/ButtonWithIcon'
import { CheckboxWithText } from '@/components/shared/CheckboxWithText'
import { Divider } from '@/components/shared/Divider'
import { InputFile } from '@/components/shared/InputFile'
import { InputWithLabel } from '@/components/shared/InputWithLabel'
import { Button } from '@/components/ui/button'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { auth } from '@/app/firebase'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import loginWithGoogle from '@/app/firebase/google-auth'
import LoginWithGoogleButton from '@/app/firebase/google-auth'

export const SignUpForm = () => {
  const router = useRouter()
  const [userRegister, setUserRegister] = useState({
    email: '',
    password: '',
    name: '',
    surname: '',
  })

  const userRegisterData = (e: { target: { name: any; value: any } }) => {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value })
  }
  const userAuthFunction = async () => {
    try {
      const data = await createUserWithEmailAndPassword(
        auth,
        userRegister.email,
        userRegister.password,
      )
      const user = data.user
      if (user) {
        toast.success(`${user.email} have successfully registered`)
        router.push('/')
      }
      console.log(user)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <Tabs defaultValue="user" className="w-full max-w-lg">
      <TabsList>
        <TabsTrigger value="user">User</TabsTrigger>
        <TabsTrigger value="employer">Employer</TabsTrigger>
      </TabsList>
      <TabsContent value="user">
        <div
          /* onSubmit={userAuthFunction}  */ className="mt-8 flex w-full max-w-lg flex-col gap-5">
          <span className="flex gap-x-2.5">
            <InputWithLabel
              name="name"
              onChange={userRegisterData}
              value={userRegister.name}
              label={'Name'}
              id="name"
              type="text"
            />
            <InputWithLabel
              name="surname"
              onChange={userRegisterData}
              value={userRegister.surname}
              label={'Surname'}
              id="surname"
              type="text"
            />
          </span>
          <InputWithLabel
            onChange={userRegisterData}
            value={userRegister.email}
            label={'E-mail'}
            id="email"
            name="email"
            type="email"
          />
          <InputWithLabel
            onChange={userRegisterData}
            value={userRegister.password}
            label={'Password'}
            id="password"
            name="password"
            type="password"
          />
          <CheckboxWithText />
          <Button type="button" onClick={userAuthFunction}>
            Sign Up
          </Button>
          <Divider label="or" />
          <LoginWithGoogleButton />
          <ButtonWithIcon
            onClick={loginWithGoogle}
            size={24}
            variant="github"
            label="Login with GitHub"
          />
          <Link href="/login" className="text-center text-sm font-medium">
            Do you have already{' '}
            <span className="font-semibold underline hover:text-red-500">Account ?</span>
          </Link>
        </div>
      </TabsContent>
      {/*       <TabsContent value="employer">
        <form className="mt-8 flex w-full max-w-lg flex-col gap-5">
          <InputWithLabel label={'Company Name'} id="company_name" type="text" />
          <InputWithLabel label={'E-mail'} id="email" type="email" />
          <InputWithLabel label={'Password'} id="password" type="password" />
          <InputFile label={'Upload your company logo'} />
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
      </TabsContent> */}
    </Tabs>
  )
}
