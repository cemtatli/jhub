import { useForm } from 'react-hook-form'
import { useFormState } from './FormContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

type TFormValues = {
  school: string
  city: string
  degree: string
  started: string
  ended: string
}

export function Education() {
  const { onHandleNext, setFormData, formData, onHandleBack } = useFormState()
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  })

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }))
    onHandleNext()
  }

  return (
    <form className="flex w-full flex-1 flex-col gap-4" onSubmit={handleSubmit(onHandleFormSubmit)}>
      <h2 className="text-2xl font-medium tracking-tighter">Education</h2>
      {/* Form */}
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 flex w-full flex-1  flex-col gap-4 md:flex-row">
          <div className="flex w-full flex-col gap-1.5">
            <Label htmlFor="school">School</Label>
            <Input id="school" {...register('school')} placeholder="School" required={true} />
          </div>
          <div className="flex w-full flex-col gap-1.5">
            <Label htmlFor="degree">Degree</Label>
            <Input id="degree" {...register('degree')} placeholder="Degree" required={true} />
          </div>
          <div className="flex w-full flex-col gap-1.5">
            <Label htmlFor="school">City</Label>
            <Input id="city" {...register('city')} placeholder="City" required={true} />
          </div>
        </div>
        <div className="col-span-2 grid w-full gap-1.5">
          <Label htmlFor="message">Explanation</Label>
          <Textarea
            cols={10}
            rows={5}
            placeholder="You must specify the educational information completely and in chronological order. You can also add your degrees, if any, to the Additional information field."
            id="message"
          />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="started">Start Date</Label>
          <Input type="date" id="started" {...register('started')} placeholder="started" />
        </div>
        <div className="grid w-full gap-1.5">
          <Label htmlFor="ended">End Date</Label>
          <Input type="date" id="ended" {...register('ended')} placeholder="ended" />
        </div>
      </div>
      <div className="mt-4 flex w-full items-center justify-between gap-4 ">
        <Button className="w-full" onClick={onHandleBack}>
          Back
        </Button>
        <Button className="w-full">Next</Button>
      </div>
    </form>
  )
}
