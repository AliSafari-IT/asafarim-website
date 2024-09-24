import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx'; // Import clsx for better class management

export function ArrowReplyButton({
    type = 'button',
    className = '',
    disabled,
    children,
    color,
    style: customStyle = {},
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    const style = { backgroundColor: 'bg-gray-100', ...customStyle };

    return (
        <button
            {...props}
            type={type}

            className={clsx(
                'inline-flex items-center px-4 py-2  border border-gray-300 bg-gray-100 rounded-full font-semibold text-sm text-white uppercase tracking-wide shadow-md hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 active:bg-blue-700 transition-transform transform hover:scale-105 active:scale-95 ease-in-out duration-150',
                disabled && 'opacity-50 cursor-not-allowed', // Opacity and cursor style for disabled state
                className
            )}
        >
            {children ?? <svg xmlns="http://www.w3.org/2000/svg" style={style} height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" /></svg>}
        </button>
    );
}