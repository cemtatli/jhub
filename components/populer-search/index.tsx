'use client'

import React, { useState } from 'react';
import { PopularSearchesBadge } from '@/components/populer-search/PopularSearchesBadge';
import { InputWithButton } from '@/components/shared/InputWithButton';


export const PopularSearches = () => {
  const [selected, setSelected] = useState<string>('');

  const handleBadgeClick = (searchValue: string) => {
    setSelected(searchValue);
  };
  const handleInputChange = (newValue: string) => {
    setSelected(newValue);
  };

  return (
    <div className="flex flex-col items-center justify-center relative gap-y-5 mt-16 md:mt-24">
      <span className="text-3xl font-semibold">Popular Searches</span>
      <div className='flex relative w-full max-w-screen-sm'>
        <InputWithButton onChange={handleInputChange} value={selected} label={'Search'} />
      </div>
      <div className="flex-items-center justify-center flex flex-wrap gap-2.5">
        <PopularSearchesBadge onClick={handleBadgeClick} />
      </div>
    </div>
  );
};
