'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { CheckboxWithText } from '@/components/shared/CheckboxWithText'
import { Divider } from '@/components/shared/Divider'
import { InputWithLabel } from '@/components/shared/InputWithLabel'
import { Button } from '@/components/ui/button'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/app/firebase'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import LoginWithGoogleButton from '@/app/firebase/google-auth'

export const UserSignUpForm = () => {
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
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <div className="mt-8 flex w-full max-w-lg flex-col gap-5">
      <div className="flex items-center justify-between gap-x-5">
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
      </div>
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
      <Button onClick={userAuthFunction}>Sign Up</Button>
      <Divider label="or" />
      <LoginWithGoogleButton />
      <Link href="/login" className="text-center text-sm font-medium">
        Do you have already{' '}
        <span className="font-semibold underline hover:text-red-500">Account ?</span>
      </Link>
    </div>
  )
}
