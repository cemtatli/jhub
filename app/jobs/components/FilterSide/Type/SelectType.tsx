'use client'

import React from 'react'
import { Label } from '@/components/ui/label'
import { RadioGroup } from '@/components/ui/radio-group'
import TypeOptions from './type-options'

const SelectDate = () => {
  return (
    <div className="w-full rounded-lg border p-4">
      <Label className="uppercase">Work Preference</Label>
      <div className="mt-4 flex flex-col gap-2">
        <TypeOptions label="Remote" value="remote" />
        <TypeOptions label="Hybrid" value="hybrid" />
        <TypeOptions label="Office" value="office" />
      </div>
    </div>
  )
}

export default SelectDate
