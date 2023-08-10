'use client'

import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


const SelectDate = () => {
  return (
    <div className='p-4 rounded-lg border w-[200px]'>
      <Label className='uppercase'>Date posted</Label>
      <RadioGroup className='mt-4 ' defaultValue="all">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="all" id="all" />
          <Label htmlFor="all">All times</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="last24h" id="last24h" />
          <Label htmlFor="last24h">Last 24 hours</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="last7d" id="last7d" />
          <Label htmlFor="last7d">Last 7 days</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="last30d" id="last30d" />
          <Label htmlFor="last30d">Last 30 days</Label>
        </div>
      </RadioGroup>
    </div>

  )
}

export default SelectDate