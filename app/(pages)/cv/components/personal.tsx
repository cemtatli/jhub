import { useForm } from 'react-hook-form'
import { useFormState } from './FormContext'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

type TFormValues = {
  full_name: string
  title: string
  email: string
  phone: number
  birthday: string
}

export function Personal() {
  const { onHandleNext, setFormData, formData } = useFormState()
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  })

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }))
    onHandleNext()
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <h2 className="text-2xl font-medium tracking-tighter">Personal 1/3</h2>
      {/* Form */}
      <div className="grid gap-4">
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-col gap-1.5">
            <Label htmlFor="full_name">Fullname</Label>
            <Input
              id="full_name"
              {...register('full_name')}
              placeholder="Cem Tatlı"
              required={true}
            />
          </div>
          <div className="flex w-full flex-col gap-1.5">
            <Label htmlFor="title">Job Title</Label>
            <Input
              id="tittle"
              {...register('title')}
              placeholder="Frontend Developer"
              required={true}
            />
          </div>
          <div className="flex w-full flex-col gap-1.5">
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              {...register('email')}
              placeholder="user@jhub.com"
              required={true}
            />
          </div>
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="adress">Addres</Label>
          <Textarea cols={10} rows={3} placeholder="Optional" id="adress" />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="birthday">Date of birth</Label>
          <Input type="date" id="birthday" {...register('birthday')} />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <Button className="flex flex-1">Next</Button>
      </div>
    </form>
  )
}
