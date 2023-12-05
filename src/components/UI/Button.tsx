import { cn } from '@/lib/utils';
import { FC } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ className, children }) => {
  return <button className={cn('bg-primary-blue px-8 py-3 text-lg font-medium rounded-full hover:opacity-90 transition-colors duration-200', className)}>
    {children}
  </button>;
};

export default Button;
