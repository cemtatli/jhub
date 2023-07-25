'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Divider } from '@/components/shared/Divider'
import { Button } from '@/components/ui/button'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '@/app/firebase'
import { useRouter } from 'next/navigation'
import LoginWithGoogleButton from '@/app/firebase/google-auth'
import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { userRegisterSchema } from '@/validations/register-schema'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { InputWithLabel } from '@/components/shared/InputWithLabel'

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
        const displayName = `${userRegister.name} ${userRegister.surname}`
        await updateProfile(user, { displayName })
        toast.success(`${user.displayName} have successfully registered.`)
        router.push('/')
      }
      console.log(user)
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  return (
    <div className="mt-8 flex w-full max-w-lg flex-col gap-5">
      <form
        onSubmit={handleSubmit(userAuthFunction)}
        className="flex w-full max-w-lg flex-col gap-5">
        <div className="grid w-full items-center gap-1.5">
          <Label>Name </Label>
          <Input
            {...register('name')}
            id="name"
            type="text"
            placeholder="Name"
            onChange={userRegisterData}
            value={userRegister.name}
            name="name"
            className={`${errors.name ? 'border-red-500 !ring-red-500' : ''}`}
          />
          {errors.name && <small>{errors.name.message}</small>}
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label>Surname </Label>
          <Input
            {...register('surname')}
            name="surname"
            id="surname"
            type="text"
            onChange={userRegisterData}
            value={userRegister.surname}
            className={`${errors.name ? 'border-red-500 !ring-red-500' : ''}`}
          />
          {errors.surname && <small>{errors.surname.message}</small>}
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label>Email </Label>
          <Input
            {...register('email')}
            id="email"
            name="email"
            type="email"
            onChange={userRegisterData}
            value={userRegister.email}
            className={`${errors.name ? 'border-red-500 !ring-red-500' : ''}`}
          />
          {errors.email && <small>{errors.email.message}</small>}
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label>Password </Label>
          <Input
            {...register('password')}
            name="password"
            id="password"
            type="password"
            onChange={userRegisterData}
            value={userRegister.password}
            className={`${errors.name ? 'border-red-500 !ring-red-500' : ''}`}
          />
          {errors.password && <small>{errors.password.message}</small>}
        </div>

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
