import React from 'react';
import ImageFallback from '@/assets/images/default-fallback-image.png';
import styles from '@styles/components/ui/image.module.scss';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height, ...rest }) => {
  const [currentSrc, setCurrentSrc] = React.useState<string>(src);

  const handleError = () => {
    console.error(`Image not found or failed to load: ${src}`);
    setCurrentSrc(ImageFallback);
  };

  return (
    <figure className={styles.image} style={{ width: width, height: height }}>
      <img
        src={currentSrc}
        alt={alt}
        onError={handleError}
        loading="lazy"
        decoding="async"
        {...rest}
      />
    </figure>
  );
};

export default Image;
