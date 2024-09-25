// backend\resources\js\Wrapper\UserNavbar.tsx
import React, { useEffect } from "react";

import {
    Navbar,
    IconButton,
    Collapse,
} from "@material-tailwind/react";

import { Link, usePage } from "@inertiajs/react";
import { solidIcons } from "@/utils/icons";
import { DeveloperBoard24Regular, SignOut24Regular } from '@fluentui/react-icons';
import ApplicationLogo from "@/Components/ApplicationLogo";
import { ProfileMenu } from "./ProfileMenu";
import { NavList } from "./NavList";

export function UserNavbar() {
    const auth = usePage().props.auth as any;
    console.log("UserNavbar: auth → ", { auth });
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
    const { csrf_token } = usePage().props;

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    return (
        <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6"
            onPointerEnterCapture={() => { }}
            onPointerLeaveCapture={() => { }}
            placeholder={""}>
            <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
                <ApplicationLogo />
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden"
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                    placeholder={""}
                >
                    <solidIcons.Bars2Icon className="h-6 w-6" />
                </IconButton>

                {(auth && (auth?.name || auth?.user)) ? (
                    <div className="flex items-center mr-2 gap-1 lg:flex lg:gap-2">
                        <Link
                            href={route('dashboard')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            title="Dashboard"
                        >
                            <DeveloperBoard24Regular />
                        </Link>
                        <form method="POST" action={route('logout')}>
                            {/* CSRF Token for protection */}
                            <input type="hidden" name="_token" value={csrf_token as string} />
                            <button type="submit" title="Sign out">
                                <SignOut24Regular className="w-6 h-6" />
                            </button>
                        </form>

                        <ProfileMenu />

                    </div>

                ) : (
                    <>
                        <Link
                            href={route('login')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Log in
                        </Link>
                        <Link
                            href={route('register')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Register
                        </Link>
                    </>
                )}

            </div>
            <Collapse open={isNavOpen} children={<NavList />} className="overflow-scroll" />

        </Navbar>
    );
}
