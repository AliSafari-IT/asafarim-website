import { DirectionalHint, IContextualMenuProps, IContextualMenuItem } from "@fluentui/react/lib/ContextualMenu";

/**
 * Utility function to generate menu properties for navigation.
 * @param projectId - The ID of the project.
 * @param routes - Array of route configurations.
 * @returns IContextualMenuProps
 */
export const generateMenuProps = (projectId: number, routes: { key: string, text: string, routeName: string, iconProps?: { iconName: string }, style?: React.CSSProperties, split?: boolean }[]): IContextualMenuProps => {
    const handleNavigation = (routeName: string) => {
        window.location.href = route(routeName, projectId);
    };

    const items: IContextualMenuItem[] = routes.map(route => ({
        key: route.key,
        text: route.text,
        iconProps: route.iconProps,
        style: route.style,
        split: route.split,
        onClick: () => {
            handleNavigation(route.routeName);
            return false;  // Prevent default action
        }
    }));

    return {
        items,
        directionalHint: DirectionalHint.bottomLeftEdge,
        shouldFocusOnMount: true,
        title: 'Actions',
        
    };
};
