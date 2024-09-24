import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import WrapperLayout from '@/Layouts/WrapperLayout';

const Logout: React.FC = () => {
           // Check if user is logged in
           let isLoggedIn = false;
           const auth = usePage().props.auth;
           if (auth) {
               isLoggedIn = true;
               console.log('Logout: User is logged in', auth);
           }
    return (
        <WrapperLayout title="Logged Out">
            <div className="container mx-auto text-center mt-12">
                <h1 className="text-4xl font-bold mb-6">You have been logged out</h1>
                <p className="mb-8">Thank you for visiting ASafariM. You can now choose what to do next:</p>
                <div className="space-y-4">
                    <Link href={route('home')} className="text-blue-500 hover:underline">Go to Home</Link><br/>
                    <Link href={route('contact')} className="text-blue-500 hover:underline">Contact Us</Link><br/>
                    <Link href={route('login')} className="text-blue-500 hover:underline">Log In Again</Link>
                </div>
            </div>
        </WrapperLayout>
    );
};

export default Logout;
