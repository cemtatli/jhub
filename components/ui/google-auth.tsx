'use client'

import { useState } from 'react'
import { signInWithPopup } from 'firebase/auth'

import { GoogleAuthProvider } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { ButtonWithIcon } from '@/components/ui/shared/ButtonWithIcon'
import { toast } from 'react-hot-toast'
import { auth } from '@/app/firebase'

const provider = new GoogleAuthProvider()

const LoginWithGoogleButton = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const loginWithGoogle = async () => {
    try {
      setLoading(true)
      const data = await signInWithPopup(auth, provider)
      const credential: any = GoogleAuthProvider.credentialFromResult(data)
      const token = credential.accessToken
      const user = data.user
      if (user) {
        toast.success(`Successfully registered.`)
        localStorage.setItem('user', token)
        router.push('/')
      }
      console.log(user)
    } catch (error: any) {
      const credential: any = GoogleAuthProvider.credentialFromError(error)
      toast.error(credential)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ButtonWithIcon
      onClick={loginWithGoogle}
      size={20}
      variant={loading ? 'loading' : 'google'}
      text={loading ? 'Loading' : 'Login with Google'}
    />
  )
}

export default LoginWithGoogleButton
