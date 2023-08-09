import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'
import { Logo } from '@/components/ui/logo'
import { Divider } from '@/components/ui/divider'
import { Button } from '@/components/ui/button'

export const MobileMenu = () => {
  return (
    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-50 transition-colors hover:bg-gray-100 md:hidden">
      <Sheet>
        <SheetTrigger>
          <MenuIcon size={24} />
        </SheetTrigger>
        <SheetContent side={'top'} aria-label="menu">
          <SheetHeader>
            <SheetTitle>
              <Logo />
              <Divider className="mt-5" />
            </SheetTitle>
            <nav className="grid gap-2.5">
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
            </nav>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
