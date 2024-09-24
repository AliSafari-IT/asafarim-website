import React, { useState } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import WrapperLayout from '@/Layouts/WrapperLayout';
import { InertiaPageProps, User } from '@/types';

interface PageProps extends InertiaPageProps {
  auth: User;
  csrf_token: string;
}

export default function AddNew() {
  const { auth, csrf_token } = usePage<PageProps>().props;
  const { data, setData, post, errors } = useForm({
    name: '',
    description: '',
    status: 'ongoing', // Default to ongoing
    start_date: '',
    end_date: '',
    priority: 0,
    createdby: auth.id, // Set to current user id
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('projects.store'));
  };

  return (
    <WrapperLayout title="Add New Project">
      <Head title="Add New Project" />

      <div className="max-w-2xl mx-auto mt-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={data.description}
              onChange={(e) => setData('description', e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            ></textarea>
            {errors.description && <div className="text-red-500 text-sm">{errors.description}</div>}
          </div>

          <div className="mb-4">
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              value={data.status}
              onChange={(e) => setData('status', e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            >
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
              <option value="on_hold">On Hold</option>
            </select>
            {errors.status && <div className="text-red-500 text-sm">{errors.status}</div>}
          </div>

          <div className="mb-4">
            <label htmlFor="start_date" className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              id="start_date"
              type="date"
              value={data.start_date}
              onChange={(e) => setData('start_date', e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {errors.start_date && <div className="text-red-500 text-sm">{errors.start_date}</div>}
          </div>

          <div className="mb-4">
            <label htmlFor="end_date" className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              id="end_date"
              type="date"
              value={data.end_date}
              onChange={(e) => setData('end_date', e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {errors.end_date && <div className="text-red-500 text-sm">{errors.end_date}</div>}
          </div>

          <div className="mb-4">
            <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
              Priority
            </label>
            <input
              id="priority"
              type="number"
              value={data.priority}
              onChange={(e) => setData('priority', parseInt(e.target.value))}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            />
            {errors.priority && <div className="text-red-500 text-sm">{errors.priority}</div>}
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </WrapperLayout>
  );
}
