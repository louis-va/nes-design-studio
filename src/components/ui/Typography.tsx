import { ReactNode } from 'react';

interface TypographyProps {
  as: "p" | "span";
  variant: "base" | "small" | "large" | "xl"  | "2xl";
  children: ReactNode;
  className?: string;
}

const Typography = ({ as, variant, children, className='' }: TypographyProps) => {
  const Tag = as 

  switch (variant) {
    case "small":
      className += " text-xs font-normal leading-tight"
      break;
    case "base":
      className += " text-base font-normal leading-normal"
      break;
    case "large":
      className += " text-lg font-semibold leading-tight"
      break;
    case "xl":
      className += " text-xl font-semibold leading-tight"
      break;
    case "2xl":
      className += " text-2xl font-semibold leading-tight"
      break;
  }

  return (
    <Tag className={`${className}`}>
      {children}
    </Tag>
  );
};

export default Typography;