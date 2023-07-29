'use client'

import Link from 'next/link'
import React, { useState } from 'react'

import { Divider } from '@/components/shared/Divider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { login } from '@/app/firebase'
import { useRouter } from 'next/navigation'
import { logIn as loginHandle } from '@/app/redux/features/authSlice'
import LoginWithGoogleButton from '@/components/GoogleAuth'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/app/redux/store'

export const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = async (e: any) => {
    e.preventDefault()
    const user = await login(data.email, data.password)
    dispatch(loginHandle(data.email))
    if (user) router.push('/')
    console.log(user)
  }

  return (
    <div className="flex w-full max-w-lg flex-col gap-5">
      <form onSubmit={onSubmit} className="mt-8 flex w-full max-w-lg flex-col gap-5">
        <Input value={data.email} onChange={handleChange} name="email" placeholder={'E-mail'} id="email" type="email" />
        <Input
          value={data.password}
          onChange={handleChange}
          name="password"
          placeholder="Password"
          id="password"
          type="password"
        />
        <Button type="submit">Log in</Button>
      </form>
      <Divider label="or" />
      <LoginWithGoogleButton />
      <Link href="/signup" className="text-center text-sm font-medium">
        Don&lsquo;t have an account? <span className="font-semibold underline hover:text-red-500">Account ?</span>
      </Link>
    </div>
  )
}
