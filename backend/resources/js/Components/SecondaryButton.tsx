import { ButtonHTMLAttributes } from 'react';

const SecondaryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
    const { disabled, className } = props;
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-gray-100 border border-transparent rounded-md font-semibold hover:bg-gray-200 focus:outline-none focus:border-indigo-700 focus:ring focus:ring-indigo-200 disabled:opacity-25 transition ${disabled && 'opacity-25'
                } ` + className
            }
        >
            {children}
        </button>
    );
};

export default SecondaryButton;
