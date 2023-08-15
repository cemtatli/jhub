'use client'

import Link from 'next/link'
import React, { useState } from 'react'

import { Divider } from '@/components/ui/divider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { login } from '@/app/firebase'
import { useRouter } from 'next/navigation'

import LoginWithGoogleButton from '@/components/ui/google-auth'
import { Label } from '@/components/ui/label'

export const LoginForm = () => {
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

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const user = await login(data.email, data.password)
    if (user) router.push('/')
    console.log(user)
  }

  return (
    <div className="flex w-full max-w-lg flex-col gap-5">
      <form onSubmit={onSubmit} className="mt-8 flex w-full max-w-lg flex-col gap-5">
        <div className="grid w-full items-center gap-1.5">
          <Label>Email</Label>
          <Input
            value={data.email}
            onChange={handleChange}
            name="email"
            placeholder={'user@jhub.com'}
            id="email"
            type="email"
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label>Password</Label>
          <Input
            value={data.password}
            onChange={handleChange}
            name="password"
            placeholder="*********"
            id="password"
            type="password"
            className="pr-8"
          />
        </div>
        <Button type="submit">Log in</Button>
      </form>
      <Divider label="or" />
      <LoginWithGoogleButton />
      <Link href="/signup" className="group text-center text-sm font-medium">
        Don&lsquo;t have an account?{' '}
        <span
          className="
        group-hover:underline">
          Account ?
        </span>
      </Link>
    </div>
  )
}
