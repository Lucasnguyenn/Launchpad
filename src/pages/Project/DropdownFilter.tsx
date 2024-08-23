import { Popover, PopoverButton } from '@headlessui/react';
import Icon from 'components/Icon';                                     
export const DropdownFilter = () => {
  return (
    <Popover className="relative">
      <PopoverButton className="h-[42px] min-w-[142px] rounded-xl flex items-center justify-center gap-4 border border-solid border-[--white-70] bg-inherit overflow-hidden text-xl text-[--white-70]">
        <Icon
          name="chevron-down"
          className="text-[--white-70] text-xl h-5 w-5"
        />
        Filter
      </PopoverButton>
    </Popover>
  );
};
