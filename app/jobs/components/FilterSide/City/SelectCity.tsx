"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Check, ArrowDownWideNarrow } from "lucide-react"
import { cities } from "../../../../../mocks/Cities"
import { normalizeString } from "@/utils/normalization"


export function SelectCity() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={!open}
          variant={'outline'}
          className="justify-between w-[200px] rounded-lg outline-none"
        >
          {value
            ? cities.find((city) => normalizeString(city.value) === normalizeString(value))?.label || "Unknown"
            : "Location"}
          <ArrowDownWideNarrow className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 max-h-60 h-fit overflow-auto">
        <Command>
          <CommandInput placeholder="Search City" className="h-9 sticky top-0" />
          <CommandEmpty className="h-10 flex items-center justify-center text-sm">City not found !</CommandEmpty>
          <CommandGroup>
            {cities.map((city) => (
              <CommandItem
                key={city.label}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                {city.label}
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === city.value ? "opacity-100" : "opacity-0"
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