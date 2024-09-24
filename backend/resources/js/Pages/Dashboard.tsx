import { Head, Link, usePage } from '@inertiajs/react';
import { User } from '@/types';
import GuestLayout from '@/Layouts/GuestLayout';
import Welcome from './Welcome';
import { useEffect, useState } from 'react';

export default function Dashboard() {
   const authenticatedUser = usePage().props.auth;
    return (
        !authenticatedUser ?
            <GuestLayout
                key={route().current()}
            >
                <Head title="Authentication" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">You're NOT logged in!</div>
                        </div>
                        <div className="p-6 text-gray-900 text-right">
                            <a href={route('login')}>Login here</a>
                        </div>
                    </div>
                </div>
            </GuestLayout> :
            <Welcome key={route().current()} />

    );
}
