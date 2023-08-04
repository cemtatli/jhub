import { FC } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

interface CareerItemProps {
  description: string
  job: string
  company?: string

}

const CareerItem: FC<CareerItemProps> = ({ job, description, company }) => {
  return (
    <div className="w-full p-1">
      <div className="block p-6 bg-white hover:bg-opacity-50 transform hover:-translate-y-1 rounded-lg transition duration-500">
        <div className="flex flex-wrap items-center justify-between -m-2">
          <div className="w-auto p-2">
            <h3 className="mb-1 font-semibold tracking-tight">{job}</h3>
            <span className="text-gray-600 tracking-tight font-medium">{description} </span>
            <span className="text-gray-600 tracking-tight text-sm">🔹{company} </span>
          </div>
          <div className="w-auto p-2">
            <div className="flex flex-row justify-center">
              <Link href='/' >
                <Button>
                  Check Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareerItem