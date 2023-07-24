import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { InputFileProps } from '@/types'
import { UploadCloud } from 'lucide-react'
import { cn } from '@/lib/utils'

export function InputFile({ label, className }: InputFileProps) {
  const [fileUploaded, setFileUploaded] = useState(false)

  const handleFileChange = (e) => {
    e.target.files.length > 0 ? setFileUploaded(true) : setFileUploaded(false)
  }

  return (
    <div className={`group ${fileUploaded ? 'success' : ''}`}>
      <Label
        htmlFor="picture"
        className={cn(
          'flex h-20 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed transition-all group-hover:bg-muted',
          fileUploaded ? 'border-green-600 bg-green-50 text-green-600 group-hover:bg-green-50' : '',
          className,
        )}>
        {fileUploaded ? (
          ''
        ) : (
          <UploadCloud className="h-5 w-5 transition-all duration-150 group-hover:scale-125" />
        )}
        {fileUploaded ? 'Successfully uploaded!' : label}
      </Label>
      <Input id="picture" className="hidden" type="file" onChange={handleFileChange} />
    </div>
  )
}
