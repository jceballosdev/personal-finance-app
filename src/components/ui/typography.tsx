import React from 'react';
import { classNames } from '@/utils';
import styles from '@/styles/components/ui/typography.module.scss';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  strong?: boolean;
  italic?: boolean;
  align?: 'left' | 'center' | 'right' | 'justify';
}

const Typography: React.FC<TypographyProps> & {
  Title: React.FC<TitleProps>;
  Paragraph: React.FC<ParagraphProps>;
  Text: React.FC<TextProps>;
} = ({ children }) => {
  return <>{children}</>;
};

export interface TitleProps extends TypographyProps {
  level: number | 1 | 2 | 3;
}

const Title: React.FC<TitleProps> = ({
  children,
  level,
  italic = false,
  align = 'left',
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const style = classNames(
    styles.title,
    styles[`h${level}`],
    italic && styles.italic,
    styles[align]
  );

  return <Tag className={style}>{children}</Tag>;
};

export interface ParagraphProps extends TypographyProps {
  size: 'normal' | 'small';
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  align = 'left',
  size = 'normal',
}) => {
  const style = classNames(styles.paragraph, styles[align], styles[size]);
  return <p className={style}>{children}</p>;
};

export interface TextProps extends TypographyProps {
  underline?: boolean;
  size?: 'normal' | 'small';
  type?: 'success' | 'warning' | 'danger' | 'default';
}

const Text: React.FC<TextProps> = ({
  children,
  italic = false,
  strong = false,
  underline = false,
  align = 'left',
  size = 'normal',
  type = 'default',
}) => {
  const style = classNames(
    styles.text,
    italic && styles.italic,
    underline && styles.underline,
    strong && styles.strong,
    styles[align],
    styles[size],
    styles[type]
  );

  return <span className={style}>{children}</span>;
};

Typography.Title = Title;
Typography.Paragraph = Paragraph;
Typography.Text = Text;

export default Typography;
