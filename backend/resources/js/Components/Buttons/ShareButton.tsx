import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx'; // Import clsx for better class management

export function ShareButton({
    type = 'button',
    className = '',
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            type={type}
            className={clsx(
                'inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-sm text-white tracking-wide shadow-md hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 active:bg-blue-700 transition-transform transform hover:scale-105 active:scale-95 ease-in-out duration-150',
                disabled && 'opacity-50 cursor-not-allowed', // Opacity and cursor styles for disabled state
                className
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
