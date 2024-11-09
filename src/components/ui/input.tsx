import React from 'react';
import Typography from './typography';
import styles from '@styles/components/ui/input.module.scss';
import { classNames } from '@/utils';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  name: string;
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  maxLength?: number;
  showCount?: boolean;
  prefix?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  error,
  icon = null,
  prefix = null,
  maxLength = 255,
  showCount = false,
  ...props
}) => {
  const [count, setCount] = React.useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(e.target.value.length);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <div className={styles['input-container']}>
      <div className={styles['input-header']}>
        {label && (
          <label htmlFor={name}>
            <Typography.Text size="small" strong>
              {label}
            </Typography.Text>
          </label>
        )}
        {error && (
          <Typography.Text size="small" type="danger">
            {error}
          </Typography.Text>
        )}
      </div>

      <div className={styles['input-wrapper']}>
        {prefix && <span className={styles.prefix}>{prefix}</span>}
        <input
          id={name}
          name={name}
          className={classNames(
            styles.input,
            error && styles.error,
            !!prefix && styles['with-prefix']
          )}
          {...props}
          onChange={handleChange}
          maxLength={maxLength}
        />
        {icon && <span className={styles.icon}>{icon}</span>}
      </div>
      <div className={styles['input-text-helper']}>
        {showCount && (
          <Typography.Text size="small">
            {maxLength - count} characters left
          </Typography.Text>
        )}
      </div>
    </div>
  );
};

export default Input;
