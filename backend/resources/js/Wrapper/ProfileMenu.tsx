import ChevronDownSVGIcon from "@/Components/SVGIcons/ChevronDownSVGIcon";
import { User } from "@/types";
import { createPath } from "@/utils/createPath";
import { Button } from "@material-tailwind/react";
import { usePage, useForm } from "@inertiajs/react";
import { Menu, MenuHandler, Avatar, Typography, MenuList, MenuItem } from "@material-tailwind/react";
import React from "react";
import { profileMenuItems } from "./data/profileMenuItems";

export function ProfileMenu() {
    const auth = usePage().props.auth as any;
    console.log("ProfileMenu: auth → ", { auth });

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { post } = useForm();
    const closeMenu = () => setIsMenuOpen(false);

    const openMenu = () => setIsMenuOpen(true);

    const goto = (path: string) => {
        closeMenu();
        window.location.href = path;
    };
    const handleLogout = (event: React.FormEvent) => {
        event.preventDefault();
        post(route('logout')); // Perform a POST request to the logout route
    };
    const { csrf_token } = usePage().props;

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                    onClick={() => setIsMenuOpen((current) => !current)}
                    ripple={false}
                    onPointerDown={(e) => {
                        e.preventDefault();
                    }}
                    placeholder={""}
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt={auth.name}
                        className="border border-gray-900 p-0.5"
                        src={auth.avatar || createPath("img/AvatarAli.png")}
                        onPointerEnter={(e) => { }}
                        onPointerLeave={(e) => { }}
                        onPointerDown={(e) => {
                            e.preventDefault();
                        }}
                        placeholder={""}
                        sizes="lg"

                        onPointerEnterCapture={() => { }}
                        onPointerLeaveCapture={() => { }}

                    />

                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="hidden lg:inline-block"
                        onPointerEnterCapture={() => { }}
                        onPointerLeaveCapture={() => { }}
                        placeholder={""}
                    >
        
                        <ChevronDownSVGIcon isMenuOpen={isMenuOpen} />
                    </Typography>

                </Button>
            </MenuHandler>
            <MenuList className="p-1"
                about="Profile Menu"
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
                placeholder={""}
            >
                {profileMenuItems.map(({ label, icon, to }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onClick={() => to && goto(to)}
                            className={`flex items-center gap-2 rounded ${isLastItem
                                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                : ""
                                }`}
                            onPointerEnterCapture={() => { }}
                            onPointerLeaveCapture={() => { }}
                            placeholder={""}
                        >
                            {React.createElement(icon, {
                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2,
                            })}
                            {isLastItem ? <form method="POST" action={route('logout')}>
                                <input type="hidden" name="_token" value={csrf_token as string} />
                                <button type="submit">Sign out</button>
                            </form> :
                                <Typography
                                    as="span"
                                    variant="small"
                                    className="font-normal"
                                    color={isLastItem ? "red" : "inherit"}
                                    onPointerEnterCapture={() => { }}
                                    onPointerLeaveCapture={() => { }}
                                    placeholder={""}
                                >
                                    {label}
                                </Typography>
                            }
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}