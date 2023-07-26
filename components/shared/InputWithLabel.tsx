'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff } from 'lucide-react'
import { InputWithLabelProps } from '@/types'
import { cn } from '@/lib/utils'

export function InputWithLabel({ className, label, type, id, name, value, ...props }: InputWithLabelProps) {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className={cn('grid w-full items-center gap-1.5', className)}>
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          {...props}
          type={showPassword ? 'text' : type}
          id={id}
          name={name}
          value={value}
          placeholder={label}
          className={type === 'password' ? 'pr-10' : 'pr-3'}
        />
        {type === 'password' && (
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        )}
      </div>
    </div>
  )
}
