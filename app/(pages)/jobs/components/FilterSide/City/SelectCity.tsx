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

export function SelectCity() {
  const [open, setOpen] = React.useState<boolean>(false)
  const [value, setValue] = React.useState<string>('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={!open}
          variant={'outline'}
          className="w-full justify-between rounded-lg outline-none">
          {value
            ? cities.find((city) => normalizeString(city.value) === normalizeString(value))
                ?.label || 'Unknown'
            : 'Location'}
          <ArrowDownWideNarrow className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="x h-fit max-h-60 w-80 overflow-auto p-0 md:w-60">
        <Command>
          <CommandInput placeholder="Search City" className="sticky top-0 h-9" />
          <CommandEmpty className="flex h-10 items-center justify-center text-sm">
            City not found !
          </CommandEmpty>
          <CommandGroup>
            {cities.map((city) => (
              <CommandItem
                key={city.label}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue)
                  setOpen(false)
                }}>
                {city.label}
                <Check
                  className={cn(
                    'ml-auto h-4 w-4',
                    value === city.value ? 'opacity-100' : 'opacity-0',
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
