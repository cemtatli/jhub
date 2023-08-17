'use client'

import React, { useState } from 'react'
import { PopularSearchesBadge } from '@/components/populer-search/badge'
import { InputWithButton } from '@/components/ui/shared/InputWithButton'

export const PopularSearches = () => {
  const [selected, setSelected] = useState<string>('')

  const handleBadgeClick = (searchValue: string) => {
    setSelected(searchValue)
  }
  const handleInputChange = (newValue: string) => {
    setSelected(newValue)
  }

  return (
    <div className="relative flex flex-col items-center justify-center gap-y-5 py-24 lg:pb-16">
      <h2 className="mb-5 text-5xl font-medium tracking-tighter text-center ">Popular Searches</h2>
      <div className="relative flex w-full max-w-screen-sm">
        <InputWithButton onChange={handleInputChange} value={selected} label={'Search'} />
      </div>
      <div className="flex-items-center flex flex-wrap justify-center gap-2.5">
        <PopularSearchesBadge onClick={handleBadgeClick} />
      </div>
    </div>
  )
}
