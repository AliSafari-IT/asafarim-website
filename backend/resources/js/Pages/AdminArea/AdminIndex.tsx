// resources/js/Pages/Admin/Index.tsx

import React from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout/AdminLayout';

interface User {
    name: string;
    email: string;
}

interface Props {
    user: User;
    roles: string[];
    permissions: string[];
}

const AdminIndex: React.FC<Props> = ({ user, roles, permissions }) => {
    return (
        <AdminLayout header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Admin Page</h2>}>
            <Head title="Admin Page" />
            <h1>Welcome, {user.name}!</h1>
            <p>You are assigned to the following roles: {roles.join(', ')}</p>
            <p>Your permissions: {permissions.join(', ')}</p>
        </AdminLayout>
    );
};

export default AdminIndex;
