export const userMenuRoutes = [
    { key: 'details', text: 'Details', routeName: 'admin.users.show', iconProps: { iconName: 'View' }, split: true },
    { key: 'edit', text: 'Edit', routeName: 'admin.users.edit', iconProps: { iconName: 'Edit' }, split: true },
    { key: 'delete', text: 'Delete', routeName: 'admin.users.delete', iconProps: { iconName: 'Delete' }, style: { color: 'red' }, split: true },
    { key: 'duplicate', text: 'Duplicate', routeName: 'admin.users.duplicate', iconProps: { iconName: 'Copy' }, split: true },
    { key: 'create-task', text: 'Create Task', routeName: 'tasks.create', iconProps: { iconName: 'Add' }, split: true },
    { key: 'tasks', text: 'Tasks', routeName: 'tasks.index', iconProps: { iconName: 'Task' }, split: true },
]; 