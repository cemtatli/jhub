import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { BackIcon, GitHubIcon, GoogleIcon, LoadingIcon } from '@/components/ui/icons'
import { ButtonWithIconProps } from '@/types'

export function ButtonWithIcon({
  size = 24,
  label = '',
  variant = '',
  className,
  children,
  onClick,
}: ButtonWithIconProps) {
  let selectedIcon = null
  switch (variant) {
    case 'google':
      selectedIcon = <GoogleIcon size={size} />
      break
    case 'github':
      selectedIcon = <GitHubIcon size={size} />
      break
    case 'back':
      selectedIcon = <BackIcon size={size} />
      break
    case 'loading':
      selectedIcon = <LoadingIcon size={size} />
      break
  }

  return (
    <Button onClick={onClick} className={cn('transition-all hover:bg-red-500', className)}>
      {selectedIcon}
      {label}
      {children}
    </Button>
  )
}
