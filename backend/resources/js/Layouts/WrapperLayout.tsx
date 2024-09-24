import React, { ReactNode } from 'react';
import { UserNavbar } from '../Wrapper/UserNavbar';
import { Head, usePage } from '@inertiajs/react';
import './WrapperLayout.css';
import UserStatus from './UserStatus';
import { User } from '@/types';

interface WrapperLayoutProps {
    children: ReactNode;
    title?: string;
}

const WrapperLayout: React.FC<WrapperLayoutProps> = ({ children, title }) => {

    return (
        <div className="bg-white text-black/50 dark:bg-black dark:text-white/50 min-h-screen flex flex-col ">
            <UserNavbar />
            {title && <Head title={title} />}
            <header className="header px-8">
                {title && <h1 className="text-3xl font-bold">{title}</h1>}
            </header>
            <main className="content flex-grow">
                {children}
            </main>

            <footer className="footer border-t dark:border-gray-700 p-4">
                <p>&copy; {new Date().getFullYear()} ASafariM. All rights reserved.</p>
                <UserStatus   />
            </footer>
        </div>
    );
};

export default WrapperLayout;
