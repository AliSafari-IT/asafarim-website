import { MenuItem, Menu } from "@material-tailwind/react";
import { Square3Stack3DIcon } from "@heroicons/react/24/solid";
import { Typography, MenuHandler, MenuList, Card } from "@material-tailwind/react";
import React from "react";
import ApplicationLogo from "./ApplicationLogo";
import ChevronDownSVGIcon from "./SVGIcons/ChevronDownSVGIcon";

interface ItemProps {
    title: string;
    href: string;
    description: string;
}

function DropDownMenu({ items }: { items: ItemProps[] }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const renderItems = items.map(({ title,href, description }) => (
        <a href={href} key={title}>
            <MenuItem
                className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
                placeholder={""}
            >
                <Typography variant="h6" color="blue-gray" className="mb-1"
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                    placeholder={""}
                >
                    {title}
                </Typography>
                <Typography variant="small" color="gray" className="font-normal"
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                    placeholder={""}>
                    {description}
                </Typography>
            </MenuItem>
        </a>
    ));

    return (
        <React.Fragment>
            <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen} lockScroll>
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal"
                        onPointerEnterCapture={() => { }}
                        onPointerLeaveCapture={() => { }}
                        placeholder={""}>
                        <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full"
                            onPointerEnterCapture={() => { }}
                            onPointerLeaveCapture={() => { }}
                            placeholder={"yyy"}>
                            <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />
                            Explore
                            <ChevronDownSVGIcon isMenuOpen={isMenuOpen} />
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden w-[50rem] grid-cols-7 gap-3 overflow-visible lg:grid"
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                    placeholder={""}>
                    <Card
                        style={{ color: "#72A0C1", backgroundColor: "#F5F5F5", textAlign: "center"}}
                        shadow={false}
                        variant="gradient"
                        className="col-span-3 grid h-full w-full place-items-center rounded-md"
                        onPointerEnterCapture={() => { }}
                        onPointerLeaveCapture={() => { }}
                        placeholder={""}
                    >
                        <ApplicationLogo strokeWidth={1} className="h-25 w-25" />
                    </Card>
                    <ul className="col-span-4 flex w-full flex-col gap-1">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden"
                onPointerEnterCapture={() => { }}
                onPointerLeaveCapture={() => { }}
                placeholder={""}>
                <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />
                Discover
            </MenuItem>
            <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
                {renderItems}
            </ul>
        </React.Fragment>
    );
}

export default DropDownMenu