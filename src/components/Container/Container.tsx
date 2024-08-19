import classNames from 'classnames';
import { FC } from 'react';

interface ContainerProps {
  className?: string;
  children?: any;
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={classNames('mx-auto w-[95%] max-w-[1360px] py-4', className)}
    >
      {children}
    </div>
  );
};
