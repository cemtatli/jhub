'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { UserSignUpForm } from './UserSignUpForm'
import { EmployerSignUpForm } from './EmployerSignUpForm'

export const SignUpForm = () => {
  return (
    <Tabs defaultValue="user" className="mt-10 h-full w-full max-w-lg md:max-h-[70vh]">
      <TabsList className="rounded-lg transition w-full">
        <TabsTrigger className='rounded-lg flex-1' value="user">User</TabsTrigger>
        <TabsTrigger className='rounded-lg flex-1' value="employer">Employer</TabsTrigger>
      </TabsList>
      <TabsContent value="user">
        <UserSignUpForm />
      </TabsContent>
      <TabsContent value="employer">
        <EmployerSignUpForm />
      </TabsContent>
    </Tabs>
  )
}
