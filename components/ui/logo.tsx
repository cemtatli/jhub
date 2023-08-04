import Link from 'next/link'
import { Boxes } from 'lucide-react'

type LogoProps = {
  slogan?: string
  label?: string
  size?: string
}

const Logo: React.FC<LogoProps> = ({ size = 24, label = 'Jhub', slogan = '— find your dream job' }) => {
  return (
    <Link href="/">
      <span className="flex items-center gap-x-2 text-foreground tracking-tight">
        <Boxes stroke="currentColor" width={size} height={size} strokeWidth={1.75} />
        <span className="text-2xl font-bold">{label}</span>
        <span className="hidden text-sm font-semibold md:block">{slogan}</span>
      </span>
    </Link>
  )
}

export { Logo }
