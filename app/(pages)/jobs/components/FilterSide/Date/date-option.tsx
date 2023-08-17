import { Label } from '@/components/ui/label'
import { RadioGroupItem } from '@/components/ui/radio-group'
import { FC } from 'react'

interface DateOptionProps {
  value: string,
  label: string
}

const DateOption: FC<DateOptionProps> = ({ value, label }) => {
  return (
    <div className="flex items-center space-x-2">
      <RadioGroupItem value={value} id={value} />
      <Label htmlFor={value}>{label}</Label>
    </div>
  )
}

export default DateOption