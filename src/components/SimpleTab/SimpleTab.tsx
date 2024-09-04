import React from 'react';

import classNames from 'classnames';
import { Text } from 'components/Text';

export type TabButton = {
  label: string;
  value: string;
};

interface TabProps {
  list: TabButton[];
  children?: React.ReactNode;
  className?: string;
  value?: string;
  onChange: (value: TabButton) => void;
}

export const Tab = ({
  children,
  list,
  className,
  value,
  onChange,
}: TabProps) => {
  return (
    <div
      className={classNames(
        'flex items-center justify-center gap-8 w-full py-6',
        className
      )}
    >
      {list.map((item, index) => (
        <button key={item.value} onClick={() => onChange(item)}>
          <Text
            type="heading4-semi-bold"
            className={classNames(
              'text-white !font-medium',
              value === item.value && 'text-primary'
            )}
          >
            {item.label}
          </Text>
        </button>
      ))}
      {children}
    </div>
  );
};

interface TabItemProps {
  children: React.ReactNode;
  className?: string;
  value?: string;
}

export const TabItem = ({ children, className, value }: TabItemProps) => {
  return (
    <div id={value} className={classNames('w-full hidden', className)}>
      {children}
    </div>
  );
};
