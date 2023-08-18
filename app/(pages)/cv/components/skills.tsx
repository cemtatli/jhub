import { useForm } from 'react-hook-form'
import { useFormState } from './FormContext'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'

type TFormValues = {
  html: string
}

export function Skills() {
  const router = useRouter()
  const [isCreated, setCreated] = useState(false)
  const { setFormData, formData, onHandleBack } = useFormState()
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  })

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }))
    setCreated(true)
  }
  if (isCreated) {
    console.log(formData, 'data')
    router.push('/')
    toast.success('Succesfully !')
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <h2 className="text-2xl font-medium tracking-tighter">Skills 3/3</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="html">HTML</Label>
          <Slider defaultValue={[50]} max={100} step={10} />
        </div>
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="css">CSS</Label>
          <Slider defaultValue={[50]} max={100} step={10} />
        </div>
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="js">JavaScript</Label>
          <Slider defaultValue={[50]} max={100} step={10} />
        </div>
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="react">React</Label>
          <Slider defaultValue={[50]} max={100} step={10} />
        </div>
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="next">Next.js</Label>
          <Slider defaultValue={[50]} max={100} step={10} />
        </div>
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="scss">SASS/SCSS</Label>
          <Slider defaultValue={[50]} max={100} step={10} />
        </div>
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="node">Node.js</Label>
          <Slider defaultValue={[50]} max={100} step={10} />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <Button className="w-full" type="button" onClick={onHandleBack} variant={'outline'}>
          Back
        </Button>
        <Button className="w-full">Create a resume</Button>
      </div>
    </form>
  )
}
