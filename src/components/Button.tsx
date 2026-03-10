import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

    const variants = {
        primary: 'bg-primary text-white hover:opacity-90 focus:ring-purple-200 shadow-md hover:shadow-lg',
        secondary: 'bg-secondary text-white hover:opacity-90 focus:ring-pink-200 shadow-md hover:shadow-lg',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-200 shadow-md hover:shadow-lg',
        ghost: 'bg-transparent text-primary hover:bg-purple-50 focus:ring-purple-100'
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-6 py-2.5 text-sm',
        lg: 'px-8 py-3.5 text-base'
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
