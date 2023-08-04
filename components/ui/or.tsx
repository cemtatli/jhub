import { cn } from '@/lib/utils'

export function Divider({ label = 'or', className }: any) {
  return (
    <span className={cn('my-px flex h-px w-full items-center justify-center bg-foreground/20', className)}>
      <span className="bg-background px-4 text-sm font-medium uppercase text-foreground/80 tracking-tight">{label}</span>
    </span>
  )
}
