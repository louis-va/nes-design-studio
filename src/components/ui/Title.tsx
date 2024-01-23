import { ReactNode } from 'react';

interface TypographyProps {
  as: keyof JSX.IntrinsicElements;
  variant: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
  className?: string;
}

const Title = ({ as, variant, children, className='' }: TypographyProps) => {
  const Tag = as

  switch (variant) {
    case "h1":
      className += " text-2xl"
      break;
    case "h2":
      className += " text-xl"
      break;
    case "h3":
      className += " text-lg"
      break;
    case "h4":
      className += " text-base"
      break;
  }

  return (
    <Tag className={`font-semibold leading-tight ${className}`}>
      {children}
    </Tag>
  );
};

export default Title;