import React from 'react';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

type InputWithButtonProps = {
  className?: string;
  type?: string;
  label?: string;
  value: string;
  onChange?: (newValue: string) => void;
};

export function InputWithButton({ className, type = 'text', label, value, onChange }: InputWithButtonProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className={cn('relative w-full', className)}>
      <Input onChange={handleChange} value={value} type={type} placeholder={label} className={cn('h-14 font-medium rounded-full flex-1 w-full pr-28 pl-14', className)} />
      <span className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-muted-foreground/10">
        <Search size={22} className="text-muted-foreground" />
      </span>
    </div >
  );
}
