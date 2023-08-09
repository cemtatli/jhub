import { Loader } from 'lucide-react'

const Loading = () => {
  return (
    <section className="flex h-fit-screen items-center justify-center">
      <Loader className="h-6 w-6 animate-spin text-zinc-500" />
    </section>
  )
}
export default Loading
