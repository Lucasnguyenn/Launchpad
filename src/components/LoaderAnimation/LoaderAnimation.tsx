import { isEqual } from 'lodash';
import { memo } from 'react';
import './loader.scss';

function LoaderAnimationComponent() {
  return <span className="loader"></span>;
}

export const LoaderAnimation = memo(LoaderAnimationComponent, isEqual);
