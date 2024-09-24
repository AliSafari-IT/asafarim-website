// Display all users in the database
// resources/js/Pages/AdminArea/Users/Index.tsx
import React, { useEffect, useState } from 'react';
import { Head, usePage } from '@inertiajs/react';
import WrapperLayout from '@/Layouts/WrapperLayout';
import { InertiaPageProps, User } from '@/types';

// You can add more actions later for each user like edit, delete, etc.
import DropdownActions from '@/Components/DropdownActions';
import { userMenuRoutes } from './data/menuRoutes';

interface PageProps extends InertiaPageProps {
    users: User[];
    csrf_token: string;
    flash?: {
        success?: string;
        error?: string;
    };
}

export default function UsersIndex({ users }: PageProps) {
    const { flash, csrf_token } = usePage<PageProps>().props;
    const [showFlash, setShowFlash] = useState(true);

    // Auto-hide flash message after 5 seconds
    useEffect(() => {
        if (flash?.success || flash?.error) {
            const timer = setTimeout(() => setShowFlash(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [flash]);

    return (
        <WrapperLayout title="Users">
            <div className="grid place-items-center overflow-x-auto">
                <Head title="Users" />

                {/* Display Flash Messages */}
                {showFlash && flash?.success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Success!</strong>
                        <span className="block sm:inline">{flash.success}</span>
                    </div>
                )}
                {showFlash && flash?.error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Error!</strong>
                        <span className="block sm:inline">{flash.error}</span>
                    </div>
                )}

                {/* Users Table */}
                <div className="text-sm font-bold my-6">
                    {users?.length === 0 ? <p>No users found</p> : <p>{users?.length} users found</p>}
                </div>

                {users?.length > 0 && (
                    <div className="overflow-x-auto sm:overflow-x-scroll md:overflow-x-visible">
                        <table className="min-w-full bg-white divide-y divide-gray-200 shadow sm:rounded-lg w-full text-left text-sm">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="py-2 px-4 border-b">ID</th>
                                    <th className="py-2 px-4 border-b">Name</th>
                                    <th className="py-2 px-4 border-b">Username</th>
                                    <th className="py-2 px-4 border-b">Email</th>
                                    <th className="py-2 px-4 border-b">Email Verified At</th>
                                    <th className="py-2 px-4 border-b">Created At</th>
                                    <th className="py-2 px-4 border-b">Updated At</th>
                                    <th className="py-2 px-4 border-b">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td className="py-2 px-4 border-b">{user.id}</td>
                                        <td className="py-2 px-4 border-b">{user.name}</td>
                                        <td className="py-2 px-4 border-b">{user.username}</td>
                                        <td className="py-2 px-4 border-b">{user.email}</td>
                                        <td className="py-2 px-4 border-b">
                                            {user.email_verified_at ?? 'Not Verified'}
                                        </td>
                                        <td className="py-2 px-4 border-b">{user.created_at}</td>
                                        <td className="py-2 px-4 border-b">{user.updated_at}</td>
                                        <td className="py-2 px-4 border-b">
                                            <DropdownActions projectId={user.id} routes={userMenuRoutes} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </WrapperLayout>
    );
}
