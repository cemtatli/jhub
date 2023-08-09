import { FC } from 'react'

interface FeatureItemProps {
  title: string
  description: string
}

const FeatureItem: FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <div className="w-full md:w-1/3 p-5">
      <div className="max-w-xs">
        <h3 className="mb-4 text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-gray-600 tracking-tight">{description}</p>
      </div>
    </div>
  )
}

export default FeatureItem