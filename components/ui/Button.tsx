import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary';
  isLoading?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isLoading = false, 
  fullWidth = false,
  className = '',
  disabled,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-sans font-bold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0";
  
  // Primary = Burnt Orange (Action)
  // Secondary = Burgundy
  const variants = {
    primary: "bg-brand-primary hover:bg-[#A64500] text-white shadow-lg shadow-brand-primary/30 focus:ring-brand-primary border border-brand-primary",
    secondary: "bg-brand-secondary hover:bg-[#360303] text-white shadow-md shadow-brand-secondary/30 focus:ring-brand-secondary",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/10 focus:ring-brand-primary",
    ghost: "text-brand-secondary hover:bg-brand-secondary/5 hover:text-brand-primary",
  };

  // Ajuste responsivo: menor no mobile (text-base, py-2.5), maior no desktop (md:text-lg, md:py-3)
  const sizes = "py-3 px-6 text-sm md:py-4 md:px-8 md:text-base";

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes} ${widthClass} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 md:h-5 md:w-5 animate-spin" />
          Carregando...
        </>
      ) : children}
    </button>
  );
};