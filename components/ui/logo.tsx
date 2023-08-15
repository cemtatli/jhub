import Link from 'next/link'

type LogoProps = {
  slogan?: string
  size?: string
  color?: string
}

const Logo: React.FC<LogoProps> = ({
  size = 24,
  color = '#000',
  slogan = '— find your dream job',
}) => {
  return (
    <Link href="/">
      <span className="flex items-center gap-x-2 tracking-tight text-foreground">
        <svg
          width={size}
          height={size}
          viewBox="0 0 500 500"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="globeOuterOnly">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M257.791 67.791C252.802 62.8025 246.037 60 238.982 60H124.218C100.52 60 88.652 88.652 105.409 105.409L250 250H124.218C100.52 250 88.652 278.652 105.409 295.409L242.209 432.209C247.197 437.198 253.963 440 261.018 440H375.782C399.48 440 411.348 411.348 394.591 394.591L250 250H375.782C399.48 250 411.348 221.348 394.591 204.591L257.791 67.791Z"
                fill={color}
                stroke={color}
                strokeWidth="0"></path>
            </mask>
          </defs>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M257.791 67.791C252.802 62.8025 246.037 60 238.982 60H124.218C100.52 60 88.652 88.652 105.409 105.409L250 250H124.218C100.52 250 88.652 278.652 105.409 295.409L242.209 432.209C247.197 437.198 253.963 440 261.018 440H375.782C399.48 440 411.348 411.348 394.591 394.591L250 250H375.782C399.48 250 411.348 221.348 394.591 204.591L257.791 67.791Z"
            fill={color}
            stroke={color}
            strokeWidth="0"></path>
        </svg>
        <span className="text-2xl font-bold">Jhub</span>
        <span className="hidden text-sm font-semibold md:block">{slogan}</span>
      </span>
    </Link>
  )
}

export { Logo }
