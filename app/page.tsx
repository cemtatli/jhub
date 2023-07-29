'use client'

import { PopularSearches } from '@/components/PopularSearches'
import { useAppSelector } from './redux/store'

export default function Home() {
  const isAuth = useAppSelector((state) => state.auth.value.isAuth)
  return <div>{isAuth ? <PopularSearches /> : <div className="mt-5">Giris yap bremin</div>}</div>
}
