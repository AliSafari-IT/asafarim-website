import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx'; // Import clsx for better class management

export function ReplyButton({
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
                'inline-flex items-center px-4 py-2 bg-green-500 border border-transparent rounded-full font-medium text-sm text-white uppercase tracking-wide shadow-md hover:bg-green-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 active:bg-green-700 transition-transform transform hover:scale-105 active:scale-95 ease-in-out duration-150',
                disabled && 'opacity-50 cursor-not-allowed',
                className
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
