import React from 'react';
import { Badge } from '@/components/ui/badge';
import { popularSearchs } from '@/mocks/PopularSearch';
import Link from 'next/link';

type PopularSearchesBadgeProps = {
  onClick: (searchValue: string) => void;
};

export const PopularSearchesBadge: React.FC<PopularSearchesBadgeProps> = ({ onClick }) => {
  const handleBadgeClick = (title: string) => {
    onClick(title);
  };

  return (
    <>
      {popularSearchs.map(({ title, slug, count }) => (
        <Link key={title} href={`/?search=${slug}`}>
          <Badge
            onClick={() => handleBadgeClick(title)}
            className="w-fit !shrink-0 z-10 bg-white tracking-tight text-sm cursor-pointer p-1.5 px-3 transition-all duration-300 hover:bg-gray-50"
            variant={'outline'}
            key={title}
          >
            {title} ({count })
          </Badge>
        </Link >
      ))}
    </>
  );
};
