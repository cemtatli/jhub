'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Check, ArrowDownWideNarrow } from 'lucide-react'
import { normalizeString } from '@/utils/normalization'
import { cities } from '@/mocks/Cities'
import { Button } from '@/components/ui/button'
import { popularSearchs } from '@/mocks/PopularSearch'

export function SelectPosition() {
  const [open, setOpen] = React.useState<boolean>(false)
  const [value, setValue] = React.useState<string>('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={!open}
          variant={'outline'}
          className="w-full justify-between truncate rounded-lg outline-none">
          {value
            ? popularSearchs.find((city) => normalizeString(city.data) === normalizeString(value))
                ?.title || 'Unknown'
            : 'Position'}
          <ArrowDownWideNarrow className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="x h-fit max-h-60 w-80 overflow-auto p-0 md:w-60">
        <Command>
          <CommandInput placeholder="Select Position" className="sticky top-0 h-9" />
          <CommandEmpty className="flex h-10 items-center justify-center text-sm">
            Position not found !
          </CommandEmpty>
          <CommandGroup>
            {popularSearchs.map((item) => (
              <CommandItem
                key={item.title}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue)
                  setOpen(false)
                }}>
                {item.title}
                <Check
                  className={cn(
                    'ml-auto h-4 w-4',
                    value === item.data ? 'opacity-100' : 'opacity-0',
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
