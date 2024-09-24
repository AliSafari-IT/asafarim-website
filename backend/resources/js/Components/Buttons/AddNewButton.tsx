import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx'; // Import clsx for class management

export function AddNewButton({
    type = 'button',
    className = '',
    disabled,
    children,
    color,
    style: customStyle = {},
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    const style = { backgroundColor: 'bg-green-500', ...customStyle };

    return (
        <button
            {...props}
            type={type}
            className={clsx(
                'inline-flex items-center px-4 py-2 border border-gray-300 bg-green-500 rounded-full font-semibold text-sm text-white uppercase tracking-wide shadow-md hover:bg-green-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 active:bg-green-700 transition-transform transform hover:scale-105 active:scale-95 ease-in-out duration-150',
                disabled && 'opacity-50 cursor-not-allowed',
                className
            )}
        >
            {children ?? (
                <>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={style}
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        fill="none"
                        className="mr-2"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                            fill="white"
                            d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-4H7v-2h4V7h2v4h4v2h-4v4z"
                        />
                    </svg>
                    Add New
                </>
            )}
        </button>
    );
}
