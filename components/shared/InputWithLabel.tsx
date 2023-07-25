'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { InputWithLabelProps } from '@/types'
import { Eye, EyeOff } from 'lucide-react'

export function InputWithLabel({ label, type, id, name, value, onChange }: InputWithLabelProps) {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          type={showPassword ? 'text' : type}
          id={id}
          name={name}
          value={value}
          placeholder={label}
          className={type === 'password' ? 'pr-10' : 'pr-3'} // default input px-3
        />
        {type === 'password' && (
          // eye icon hidden/show
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
