// resources/js/Layouts/AdminLayout.tsx

import React, { ReactNode } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { PageProps, User } from '@/types';

interface AdminLayoutProps {
    header: React.ReactNode;
    children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ header, children }) => {
    return (
        <div>
            <header>{header}</header>
            <main>{children}</main>
        </div>
    );
};


export default AdminLayout;
