import React from 'react';

interface CardProps {
    title?: string;
    variant?: 'elevated' | 'outlined' | 'filled';
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({
    title,
    variant = 'elevated',
    children,
    className = ''
}) => {
    const variants = {
        elevated: 'bg-white shadow-md border border-slate-100 hover:shadow-xl',
        outlined: 'bg-transparent border-2 border-slate-200 hover:border-slate-300',
        filled: 'bg-slate-50 border border-transparent'
    };

    return (
        <div className={`p-6 rounded-2xl transition-all duration-300 ${variants[variant]} ${className}`}>
            {title && (
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {title}
                </h3>
            )}
            <div className="text-slate-600 text-sm leading-relaxed text-left">
                {children}
            </div>
        </div>
    );
};

export default Card;
