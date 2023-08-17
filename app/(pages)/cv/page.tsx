'use client'
import { EmailForm } from './components/EmailForm'
import { FormProvider, useFormState } from './components/FormContext'
import { PasswordForm } from './components/PasswordForm'
import { Education } from './components/education'

function ActiveStepFormComponent() {
  const { step } = useFormState()
  switch (step) {
    case 1:
      return <Education />
    case 2:
      return <EmailForm />
    case 3:
      return <PasswordForm />
    default:
      return null
  }
}

export default function Cv() {
  return (
    <section className="grid h-fit-screen md:h-fit-screen pt-12">
      <FormProvider>
        <ActiveStepFormComponent />
      </FormProvider>
    </section>
  )
}
