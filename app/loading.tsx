import { Loader } from 'lucide-react'

const Loading = () => {
  return (
    <section className="flex h-fit-screen items-center justify-center">
      <Loader className="h-5 w-5 animate-spin text-gray-400" />
    </section>
  )
}
export default Loading
