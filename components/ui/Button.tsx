import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center justify-center";
  
  const variants = {
    primary: "bg-accent hover:bg-accent-hover text-white dark:bg-accent-dark dark:hover:bg-accent",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-white dark:border-accent-dark dark:text-accent-dark dark:hover:bg-accent-dark dark:hover:text-white"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}