import { cn } from '@/lib/utils'
import { InputWithButtonProps } from '@/types'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export function InputWithButton({ className, type = 'text', label }: InputWithButtonProps) {
  return (
    <div className={cn('relative flex max-w-full items-center', className)}>
      <Input type={type} placeholder={label} className="h-12 rounded-full px-5 pl-14" />
      <span className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 transform items-center justify-center rounded-full bg-muted-foreground/10">
        <Search size={20} className="text-muted-foreground" />
      </span>
    </div>
  )
}
