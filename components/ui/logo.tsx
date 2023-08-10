import Link from 'next/link'

type LogoProps = {
  slogan?: string
  size?: string
  color?: string
}

const Logo: React.FC<LogoProps> = ({ size = 24, color = '#000', slogan = '— find your dream job' }) => {
  return (
    <Link href="/">
      <span className="flex items-center gap-x-2 text-foreground tracking-tight">
        <svg width={size} height={size} viewBox="0 0 418 411" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 225.465L53.2541 114.195C64.204 80.587 100.325 62.22 133.932 73.17L245.203 109.424M179.637 396.288L85.016 327.424C56.4368 306.625 50.1302 266.596 70.929 238.017L139.794 143.396M392.365 294.4L297.632 363.11C269.019 383.863 229.001 377.491 208.248 348.878L139.538 254.145M361.2 60.606L397.272 171.935C408.168 205.56 389.741 241.651 356.116 252.546L244.787 288.619M129.21 18L246.238 18.0953C281.584 18.1241 310.214 46.8012 310.185 82.147L310.09 199.175" stroke={color} strokeWidth="35" />
        </svg>
        <span className="text-2xl font-bold">Jhub</span>
        <span className="hidden text-sm font-semibold md:block">{slogan}</span>
      </span>
    </Link>
  )
}

export { Logo }
