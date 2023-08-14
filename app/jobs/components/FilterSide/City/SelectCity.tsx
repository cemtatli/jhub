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
import { normalizeString } from "@/utils/normalization"

const cities = [
  { value: 'adana', label: 'Adana' },
  { value: 'adiyaman', label: 'Adıyaman' },
  { value: 'afyon', label: 'Afyon' },
  { value: 'agri', label: 'Ağrı' },
  { value: 'aksaray', label: 'Aksaray' },
  { value: 'amasya', label: 'Amasya' },
  { value: 'ankara', label: 'Ankara' },
  { value: 'antalya', label: 'Antalya' },
  { value: 'ardahan', label: 'Ardahan' },
  { value: 'artvin', label: 'Artvin' },
  { value: 'aydin', label: 'Aydın' },
  { value: 'balikesir', label: 'Balıkesir' },
  { value: 'bartin', label: 'Bartın' },
  { value: 'batman', label: 'Batman' },
  { value: 'bayburt', label: 'Bayburt' },
  { value: 'bilecik', label: 'Bilecik' },
  { value: 'bingol', label: 'Bingöl' },
  { value: 'bitlis', label: 'Bitlis' },
  { value: 'bolu', label: 'Bolu' },
  { value: 'burdur', label: 'Burdur' },
  { value: 'bursa', label: 'Bursa' },
  { value: 'canakkale', label: 'Çanakkale' },
  { value: 'cankiri', label: 'Çankırı' },
  { value: 'corum', label: 'Çorum' },
  { value: 'denizli', label: 'Denizli' },
  { value: 'diyarbakir', label: 'Diyarbakır' },
  { value: 'duzce', label: 'Düzce' },
  { value: 'edirne', label: 'Edirne' },
  { value: 'elazig', label: 'Elazığ' },
  { value: 'erzincan', label: 'Erzincan' },
  { value: 'erzurum', label: 'Erzurum' },
  { value: 'eskisehir', label: 'Eskişehir' },
  { value: 'gaziantep', label: 'Gaziantep' },
  { value: 'giresun', label: 'Giresun' }, s
  { value: 'gumushane', label: 'Gümüşhane' },
  { value: 'hakkari', label: 'Hakkari' },
  { value: 'hatay', label: 'Hatay' },
  { value: 'igdir', label: 'Iğdır' },
  { value: 'isparta', label: 'Isparta' },
  { value: 'istanbul', label: 'Istanbul' },
  { value: 'izmir', label: 'Izmir' },
  { value: 'kahramanmaras', label: 'Kahramanmaraş' },
  { value: 'karabuk', label: 'Karabük' },
  { value: 'karaman', label: 'Karaman' },
  { value: 'kars', label: 'Kars' },
  { value: 'kastamonu', label: 'Kastamonu' },
  { value: 'kayseri', label: 'Kayseri' },
  { value: 'kilis', label: 'Kilis' },
  { value: 'kirikkale', label: 'Kırıkkale' },
  { value: 'kirklareli', label: 'Kırklareli' },
  { value: 'kirsehir', label: 'Kırşehir' },
  { value: 'kocaeli', label: 'Kocaeli' },
  { value: 'konya', label: 'Konya' },
  { value: 'kutahya', label: 'Kütahya' },
  { value: 'malatya', label: 'Malatya' },
  { value: 'manisa', label: 'Manisa' },
  { value: 'mardin', label: 'Mardin' },
  { value: 'mersin', label: 'Mersin' },
  { value: 'mugla', label: 'Muğla' },
  { value: 'mus', label: 'Muş' },
  { value: 'nevsehir', label: 'Nevşehir' },
  { value: 'nigde', label: 'Niğde' },
  { value: 'ordu', label: 'Ordu' },
  { value: 'osmaniye', label: 'Osmaniye' },
  { value: 'rize', label: 'Rize' },
  { value: 'sakarya', label: 'Sakarya' },
  { value: 'samsun', label: 'Samsun' },
  { value: 'sanliurfa', label: 'Şanlıurfa' },
  { value: 'siirt', label: 'Siirt' },
  { value: 'sinop', label: 'Sinop' },
  { value: 'sirnak', label: 'Şırnak' },
  { value: 'sivas', label: 'Sivas' },
  { value: 'tekirdag', label: 'Tekirdağ' },
  { value: 'tokat', label: 'Tokat' },
  { value: 'trabzon', label: 'Trabzon' },
  { value: 'tunceli', label: 'Tunceli' },
  { value: 'usak', label: 'Uşak' },
  { value: 'van', label: 'Van' },
  { value: 'yalova', label: 'Yalova' },
  { value: 'yozgat', label: 'Yozgat' },
  { value: 'zonguldak', label: 'Zonguldak' },
];


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
