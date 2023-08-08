'use client'

import React, { useState } from 'react';
import { PopularSearchesBadge } from '@/components/populer-search/search-pill';
import { InputWithButton } from '@/components/ui/shared/InputWithButton';


export const PopularSearches = () => {
  const [selected, setSelected] = useState<string>('');

  const handleBadgeClick = (searchValue: string) => {
    setSelected(searchValue);
  };
  const handleInputChange = (newValue: string) => {
    setSelected(newValue);
  };

  return (
    <div className="flex flex-col items-center justify-center relative gap-y-5 py-24 lg:pb-16">
      <h2 className="mb-5 text-4xl tracking-tighter font-medium">Popular Searches</h2>
      <div className='flex relative w-full max-w-screen-sm'>
        <InputWithButton onChange={handleInputChange} value={selected} label={'Search'} />
      </div>
      <div className="flex-items-center justify-center flex flex-wrap gap-2.5">
        <PopularSearchesBadge onClick={handleBadgeClick} />
      </div>
    </div>
  );
};
