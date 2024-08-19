import {
  DetailedHTMLProps,
  HTMLAttributes,
  MouseEvent,
  forwardRef,
} from 'react';
import { IconNames } from './Icon.type';
import classNames from 'classnames';

interface IconProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  name?: IconNames;
  size?: number;
  color?: string;
  className?: string;
  onClick?: (e: MouseEvent<HTMLSpanElement>) => void;
  ref?: any;
}

const Icon = (
  { name, size = 20, color, className, style, ...rest }: IconProps,
  ref: any
) => {
  return (
    <span
      ref={ref}
      className={classNames(`icon-${name}`, className)}
      style={{ fontSize: size, color, ...style }}
      {...rest}
    />
  );
};

export default forwardRef<any, IconProps>(Icon);