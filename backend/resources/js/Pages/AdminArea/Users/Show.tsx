import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import WrapperLayout from '@/Layouts/WrapperLayout';
import { User, InertiaPageProps } from '@/types';
import { Link } from '@fluentui/react';
import { InfoButton, ReplyButton, SuccessButton } from '@/Components/Buttons';

interface PageProps extends InertiaPageProps {
    user: User;
}

export default function Show() {
    const { user } = usePage<PageProps>().props;

    return (
        <WrapperLayout title={`User Details - ${user.name}`}>
            <div className="container mx-auto my-6 p-4">
                <Head title={`User Details - ${user.name}`} />
                
                <h1 className="text-2xl font-bold mb-4">User Details</h1>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="py-2 px-4 text-left">Field</th>
                                <th className="py-2 px-4 text-left">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2 font-semibold">ID</td>
                                <td className="border px-4 py-2">{user.id}</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-semibold">Name</td>
                                <td className="border px-4 py-2">{user.name}</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-semibold">Username</td>
                                <td className="border px-4 py-2">{user.username}</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-semibold">Email</td>
                                <td className="border px-4 py-2">{user.email}</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-semibold">Email Verified At</td>
                                <td className="border px-4 py-2">
                                    {user.email_verified_at ? user.email_verified_at : 'Not Verified'}
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-semibold">Created At</td>
                                <td className="border px-4 py-2">{user.created_at}</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-semibold">Updated At</td>
                                <td className="border px-4 py-2">{user.updated_at}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex items-center justify-around m-6">
                        <ReplyButton onClick={() => window.history.back()}>Back to Users</ReplyButton>
                        <InfoButton onClick={() => window.location.href = `${user.id}/edit`}>Edit User</InfoButton>
                    </div>
                </div>
            </div>
        </WrapperLayout>
    );
}
