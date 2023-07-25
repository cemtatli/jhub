'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { CheckboxWithText } from '@/components/shared/CheckboxWithText'
import { Divider } from '@/components/shared/Divider'
import { InputWithLabel } from '@/components/shared/InputWithLabel'
import { Button } from '@/components/ui/button'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '@/app/firebase'
import { useRouter } from 'next/navigation'
import LoginWithGoogleButton from '@/app/firebase/google-auth'
import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { userRegisterSchema } from '@/validations/register-schema'

export const UserSignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegisterSchema),
  })
  const router = useRouter()
  const [userRegister, setUserRegister] = useState({
    email: '',
    password: '',
    name: '',
    surname: '',
    confirm: false,
  })
  /* 
  const userRegisterData = (e: { target: { name: any; value: any } }) => {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value })
  } */

  const submitHandle = (e: any) => {
    e.preventDefault()
    userAuthFunction()
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
        const displayName = `${userRegister.name} ${userRegister.surname}`
        await updateProfile(user, { displayName })
        toast.success(`${user.displayName} have successfully registered.`)
        router.push('/')
      }
      console.log(user)
    } catch (error: any) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <div className="mt-8 flex w-full max-w-lg flex-col gap-5">
      <form onSubmit={handleSubmit(submitHandle)} className="flex w-full max-w-lg flex-col gap-5">
        <InputWithLabel {...register('name')} label={'Name'} id="name" type="text" name="name" />
        {errors.name && <small>{errors.name.message}</small>}
        <InputWithLabel
          {...register('surname')}
          label={'Surname'}
          name="surname"
          id="surname"
          type="text"
        />
        {errors.surname && <small>{errors.surname.message}</small>}
        <InputWithLabel
          {...register('email')}
          label={'E-mail'}
          id="email"
          name="email"
          type="email"
        />
        {errors.email && <small>{errors.email.message}</small>}
        <InputWithLabel label={'Password'} id="password" name="password" type="password" />
        {errors.password && <small>{errors.password.message}</small>}
        <CheckboxWithText name={'confirm'} />
        {errors.confirm && <small className="">{errors.confirm.message}</small>}{' '}
        {/* Hata mesajını göster */}
        <Button type="submit">Sign Up</Button>
      </form>
      <Divider label="or" />
      <LoginWithGoogleButton />
      <Link href="/login" className="text-center text-sm font-medium">
        Do you have already{' '}
        <span className="font-semibold underline hover:text-red-500">Account ?</span>
      </Link>
    </div>
  )
}
