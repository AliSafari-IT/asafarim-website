import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx'; // Import clsx for better class management

export function LinkButton({ className = '', disabled, children, onClick, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    // Ensure that the onClick handler is provided
    if (!onClick) {
        throw new Error('LinkButton component must have an onClick handler');
    }

    return (
        <button
            {...props}
            onClick={onClick}
            className={clsx(
                'inline-flex items-center px-2 py-1 text-blue-600 hover:text-blue-500 active:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold text-sm transition ease-in-out duration-150',
                disabled && 'opacity-50 cursor-not-allowed', // Reduced opacity and cursor style for disabled state
                className
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
