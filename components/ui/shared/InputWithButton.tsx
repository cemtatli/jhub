import React from 'react';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '../button';

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
      <Input onChange={handleChange} value={value} type={type} placeholder={label} className={cn('h-14 font-medium rounded-full text-base flex-1 w-full px-14 pr-7', className)} />
      <span className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 transform text-base items-center justify-center rounded-full bg-muted-foreground/10">
        <Button className='bg-transparent hover:bg-transparent' onClick={() => console.log('clicked !')}>  <Search size={22} className="text-muted-foreground" /></Button>
      </span>
    </div >
  );
}
