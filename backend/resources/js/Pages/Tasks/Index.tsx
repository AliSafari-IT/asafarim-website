import React from 'react'; 
import { Link, usePage } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';

interface Task {
  id: number;
  title: string;
  status: string;
}

interface Props {
  tasks: Task[];
}

const TaskIndex: React.FC<Props> = ({ tasks }) => {
  // Function to render the clickable status circle that navigates to the edit page
  const renderStatusCircle = (task: Task) => {
    if (task.status === 'completed') {
      return (
        <Link href={`/tasks/${task.id}/edit`} className="mr-2">
          <span className="w-4 h-4 inline-block bg-green-500 rounded-full"></span>
        </Link>
      ); // Filled circle for completed
    }
    return (
      <Link href={`/tasks/${task.id}/edit`} className="mr-2">
        <span className="w-4 h-4 inline-block border border-gray-500 rounded-full"></span>
      </Link>
    ); // Outlined circle for not completed
  };

  return (
    <AuthenticatedLayout
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Your Tasks</h2>}
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <h1 className="text-2xl font-bold">Task List</h1>
              <Link href="/dashboard" >
                <SecondaryButton>
                Dashboard
                </SecondaryButton>
              </Link>
              <Link href="/tasks/create" >
                <PrimaryButton>
                  Create New Task
                </PrimaryButton>
              </Link>
            </div>

            {tasks.length > 0 ? (
              <ul className="space-y-4">
                {tasks.map(task => (
                  <li key={task.id} className="border-b pb-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        {/* Render status circle before the task title, link to edit page */}
                        {renderStatusCircle(task)}
                        <Link
                          href={`/tasks/${task.id}`}
                          className="text-lg font-semibold text-indigo-600 hover:text-indigo-900"
                        >
                          {task.title}
                        </Link>
                        <span className="ml-2 text-gray-600">({task.status})</span>
                      </div>
                      <div className="space-x-4">
                        <Link
                          href={`/tasks/${task.id}/edit`}
                          className="text-sm text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </Link>
                        <form
                          method="POST"
                          action={`/tasks/${task.id}`}
                          onSubmit={(e) => {
                            e.preventDefault();
                            if (confirm('Are you sure?')) {
                              (e.target as HTMLFormElement).submit();
                            }
                          }}
                          style={{ display: 'inline' }}
                        >
                          <input type="hidden" name="_method" value="DELETE" />
                          <button
                            type="submit"
                            className="text-sm text-red-600 hover:text-red-900"
                          >
                            Delete
                          </button>
                        </form>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No tasks available. Create a new task to get started!</p>
            )}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default TaskIndex;