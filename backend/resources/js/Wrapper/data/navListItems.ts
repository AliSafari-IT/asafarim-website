import { NavListItem } from "@/types";
import { createPath } from "@/utils/createPath";
import { outlineIcons, solidIcons } from '@/utils/icons';

// Nav list component with dynamic paths based on environment
export const navListItems = [
 {
        label: "Knowledge Sharing",
        to: createPath("BlogDocs"),
        icon: solidIcons.BoltIcon,
    },    {
        label: "Contact",
        to: createPath("contact"), 
        icon: outlineIcons.UserCircleIcon,
    },
   
    {
        label: "TechDocs",
        to: createPath("TechDocs"),
        icon: outlineIcons.CodeBracketSquareIcon,
    },
    {
        label: "Eula",
        to: createPath("AsmDocs/eula"),
        icon: solidIcons.ArrowUpLeftIcon,
    },
    {
        label: "Privacy",
        to: createPath("AsmDocs/cookies-policy"),
        icon: solidIcons.UserCircleIcon,
    },
    {
        label: "Disclaimer",
        to: createPath("AsmDocs/disclaimer"),
        icon: outlineIcons.ExclamationTriangleIcon,
    },
] as NavListItem[];
