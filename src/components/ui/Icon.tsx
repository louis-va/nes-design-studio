interface IconProps {
  name: 'arrow-r' | 'check';
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
    case 'check':
      return (
        <svg {...props} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 1.6875C4.96153 1.6875 1.6875 4.96153 1.6875 9C1.6875 13.0385 4.96153 16.3125 9 16.3125C13.0385 16.3125 16.3125 13.0385 16.3125 9C16.3125 4.96153 13.0385 1.6875 9 1.6875ZM8.15625 11.8125L5.0625 8.71875L5.625 7.875L8.15625 9.5625L12.0817 6.1875L12.9375 7.03125L8.15625 11.8125Z" fill="currentColor"/>
        </svg>
      );
  }
};

export default Icon;