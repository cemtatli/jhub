'use client'

import React, { useState } from 'react'
import { X as CloseIcon } from 'lucide-react'

const Tooltip = () => {
  const [isVisible, setIsVisible] = useState(true)

  const closeTooltip = () => {
    setIsVisible(false)
  }
  return (
    <div className="relative">
      {isVisible && (
        <>
          <span className="hidden h-10 w-full flex-1 items-center justify-center truncate bg-blue-300 font-satoshi font-medium text-white md:flex">
            Discover career opportunities among hundreds of adverts
          </span>
          <CloseIcon
            onClick={closeTooltip}
            className="absolute right-4 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-white hover:scale-110 hover:transition-transform md:block"
          />
        </>
      )}
    </div>
  )
}

export { Tooltip }
