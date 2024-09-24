import { ButtonHTMLAttributes } from "react";
import clsx from 'clsx'; // Import clsx for better class management

export function TertiaryButton({
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
                'inline-flex items-center px-5 py-3 bg-yellow-100 border border-gray-800 rounded-full font-bold text-base text-purple-900 uppercase tracking-wide shadow-lg hover:bg-yellow-300 hover:border-yellow-500 hover:text-yellow-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 active:bg-yellow-400 transition-transform transform hover:scale-105 active:scale-95 ease-in-out duration-200',
                disabled && 'opacity-10 cursor-not-allowed', 
                className
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
