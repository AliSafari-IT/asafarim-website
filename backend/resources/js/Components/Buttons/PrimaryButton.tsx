import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx'; // Import clsx for better class management

export function PrimaryButton({
    className = '',
    disabled,
    children,
    onClick,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={clsx(
                'inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-bold text-sm uppercase tracking-wide rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800 transition ease-in-out duration-200',
                disabled && 'opacity-50 cursor-not-allowed', // Better opacity and cursor style for disabled state
                className
            )}
            disabled={disabled}
            onClick={onClick}

        >
            {children}
        </button>
    );
}
