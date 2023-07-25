'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { CheckboxWithTextProps } from '@/types'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export function CheckboxWithText({
  id = 'terms',
  label = 'Accept terms and conditions',
  text = 'You agree to our Terms of Service and Privacy Policy.',
  name,
  props,
}: CheckboxWithTextProps) {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox {...props} name={name} id={id} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </label>
        {/*         <p className="text-sm text-muted-foreground">
          <Popover>
            <PopoverTrigger className="hover:underline">
              <div>{text}</div>
            </PopoverTrigger>
            <PopoverContent aria-label="privacy_policy" align="center" className="text-sm">
              Place content for the popover here.
            </PopoverContent>
          </Popover>
        </p> */}
      </div>
    </div>
  )
}
