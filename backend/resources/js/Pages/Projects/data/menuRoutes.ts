export const projectMenuRoutes = [
    { key: 'details', text: 'Details', routeName: 'projects.show', iconProps: { iconName: 'View' }, split: true },
    { key: 'edit', text: 'Edit', routeName: 'projects.edit', iconProps: { iconName: 'Edit' }, split: true },
    { key: 'archive', text: 'Archive', routeName: 'projects.archive', iconProps: { iconName: 'Archive' }, split: true },
    { key: 'unarchive', text: 'Unarchive', routeName: 'projects.unarchive' , iconProps: { iconName: 'OpenAttachment' }, split: true },
    { key: 'delete', text: 'Delete', routeName: 'projects.delete', iconProps: { iconName: 'Delete' }, style: { color: 'red' }, split: true },
    { key: 'duplicate', text: 'Duplicate', routeName: 'projects.duplicate', iconProps: { iconName: 'Copy' }, split: true },
    { key: 'create-task', text: 'Create Task', routeName: 'tasks.create', iconProps: { iconName: 'Add' }, split: true },
    { key: 'tasks', text: 'Tasks', routeName: 'tasks.index', iconProps: { iconName: 'Task' }, split: true },
]; 