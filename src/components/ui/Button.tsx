import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button = ({ text, icon, variant="primary", disabled=false, onClick, className='' }: ButtonProps) => {  

  switch (variant) {
    case "primary":
      className += ` font-normal text-white ${disabled ? 'bg-red/30' : 'bg-red'}`;
      break;
    case "secondary":
      className += ` font-normal text-black ${disabled ? 'bg-white-muted/50' : 'bg-white-muted'}`;
      break;
  }

  return (
    <button 
      type="button"
      disabled={disabled} 
      onClick={onClick} 
      className={`rounded-full inline-flex gap-2 px-4 py-2 items-center${className}`}
    >
      {text}
      {(icon)?(icon):''}
    </button>
  );
};

export default Button;