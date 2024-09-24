// resources/js/Pages/NotFound.tsx

import WrapperLayout from '@/Layouts/WrapperLayout';
import { User } from '@/types';
import React, { useEffect, useState } from 'react';

export default function NotFound (props: { auth: any; }) {
    const [authenticatedUser, setAuthenticatedUser] = useState<User>({} as User);
    useEffect(() => {
        setAuthenticatedUser(props.auth);
        //console.log("Not Found page", authenticatedUser);
    }, [authenticatedUser]);
    return (
        <WrapperLayout  title="Page NotFound">
        <div className="container mx-auto p-4 text-center">
            <h1 className="text-4xl font-bold my-12">Page Not Found</h1>
            <p className="mt-4 ">We could not find what you were looking for.</p>
            <p className="mt-2">Please contact the owner of the site that linked you to the original URL and let them know their link is broken.</p>
        </div>
        </WrapperLayout>
    );
};
