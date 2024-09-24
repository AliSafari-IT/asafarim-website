export const adminMenuRoutes = [
    {
        key: 'users', 
        text: 'Actions', 
        iconProps: { iconName: 'More' }, 
        split: true,
        actions: [
            { key: 'users', text: 'Users', routeName: 'users.index', iconProps: { iconName: 'View' }, split: true },
            { key: 'create-user', text: 'Create User', routeName: 'users.create', iconProps: { iconName: 'Add' }, split: true },
            { key: 'delete', text: 'Delete', routeName: 'users.delete', iconProps: { iconName: 'Delete' }, style: { color: 'red' }, split: true },
            { key: 'create-task', text: 'Create Task', routeName: 'tasks.create', iconProps: { iconName: 'Add' }, split: true },
            { key: 'tasks', text: 'Tasks', routeName: 'tasks.index', iconProps: { iconName: 'Task' }, split: true },
        ]
    }
];
