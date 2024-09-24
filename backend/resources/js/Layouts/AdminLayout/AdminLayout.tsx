// resources/js/Layouts/AdminLayout.tsx

import React, { ReactNode } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';

interface Props {
    children: ReactNode;
}

interface User {
    name: string;
}

interface SharedProps extends PageProps{
    auth: {
        user: User;
    };
}

const AdminLayout: React.FC<Props> = ({ children }) => {
    const { auth } = usePage<SharedProps>().props; // Typed Page props for auth user

    return (
        <div className="admin-layout">
            <header>
                <h1>Admin Dashboard</h1>
                <nav>
                    <Link href={route('admin.index')}>Admin Home</Link>
                    <Link href="/">Back to Main Site</Link>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>Logged in as: {auth.user.name}</p>
            </footer>
        </div>
    );
};

export default AdminLayout;
