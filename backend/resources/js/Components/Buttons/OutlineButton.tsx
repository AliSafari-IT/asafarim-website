import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx'; // Import clsx for better class management

export function OutlineButton({ className = '', disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={clsx(
                'inline-flex items-center px-4 py-2 border border-red-600 rounded-md font-semibold text-xs text-red-600 uppercase tracking-widest bg-transparent hover:bg-red-600 hover:text-white active:bg-red-700 active:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150',
                disabled && 'opacity-50 cursor-not-allowed', // Adjusted for better visibility and UX
                className
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
