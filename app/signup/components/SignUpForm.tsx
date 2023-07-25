'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { UserSignUpForm } from './UserSignUpForm'
import { EmployerSignUpForm } from './EmployerSignUpForm'

export const SignUpForm = () => {
  return (
    <Tabs defaultValue="user" className="min-h-[675px] w-full max-w-lg lg:px-4 xl:px-0">
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
