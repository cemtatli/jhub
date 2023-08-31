import { FC } from 'react'
import { buttonVariants } from '../ui/button'
import Link from 'next/link'

interface CareerItemProps {
  description: string
  job: string
  company: string
}

const CareerItem: FC<CareerItemProps> = ({ job, description, company }) => {
  return (
    <div className="w-full p-1">
      <div className="block transform rounded-lg bg-white p-6 transition duration-500 hover:-translate-y-1 hover:bg-opacity-50">
        <div className="-m-2 flex flex-wrap items-center justify-center sm:justify-between">
          <div className="p-2 text-center sm:text-start">
            <h3 className="mb-1 font-semibold tracking-tight">{job}</h3>
            <span className="text-ellipsis font-medium">{description} </span>
            <span className="text-sm">🔹{company}</span>
          </div>
          <Link href="/" className={buttonVariants()}>
            Check Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CareerItem
