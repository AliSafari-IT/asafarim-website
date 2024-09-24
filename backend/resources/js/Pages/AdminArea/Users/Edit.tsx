// resources/js/Pages/AdminArea/Users/Edit.tsx
import React, { useEffect } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import WrapperLayout from '@/Layouts/WrapperLayout';
import { InertiaPageProps, User } from '@/types';

interface PageProps extends InertiaPageProps {
    user: User;
}

export default function Edit() {
    const { user } = usePage<PageProps>().props;

    const { data, setData,  post, processing, errors } = useForm({
        name: user.name || '',
        username: user.username || '',
        email: user.email || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('users.update', user.id));  // Use PUT method for updating user
    };

    return (
        <WrapperLayout title={`Edit User - ${user.name}`}>
            <Head title={`Edit User - ${user.name}`} />

            <div className="max-w-2xl mx-auto my-10">
                <h1 className="text-2xl font-bold mb-6">Edit User</h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        />
                        {errors.name && <div className="text-red-500 text-sm mt-2">{errors.name}</div>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={data.username}
                            onChange={(e) => setData('username', e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        />
                        {errors.username && <div className="text-red-500 text-sm mt-2">{errors.username}</div>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                        />
                        {errors.email && <div className="text-red-500 text-sm mt-2">{errors.email}</div>}
                    </div>

                    <div className="flex items-center justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            disabled={processing}
                        >
                            {processing ? 'Updating...' : 'Update User'}
                        </button>
                    </div>
                </form>
            </div>
        </WrapperLayout>
    );
}
