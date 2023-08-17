'use client'
import { Personal } from './components/personal'
import { FormProvider, useFormState } from './components/FormContext'
import { Skills } from './components/skills'
import { Education } from './components/education'

function ActiveStepFormComponent() {
  const { step } = useFormState()
  switch (step) {
    case 1:
      return <Personal />
    case 2:
      return <Education />
    case 3:
      return <Skills />
    default:
      return null
  }
}

export default function Cv() {
  return (
    <section className="grid h-fit-screen pt-12 md:h-fit-screen">
      <FormProvider>
        <ActiveStepFormComponent />
      </FormProvider>
    </section>
  )
}
