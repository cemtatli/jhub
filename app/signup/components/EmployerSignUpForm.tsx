'use client'

import Link from 'next/link'
import React from 'react'
import LoginWithGoogleButton from '@/app/firebase/google-auth'
import { Divider } from '@/components/shared/Divider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { employerRegisterSchema } from '@/validations/register-schema'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/app/firebase'
import { Label } from '@/components/ui/label'

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
      if (user) {
        toast.success(`${data.company_name} successfully registered`)
        router.push('/')
      }
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }
  return (
    <div className="mt-8 flex w-full max-w-lg flex-col gap-5 ">
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-lg flex-col gap-5">
        <div className="grid w-full items-center gap-1.5">
          <Input
            {...register('company_name')}
            placeholder={'Company Name'}
            id="company_name"
            type="text"
            className={`${errors.company_name ? 'error' : ''}`}
          />
          {errors.company_name && <small>{errors.company_name.message}</small>}
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Input
            {...register('email')}
            placeholder={'E-mail'}
            id="email"
            type="email"
            className={`${errors.company_name ? 'error' : ''}`}
          />
          {errors.email && <small>{errors.email.message}</small>}
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Input {...register('password')} type="password" placeholder="Password" />
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
