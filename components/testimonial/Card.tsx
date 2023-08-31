'use client'

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
    <div className="w-96 flex-shrink-0 p-4">
      <div className="rounded-xl border border-gray-200 bg-white p-6 transition duration-200 hover:border-gray-300 hover:bg-opacity-50">
        <div className="-m-2 mb-4 flex flex-wrap justify-between">
          <div className="w-auto p-2">
            <div className="-m-1.5 flex flex-wrap items-center">
              <div className="w-auto p-1.5">
                <Image
                  width={48}
                  height={48}
                  loading="lazy"
                  className="aspect-square rounded-full ring-1 ring-gray-300 ring-offset-2"
                  src={src}
                  alt={name}
                />
              </div>
              <div className="w-auto p-1.5">
                <h3 className="font-semibold tracking-tight">{name}</h3>
                <span className="text-sm tracking-tight">{title}</span>
              </div>
            </div>
          </div>
          <div className="w-auto shrink-0 p-2">
            <TwitterIcon />
          </div>
        </div>
        <p className="text-sm">
          <span>&ldquo;</span>
          {''}
          <span className="font-semibold">@Jhub</span> {''}
          <span>
            {''}
            {comment}&rdquo;
          </span>
        </p>
      </div>
    </div>
  )
}

export default Card