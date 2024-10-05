import { Tab, TabGroup, TabList, TabPanels } from '@headlessui/react';
import classNames from 'classnames';

interface ICustomTabs {
  data?: any;
  children?: any;
  className?: string;
  selectedIndex?: number;
  setSelectedIndex?: (index: number) => void;
}

export default function CustomTabs({
  data,
  children,
  className,
  selectedIndex,
  setSelectedIndex,
}: ICustomTabs) {
  return (
    <TabGroup
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
      className={classNames({ [className as string]: !!className })}
    >
      <TabList className="flex md:gap-[80px] gap-8 justify-center">
        {data.map(({ name }) => (
          <Tab
            key={name}
            className="md:text-[26px] text-xl font-semibold text-white data-[selected]:text-[#369CC6] data-[hover]:text-[#369CC6]"
          >
            {name}
          </Tab>
        ))}
      </TabList>
      <TabPanels className="mt-10">{children}</TabPanels>
    </TabGroup>
  );
}
