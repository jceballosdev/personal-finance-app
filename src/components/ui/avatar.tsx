import { AvatarType } from '@/types';
import styles from '@styles/components/ui/avatar.module.scss';
import React from 'react';
import avatarPlaceholder from '@/assets/images/avatar-placeholder.png';

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: AvatarType | string;
  user: string;
  size?: 'sm' | 'lg';
  shape?: 'circle' | 'square';
}

const Avatar: React.FC<AvatarProps> = ({
  name,
  user,
  size = 'md',
  shape = 'circle',
  ...props
}) => {
  const [hasError, setHasError] = React.useState(false);

  const loadAvatarPath = (fileName: string) => {
    const avatars = import.meta.glob('@/assets/images/avatars/*', {
      eager: true,
    });
    return (
      avatars[`/src/assets/images/avatars/${fileName}.jpg`] as {
        default: string;
      }
    )?.default;
  };

  const handleAvatarError = () => {
    console.error(`Avatar not found or failed to load: ${name}`);
    setHasError(true);
  };

  const avatar = loadAvatarPath(name);
  const finalSrc = hasError || !avatar ? avatarPlaceholder : avatar;

  return (
    <figure className={`${styles.avatar} ${styles[size]} ${styles[shape]}`}>
      <img
        src={finalSrc}
        alt={`Avatar of ${user}`}
        {...props}
        onError={handleAvatarError}
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
};

export default Avatar;
