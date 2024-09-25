import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const user = usePage().props.auth.user;
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <h2 className="text-xl font-semibold leading-tight">Hello, {user.name}!</h2>
                        <p className="mt-1 text-sm text-gray-600">
                            This is your dashboard. You are logged in!
                        </p>

                        <div className="m-3 flex-grow justify-around flex justify-items-center">
                            <Link href={route('tasks.create')}> 
                            <SecondaryButton>
                                    Create Tasks
                                </SecondaryButton>
                                </Link>
                            <Link href={route('tasks.index')}>
                                <SecondaryButton>
                                    View Tasks
                                </SecondaryButton>
                            </Link>
                            <PrimaryButton>
                                <Link href={route('profile.edit')}>Edit Profile</Link>

                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
