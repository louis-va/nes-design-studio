interface IconProps {
  name: 'arrow-r';
  className?: string;
}

const Icon = ({ name, className='' }: IconProps) => {

  const props = {
    className: `${className} inline-block`
  }
  
  switch(name) {
    case 'arrow-r':
      return (
        <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5 8C14.5 11.5898 11.5898 14.5 8 14.5C4.41025 14.5 1.5 11.5898 1.5 8C1.5 4.41025 4.41025 1.5 8 1.5C11.5898 1.5 14.5 4.41025 14.5 8ZM11.1125 7.609L8.89 5.03725L8.10975 5.66275L9.2925 7.25425L4.5 7.5V8.5L9.2925 8.74575L8.10975 10.3372L8.89 10.9628L11.1125 8.391L11.4505 8L11.1125 7.609Z" fill="currentColor"/>
        </svg>
        
      );
  }
};

export default Icon;