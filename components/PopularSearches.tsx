import React from 'react'
import { PopularSearchesBadge } from '@/components/PopularSearchesBadge'
import { InputWithButton } from '@/components/shared/InputWithButton'

export const PopularSearches = () => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center gap-y-5">
      <span className="self-start text-2xl font-semibold">Popular Searches</span>
      <InputWithButton className="w-full" label={'Search'} />
      <div className="flex-items-center flex  flex-wrap gap-2.5 ">
        <PopularSearchesBadge />
      </div>
    </div>
  )
}
