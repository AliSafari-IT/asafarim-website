

import * as solidIcons from "@heroicons/react/24/solid";

import * as outlineIcons from "@heroicons/react/24/outline";

import * as miniIcons from "@heroicons/react/20/solid";

import * as microIcons from "@heroicons/react/16/solid";
import { ReactNode } from "react";


export function getIcon(iconName: string):ReactNode | null {
    if (iconName in solidIcons) {
        return (solidIcons as Record<string, any>)[iconName];
    } else if (iconName in outlineIcons) {
        return (outlineIcons as Record<string, any>)[iconName];
    } else if (iconName in miniIcons) {
        return (miniIcons as Record<string, any>)[iconName];
    } else if (iconName in microIcons) {
        return (microIcons as Record<string, any>)[iconName];
    } else {
        return null;
    }
}


