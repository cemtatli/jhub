import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'
import { Logo } from '@/components/shared/Logo'
import { Divider } from '@/components/shared/Divider'
import { Button } from '@/components/ui/button'
import { JobsBadge } from '@/components/JobBadge'

export const MobileMenu = () => {
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
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
