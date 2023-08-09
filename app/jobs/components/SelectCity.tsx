"use client"

import * as React from "react"
import { cities } from "@/mocks/Cities"
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
import { ArrowDownAZ, Check } from "lucide-react"

const SelectCity = () => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  console.log(value)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between rounded-lg "
        >
          {value
            ? cities.find((cities) => cities.value === value)?.label
            : "Select a city"}
          <ArrowDownAZ className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command className="max-h-60 min-h-fit" >
          <CommandInput placeholder="Search Cities" className="h-9" />
          <CommandEmpty>City not found.</CommandEmpty>
          <CommandGroup className="overflow-auto">
            {cities.map(city => (
              <CommandItem
                key={city.value}
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

export default SelectCity