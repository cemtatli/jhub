'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { Divider } from '@/components/ui/or'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/app/firebase'
import { Label } from '@/components/ui/label'

import { employerRegisterSchema } from '@/validations'
import LoginWithGoogleButton from '@/components/ui/google-auth'

export const EmployerSignUpForm = () => {
  const router = useRouter()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(employerRegisterSchema),
  })

  const onSubmit = async (data: any) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
      const user = userCredential.user
      if (user) router.push('/')
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }

  return (
    <div className="mt-8 flex w-full max-w-lg flex-col gap-5 ">
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-lg flex-col gap-5">
        <div className="grid w-full items-center gap-1.5">
          <Label>Company Name </Label>
          <Input
            {...register('company_name')}
            id="company_name"
            type="text"
            placeholder="Company Name"
            className={`${errors.company_name ? 'error' : ''}`}
          />
          {errors.company_name && <small>{errors.company_name.message}</small>}
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label>Email</Label>
          <Input
            placeholder="Email"
            {...register('email')}
            id="email"
            type="email"
            className={`${errors.company_name ? 'error' : ''}`}
          />
          {errors.email && <small>{errors.email.message}</small>}
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label>Password</Label>
          <Input
            {...register('password')}
            type="password"
            placeholder="Password"
            className={`${errors.company_name ? 'error' : ''} pr-8`}
          />
          {errors.password && <small>{errors.password.message}</small>}
        </div>
        <div className="items-top flex flex-col gap-2">
          <div className="flex w-full items-center gap-x-2">
            <input type="checkbox" id="privacy" {...register('privacy')} className="accent-foreground " />
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
      <Link href="/login" className="text-center text-sm font-medium">
        Do you have already <span className="font-semibold underline hover:text-red-500">Account ?</span>
      </Link>
    </div>
  )
}
