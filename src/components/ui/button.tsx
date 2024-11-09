import React from 'react';
import Typography from './typography';
import Slot from './slot';
import { classNames } from '@/utils';
import styles from '@styles/components/ui/button.module.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destroy' | 'pagination';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  squared?: boolean;
  current?: boolean;
  loading?: boolean;
  asChild?: boolean;
  width?: string | number;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon,
  iconPosition = 'left',
  loading,
  asChild = false,
  squared = false,
  current = false,
  width = 'auto',
  ...props
}) => {
  const Component = asChild ? Slot : 'button';

  const buttonClasses = classNames(
    styles[`${variant}`],
    squared && styles.squared,
    current && styles.current,
    variant === 'pagination' && props.disabled && styles.disabled
  );

  return (
    <Component
      style={{ width: width }}
      className={buttonClasses}
      {...props}
      disabled={loading || props.disabled}
    >
      {icon && iconPosition === 'left' && icon}
      {children && (
        <Typography.Text
          strong={!['tertiary', 'pagination'].includes(variant)}
          size="normal"
        >
          {children}
        </Typography.Text>
      )}
      {icon && iconPosition === 'right' && icon}
    </Component>
  );
};

export default Button;
