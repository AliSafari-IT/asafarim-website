// Create a new user
// resources/js/Pages/AdminArea/Users/Create.tsx

import React, { useEffect } from 'react';
import WrapperLayout from '@/Layouts/WrapperLayout';
import { Head, useForm } from '@inertiajs/react';
import { User } from '@/types';
import InputError from '@/Components/InputError';
import { Button, Input } from '@fluentui/react-components';

interface PageProps {
    auth: User;
    [key: string]: any;
}

export default function Create({ auth }: PageProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
   
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.users.store'));
    };

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);
    
    return (
        <WrapperLayout title="Create User">
            <Head title="Create User" />
            <div className="container mx-auto my-6 p-4">
                <h1 className="text-2xl font-bold mb-4">Create User</h1>
                <form onSubmit={submit}>
                    <div className="mb-6">
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            autoComplete="name"
                            required
                            className="mt-1 block w-full"
                            placeholder="Name"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mb-6">
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            required
                            className="mt-1 block w-full"
                            placeholder="Email"
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mb-6">
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            autoComplete="new-password"
                            required
                            className="mt-1 block w-full"
                            placeholder="Password"
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mb-6">
                        <Input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            autoComplete="new-password"
                            required
                            className="mt-1 block w-full"
                            placeholder="Confirm Password"
                        />
                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end">
                        <Button type="submit">Create User</Button>
                    </div>  
                </form>
            </div>
        </WrapperLayout>
    );
}