import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { toast } from 'react-hot-toast'
import { login as loginHandle, logout as logoutHandle } from '@/app/redux/features/authSlice'
import store from '@/app/redux/store'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export const login = async (email: string, password: string) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    if (user) {
      toast.success(`Welcome Back ${user.displayName}`)
    }
    return user
  } catch (error: any) {
    toast.error(error.message)
  }
}
export const logout = async () => {
  try {
    await signOut(auth)
    return true
  } catch (error: any) {
    toast.error(error.message)
  }
}
onAuthStateChanged(auth, (user) => {
  if (user) {
    store.dispatch(loginHandle(user))
  } else {
    store.dispatch(logoutHandle())
  }
})
