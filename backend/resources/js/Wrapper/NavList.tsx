import DropDownMenu from "@/Components/DropDownMenu";
import { navListItems } from "./data/navListItems";
import { NavListItem } from "@/types";
import { MenuItem, Typography } from "@material-tailwind/react";
import React from "react";
import { projects } from "./data/navListProjectItems";

export function NavList() {
    return (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            <DropDownMenu items={projects} />
            {navListItems.map((item: NavListItem) => (
                <Typography
                    key={item.label}
                    as="a"
                    href="#"
                    variant="small"
                    color="gray"
                    className="font-medium text-blue-gray-500"
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                    placeholder={""}
                >
                    <MenuItem className="flex items-center gap-2 lg:rounded-full"
                        onPointerEnterCapture={() => { }}
                        onPointerLeaveCapture={() => { }}
                        placeholder={""}
                        onClick={() => window.location.href = item.to ?? ''}
                    >
                        {React.createElement(item.icon, { className: "h-[18px] w-[18px]" })}
                        <span className="text-gray-900">{item.label}</span>
                    </MenuItem>
                </Typography>
            ))}
        </ul>
    );
}
