import React from 'react';
import { DefaultButton, IContextualMenuProps, IIconProps } from '@fluentui/react';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { usePage } from '@inertiajs/react';

// Initialize Fluent UI icons
initializeIcons();

interface AdminActionsProps {
    routes: Array<{
        key: string;
        text: string;
        iconProps?: IIconProps;
        split?: boolean;
        style?: React.CSSProperties;
        actions: Array<{
            key: string;
            text: string;
            routeName: string;
            iconProps?: IIconProps;
            split?: boolean;
            style?: React.CSSProperties;
        }>;
    }>;
}

const AdminActions: React.FC<AdminActionsProps> = ({ routes }) => {
    const auth = usePage().props.auth as any;

    // Generate the menu props for the dropdown
    const menuProps: IContextualMenuProps = {
        items: routes[0].actions.map((action) => ({
            key: action.key,
            text: action.text,
            iconProps: action.iconProps,
            onClick: () => {
                // Change the location and return void
                window.location.href = route(action.routeName);
            },
            disabled: auth?.user?.email == 'admin@asafaril.be',  // Disable actions if the user is not authenticated
            style: action.style,
        })),
    };

    return (
        <DefaultButton
            text={routes[0].text}
            iconProps={routes[0].iconProps}
            menuProps={menuProps}
            split={routes[0].split}
            className="m-0 p-0 border-0 bg-transparent hover:bg-transparent hover:text-blue-500"
        />
    );
};

export default AdminActions;
