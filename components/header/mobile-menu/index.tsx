import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Link from 'next/link'
import { MenuIcon, ScrollText, SearchCodeIcon } from 'lucide-react'
import { Logo } from '@/components/ui/logo'
import { Divider } from '@/components/ui/divider'
import { buttonVariants } from '@/components/ui/button'

export const MobileMenu = () => {
  return (
    <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-50 transition-colors hover:bg-gray-100 md:hidden">
      <Sheet>
        <SheetTrigger>
          <MenuIcon size={24} />
        </SheetTrigger>
        <SheetContent side={'top'}>
          <SheetHeader>
            <SheetTitle>
              <Logo />
              <Divider className="mt-5" />
            </SheetTitle>
            <nav className="grid gap-2.5">
              <SheetClose asChild>
                <Link
                  href={'/login'}
                  className={buttonVariants({
                    variant: 'outline',
                  })}>
                  Log in
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href={'/signup'}
                  className={buttonVariants({
                    variant: 'default',
                  })}>
                  Sign up
                </Link>
              </SheetClose>
            </nav>
            <div className="flex w-full flex-1 flex-col gap-2.5 pt-8">
              <SheetClose asChild>
                <Link
                  href={'/cv'}
                  className={buttonVariants({
                    variant: 'secondary',
                  })}>
                  <ScrollText className="mr-2 h-[18px] w-[18px]" /> My resumes
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href={'/jobs'}
                  className={buttonVariants({
                    variant: 'secondary',
                  })}>
                  <SearchCodeIcon className="mr-2 h-[18px] w-[18px]" /> Job Searches
                </Link>
              </SheetClose>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
