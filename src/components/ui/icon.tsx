import { IconType } from '@/types';
import React from 'react';

export interface IconProps {
  name: IconType | string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, size = 24 }) => {
  const icons = import.meta.glob('@/assets/icons/*', { eager: true });
  const icon = (
    icons[`/src/assets/icons/icon-${name}.svg`] as { default: string }
  )?.default;

  if (!icon) {
    console.error(`Icon ${name} not found`);
    return null;
  }

  return <img src={icon} alt={`${name} icon`} width={size} height={size} />;
};

export default Icon;
