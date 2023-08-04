import { FC } from 'react'
import { TwitterIcon } from '../ui/icons'
import Image from 'next/image'

interface CardProps {
  src: string
  name: string
  title: string
  comment: string
}

const Card: FC<CardProps> = ({ src, title, comment, name }) => {
  return (
    <div className="flex-shrink-0 w-96 p-4">
      <div className="p-6 bg-white hover:bg-opacity-80 border border-gray-200 hover:border-gray-300 rounded-xl transition duration-200">
        <div className="flex flex-wrap justify-between -m-2 mb-4">
          <div className="w-auto p-2">
            <div className="flex flex-wrap items-center -m-1.5">
              <div className="w-auto p-1.5">
                <Image width={48} height={48} loading='lazy' className='rounded-full ring-1 ring-offset-2 ring-gray-300' src={src} alt={name} />
              </div>
              <div className="w-auto p-1.5">
                <h3 className="font-semibold tracking-tight">{name}</h3>
                <span className="text-sm tracking-tight">{title}</span>
              </div>
            </div>
          </div>
          <div className="w-auto p-2 shrink-0">
            <TwitterIcon />
          </div>
        </div>
        <p className='text-sm'>
          <span>&ldquo;</span>{''}
          <span className="text-blue-400">@Jhub</span> {''}
          <span>{""}{comment}&rdquo;</span>
        </p>
      </div>
    </div>
  )
}

export default Card