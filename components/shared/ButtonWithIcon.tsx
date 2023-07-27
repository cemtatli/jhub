import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { BackIcon, GitHubIcon, GoogleIcon, LoadingIcon } from '@/components/ui/icons'
import { ButtonWithIconProps } from '@/types'

function ButtonWithIcon({ size = 24, text, variant, className, children, onClick, props }: ButtonWithIconProps) {
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
    default:
      selectedIcon = null
  }

  return (
    <Button
      {...props}
      onClick={onClick}
      className={cn(
        'transition-all hover:bg-red-500',
        variant === 'loading' ? 'animate-pulse bg-gradient-to-l from-zinc-950 to-zinc-900' : '',
        className,
      )}>
      {selectedIcon}
      {text}
      {children}
    </Button>
  )
}

export { ButtonWithIcon }
