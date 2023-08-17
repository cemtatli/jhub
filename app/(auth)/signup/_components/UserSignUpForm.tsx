'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Divider } from '@/components/ui/divider'
import LoginWithGoogleButton from '@/components/ui/google-auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '@/app/firebase'

import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { userRegisterSchema } from '@/validations'

export const UserSignUpForm = () => {
  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegisterSchema),
  })

  const onSubmit = async (data: any) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
      const user = userCredential.user
      if (user) {
        const displayName = `${data.name} ${data.surname}`
        await updateProfile(user, { displayName })
        toast.success(`${displayName} have successfully registered.`)
        router.push('/cv')
      }
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <div className="mt-5 flex w-full max-w-lg flex-col gap-5">
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-lg flex-col gap-5">
        <div className="grid w-full items-center gap-1.5">
          <Label className={`${errors.name ? 'error' : ''}`}>Name </Label>
          <Input
            {...register('name')}
            id="name"
            type="text"
            placeholder="Cem"
            name="name"
            className={`${errors.name ? 'error' : ''}`}
          />
          {errors.name && <small>{errors.name.message}</small>}
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label className={`${errors.surname ? 'error' : ''}`}>Surname</Label>
          <Input
            {...register('surname')}
            name="surname"
            id="surname"
            type="text"
            placeholder="Tatlı"
            className={`${errors.surname ? 'error' : ''}`}
          />
          {errors.surname && <small>{errors.surname.message}</small>}
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label className={`${errors.email ? 'error' : ''}`}>Email </Label>
          <Input
            {...register('email')}
            id="email"
            name="email"
            type="email"
            placeholder={'user@jhub.com'}
            className={`${errors.email ? 'error' : ''}`}
          />
          {errors.email && <small>{errors.email.message}</small>}
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label className={`${errors.password ? 'error' : ''}`}>Password </Label>
          <Input
            {...register('password')}
            name="password"
            id="password"
            type="password"
            placeholder="*********"
            className={`${errors.password ? 'error' : ''} pr-8`}
          />
          {errors.password && <small>{errors.password.message}</small>}
        </div>
        <div className="items-top flex flex-col gap-2">
          <div className="flex w-full items-center gap-x-2">
            <input
              type="checkbox"
              id="privacy"
              {...register('privacy')}
              className="accent-foreground"
            />
            <Label
              htmlFor="privacy"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Accept terms and conditions
            </Label>
          </div>
          {errors.privacy && <small>{errors.privacy.message}</small>}
        </div>
        <Button type="submit">Sign Up</Button>
      </form>
      <Divider label="or" />
      <LoginWithGoogleButton />
      <Link href="/login" className="text-center text-sm font-medium hover:underline">
        Do you have already Account ?
      </Link>
    </div>
  )
}
