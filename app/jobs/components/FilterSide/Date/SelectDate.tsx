'use client'

import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup } from "@/components/ui/radio-group"
import DateOption from './date-option'

const SelectDate = () => {
  return (
    <div className='p-4 rounded-lg border w-[200px]'>
      <Label className='uppercase'>Date posted</Label>
      <RadioGroup className='mt-4 ' defaultValue="all">
        <DateOption value='all' label='All times' />
        <DateOption value='last24h' label='Last 24 hours' />
        <DateOption value='last7d' label='Last 7 days' />
        <DateOption value='last30d' label='Last 30 days' />
      </RadioGroup>
    </div>

  )
}

export default SelectDate