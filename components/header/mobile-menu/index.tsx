import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'
import { Logo } from '@/components/shared/Logo'
import { Divider } from '@/components/shared/Divider'
import { Button } from '@/components/ui/button'
import { AppDispatch, useAppSelector } from '@/app/redux/store'
import { useDispatch } from 'react-redux'
import { logOut } from '@/app/redux/features/authSlice'
import { useRouter } from 'next/navigation'

export const MobileMenu = () => {
  const router = useRouter()
  const isAuth = useAppSelector((state) => state.auth.value.isAuth)
  const dispatch = useDispatch<AppDispatch>()

  const handleLogout = () => {
    dispatch(logOut())
    router.push('/')
  }

  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon size={24} />
      </SheetTrigger>
      <SheetContent side={'top'} aria-label="menu">
        <SheetHeader>
          <SheetTitle>
            <Logo />
            <Divider label="" className="mt-5" />
          </SheetTitle>
          <div className="grid gap-2.5">
            {isAuth ? (
              <SheetClose asChild>
                <Button variant={'outline'} className="w-full" onClick={handleLogout}>
                  Log out
                </Button>
              </SheetClose>
            ) : (
              <>
                <SheetClose asChild>
                  <Link href={'/login'}>
                    <Button variant={'outline'} className="w-full">
                      Log in
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href={'/signup'}>
                    <Button className="w-full">Sign up</Button>
                  </Link>
                </SheetClose>
              </>
            )}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
