import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { InputFileProps } from '@/types'

export function InputFile({ label }: InputFileProps) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor="picture">{label}</Label>
      <Input
        id="picture"
        className="cursor-pointer transition-all hover:bg-foreground/20"
        type="file"
      />
    </div>
  )
}
