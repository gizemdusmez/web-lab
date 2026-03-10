import React, { useState } from 'react';

interface AlertProps {
    variant?: 'info' | 'success' | 'warning' | 'error';
    title: string;
    children: React.ReactNode;
    dismissible?: boolean;
    className?: string;
}

const Alert: React.FC<AlertProps> = ({
    variant = 'info',
    title,
    children,
    dismissible = false,
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    const variants = {
        info: 'bg-blue-50 border-blue-200 text-blue-800',
        success: 'bg-green-50 border-green-200 text-green-800',
        warning: 'bg-amber-50 border-amber-200 text-amber-800',
        error: 'bg-red-50 border-red-200 text-red-800'
    };

    return (
        <div
            role="alert"
            className={`relative p-4 rounded-xl border flex flex-col gap-1 shadow-sm ${variants[variant]} ${className} animate-fadeInUp`}
        >
            <div className="flex items-center justify-between">
                <span className="font-bold text-sm tracking-wide uppercase">
                    {title}
                </span>
                {dismissible && (
                    <button
                        onClick={() => setIsVisible(false)}
                        className="hover:opacity-70 transition-opacity p-1 cursor-pointer"
                        aria-label="Kapat"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </div>
            <div className="text-sm opacity-90 text-left">
                {children}
            </div>
        </div>
    );
};

export default Alert;
