import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string;
    error?: string;
    helpText?: string;
    as?: 'input' | 'textarea';
}

const Input: React.FC<InputProps> = ({
    label,
    error,
    helpText,
    id,
    disabled,
    as = 'input',
    className = '',
    ...props
}) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
    const errorId = `${inputId}-error`;
    const helpId = `${inputId}-help`;

    const describedBy = [
        error ? errorId : null,
        helpText ? helpId : null
    ].filter(Boolean).join(' ');

    const sharedClasses = `
    w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border-2 rounded-xl text-sm transition-all outline-none text-slate-900 dark:text-slate-100
    ${error
            ? 'border-red-500 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-900/30'
            : 'border-slate-200 dark:border-slate-800 focus:border-primary focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/30'
        }
    ${disabled ? 'opacity-50 cursor-not-allowed bg-slate-100 dark:bg-slate-800' : 'hover:border-slate-300 dark:hover:border-slate-700'}
  `;

    const Component = as as any;

    return (
        <div className={`flex flex-col gap-1.5 w-full ${className}`}>
            <label
                htmlFor={inputId}
                className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
            >
                {label}
            </label>

            <Component
                id={inputId}
                disabled={disabled}
                aria-invalid={!!error}
                aria-describedby={describedBy || undefined}
                className={sharedClasses}
                {...props}
            />

            {error && (
                <span id={errorId} className="text-xs font-medium text-red-600 animate-fadeInUp">
                    {error}
                </span>
            )}

            {helpText && !error && (
                <span id={helpId} className="text-xs text-slate-500 dark:text-slate-400">
                    {helpText}
                </span>
            )}
        </div>
    );
};

export default Input;
