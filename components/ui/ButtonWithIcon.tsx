import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { BackIcon, GitHubIcon, GoogleIcon, LoadingIcon } from '@/components/ui/icons'
import { ButtonWithIconProps } from '@/types'

function ButtonWithIcon({ size = 24, text, variant, className, onClick, props }: ButtonWithIconProps) {
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
        'transition-all hover:bg-sky-600',
        variant === 'loading' ? 'animate-pulse bg-gradient-to-l from-gray-950 via-sky-900 to-sky-500/80' : '',
        className,
      )}>
      {selectedIcon}
      {text}
    </Button>
  )
}

export { ButtonWithIcon }
