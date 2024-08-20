import React from 'react';

import classNames from 'classnames';

interface TextProps {
  children: React.ReactNode;
  type?:
    | 'heading0-bold'
    | 'heading1-extra-bold'
    | 'heading1-bold'
    | 'heading2-bold'
    | 'heading3-bold'
    | 'heading3-semi-bold'
    | 'heading4-bold'
    | 'heading4-semi-bold'
    | 'heading5-medium'
    | 'heading5-bold'
    | 'heading6-bold'
    | 'title1-semi-bold'
    | 'title2-semi-bold'
    | 'body1'
    | 'body2'
    | 'caption1-semi-bold'
    | 'caption2'
    | 'specific-link'
    | undefined;
  font?:
    | 'montserratFont'
    | 'helveticaFont'
    | 'nexaFont';
  disabled?: boolean;
  state?: null | 'disable';
  className?: string;
  onClick?: () => void;
  element?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

export const Text: React.FC<TextProps> = ({
  type,
  font,
  disabled = false,
  className = '',
  onClick = () => {},
  children,
  element = 'p',
}) => {
  const classes = classNames(type, font, { 'text-disable': disabled }, className);

  return React.createElement(
    element,
    {
      className: classes,
      onClick,
    },
    React.createElement(React.Fragment, undefined, children)
  );
};
