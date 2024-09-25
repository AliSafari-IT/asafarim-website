import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface Props {
  task: Task;
}

const TaskShow: React.FC<Props> = ({ task }) => {
  return (
    <AuthenticatedLayout
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Task Details</h2>}
    >
      <Head title="Task Details" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">{task.title}</h1>

            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Description:</strong> {task.description || 'No description provided.'}
              </p>

              <p className="text-gray-700">
                <strong>Status:</strong> {task.status === 'pending' ? 'Pending' : task.status === 'in_progress' ? 'In Progress' : 'Completed'}
              </p>

              <p className="text-gray-700">
                <strong>Created At:</strong> {new Date(task.created_at).toLocaleString()}
              </p>

              <p className="text-gray-700">
                <strong>Last Updated:</strong> {new Date(task.updated_at).toLocaleString()}
              </p>
            </div>

            <div className="mt-6 flex space-x-4">
              <PrimaryButton>
                <Link href={`/tasks/${task.id}/edit`} className="text-white">Edit Task</Link>
              </PrimaryButton>

              <Link
                href="/tasks"
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              >
                Back to Tasks
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default TaskShow;
