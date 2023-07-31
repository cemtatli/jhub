'use client'

import React, { useState } from 'react';
import { PopularSearchesBadge } from '@/components/populer-search/PopularSearchesBadge';
import { InputWithButton } from '@/components/shared/InputWithButton';
import { Button } from '../ui/button';

export const PopularSearches = () => {
  const [selected, setSelected] = useState<string>('');

  const handleBadgeClick = (searchValue: string) => {
    setSelected(searchValue);
  };
  const handleInputChange = (newValue: string) => {
    setSelected(newValue);
  };

  return (
    <div className="flex flex-col items-center justify-center relative gap-y-5 mt-24">
      <span className="text-2xl font-semibold">Popular Searches</span>
      <div className='flex relative w-full max-w-screen-md'>
        <InputWithButton onChange={handleInputChange} value={selected} label={'Search'} />
        <Button className='absolute hidden sm:flex right-2 top-1/2 h-10 px-6 -translate-y-1/2 transform items-center justify-center rounded-full'>Search</Button>
      </div>
      <div className="flex-items-center justify-center flex flex-wrap gap-2.5">
        <PopularSearchesBadge onClick={handleBadgeClick} />
      </div>
    </div>
  );
};
