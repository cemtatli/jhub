'use client'

import { useState } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase'
import { GoogleAuthProvider } from 'firebase/auth'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

import { ButtonWithIcon } from '@/components/shared/ButtonWithIcon'

const provider = new GoogleAuthProvider()

const LoginWithGoogleButton = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const loginWithGoogle = async () => {
    try {
      setLoading(true)
      const data = await signInWithPopup(auth, provider)
      const credential = GoogleAuthProvider.credentialFromResult(data)
      const token = credential.accessToken
      const user = data.user
      if (user) {
        toast.success(`${user.email} giriş yapıldı`)
        router.push('/')
      }
      console.log(user)
    } catch (error) {
      console.log(error)
      const credential = GoogleAuthProvider.credentialFromError(error)
      toast.error(credential)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ButtonWithIcon
      onClick={loginWithGoogle}
      size={22}
      variant={loading ? '' : 'google'}
      label={loading ? 'Loading' : 'Login with Google'}
    />
  )
}

export default LoginWithGoogleButton
