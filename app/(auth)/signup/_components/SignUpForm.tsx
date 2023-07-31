'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { UserSignUpForm } from './UserSignUpForm'
import { EmployerSignUpForm } from './EmployerSignUpForm'

export const SignUpForm = () => {
  return (
    <Tabs defaultValue="user" className="h-full max-h-[585px] w-full max-w-lg md:max-h-[70vh]">
      <TabsList>
        <TabsTrigger value="user">User</TabsTrigger>
        <TabsTrigger value="employer">Employer</TabsTrigger>
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
