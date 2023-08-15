'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { FC } from 'react'

interface TypeOptionsProps {
  label: string
  value: string
}

const TypeOptions: FC<TypeOptionsProps> = ({ label, value }) => {
  return (
    <div className="flex items-center justify-start gap-4">
      <Checkbox id={value} value={value} />
      <Label htmlFor={value} className="cursor-pointer">
        {label}
      </Label>
    </div>
  )
}

export default TypeOptions
