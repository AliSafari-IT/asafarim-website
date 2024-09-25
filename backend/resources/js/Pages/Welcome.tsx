import { Head, usePage } from '@inertiajs/react';
import { PageProps } from '@/types';
import WrapperLayout from '@/Layouts/WrapperLayout';
import HomepageFeatures from './components/HomeFeatures';
import CookieConsent from "react-cookie-consent";

export default function Welcome({ laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    const { auth } = usePage().props as any;
    console.log("Welcome: auth", auth);

    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <WrapperLayout title="Welcome">
            <Head title="Welcome" />
            
            {auth ? (
                <div className="py-12">
                    <h1>Welcome {auth?.name}!</h1>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">You're logged in!</div>
                        </div>
                    </div>
                </div>
            ) : (
                <section className="py-12">
                    <div className="container max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="sm:flex sm:flex-col md:flex md:flex-row space-y-4 sm:space-y-0 md:space-x-4">
                            <HomepageFeatures />
                        </div>
                    </div>
                </section>
            )}
            <div className="grid place-items-center">
                <h1 className="text-8xl font-bold my-12">Main Content of Welcome Page</h1>
                
            </div>
            <CookieConsent
                enableDeclineButton
                flipButtons
                debug={false}
                buttonText="Accept Cookies"
                declineButtonText="Decline"
                onDecline={() => {
                    console.log("User declined cookies");
                }}
                onAccept={() => {
                    console.log("User accepted cookies");
                }}
            >
                This website uses cookies to enhance your browsing experience, personalize content, and analyze our traffic. You can accept or decline cookies by clicking the appropriate button.
            </CookieConsent>

        </WrapperLayout>
    );
}
