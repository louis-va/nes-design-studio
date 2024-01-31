import { ReactNode } from 'react';

interface TitleProps {
  as: "h1" | "h2" | "h3" | "h4";
  variant: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
  className?: string;
}

const Title = ({ as, variant, children, className='' }: TitleProps) => {
  const Tag = as

  switch (variant) {
    case "h1":
      className += " text-2xl font-semibold"
      break;
    case "h2":
      className += " text-xl font-semibold"
      break;
    case "h3":
      className += " text-lg font-normal"
      break;
    case "h4":
      className += " text-base font-normal"
      break;
  }

  return (
    <Tag className={`leading-tight ${className}`}>
      {children}
    </Tag>
  );
};

export default Title;