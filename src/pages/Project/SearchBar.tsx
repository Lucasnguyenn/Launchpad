import { Input } from '@headlessui/react';
import Icon from 'components/Icon';
import React from 'react';

export const SearchBar = () => {
  return (
    <div className="h-[42px] w-full rounded-lg flex items-center gap-4 border border-solid border-[--white-70] bg-inherit overflow-hidden">
      <Icon name="search-md" className="text-[--white-70] text-xl h-5 w-5 ml-4" />
      <Input
        className="h-full w-full mr-4 focus:border-none focus:outline-none focus-visible:outline-none text-xl text-[--white-70]"
        placeholder="Search name or trait"
      />
    </div>
  );
};
