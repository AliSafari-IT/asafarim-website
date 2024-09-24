import { NavListItem } from "@/types";
import { createPath } from "@/utils/createPath";
import { solidIcons } from "@/utils/icons";


// Profile menu component with dynamic paths based on environment
export const profileMenuItems = [
    {
        label: "My Profile",
        icon: solidIcons.UserCircleIcon,
        to: createPath("profile"),
    },
    {
        label: "Edit Profile",
        icon: solidIcons.PencilSquareIcon,
        to: createPath("profile/edit"),
    },
    {
        label: "Notifications",
        icon: solidIcons.BellIcon,
        to: createPath("notifications"),
    },
    {
        label: "Help",
        icon: solidIcons.QuestionMarkCircleIcon,
        to: createPath("help"),
    },
    {
        label: "Sign Out",
        icon: solidIcons.ArrowRightIcon,
        to: createPath("logout"),
    },
] as NavListItem[];
