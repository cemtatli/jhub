import React from 'react';
import { Badge } from '@/components/ui/badge';
import { popularSearchs } from '@/mocks/populer-search';

type PopularSearchesBadgeProps = {
  onClick: (searchValue: string) => void;
};

export const PopularSearchesBadge: React.FC<PopularSearchesBadgeProps> = ({ onClick }) => {
  const handleBadgeClick = (title: string) => {
    onClick(title);
  };

  return (
    <>
      {popularSearchs.map(({ title }) => (
        <Badge
          onClick={() => handleBadgeClick(title)}
          className="w-fit !shrink-0 cursor-pointer p-1.5 px-3 transition-all duration-300 hover:bg-gray-100"
          variant={'outline'}
          key={title}
        >
          {title}
        </Badge>
      ))}
    </>
  );
};
