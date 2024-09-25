import React, { useEffect } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import WrapperLayout from '@/Layouts/WrapperLayout';
import { Project, User } from '@/types';
import { ArrowReplyButton } from '@/Components/Buttons';
import { PageProps } from '@/types';

interface EditProjectProps {
    project: Project;
}

export default function Edit({ project }: EditProjectProps) {
    const { auth } = usePage<PageProps>().props;
    const currentUserId = auth?.user?.id;

    const { data, setData, post, errors } = useForm({
        name: project.name || '',
        description: project.description || '',
        status: project.status || 'ongoing',
        start_date: project.start_date || '',
        end_date: project.end_date || '',
        priority: project.priority || 0,
        createdby: project.createdby,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('projects.update', project.id));  // Use PUT method
    };

    useEffect(() => {
        setData('createdby', project.createdby);
    }, [project]);

    // Check if the current user is allowed to edit
    const isProjectOwner = currentUserId === project.createdby;

    return (
        <WrapperLayout title={`Edit Project ${project.id}`}>
            <Head title={`Edit Project ${project.id}`} />

            <div className="max-w-2xl mx-auto mt-10">
                {isProjectOwner ? (
                    <form onSubmit={handleSubmit} className="overflow-x-auto">
                        <table className="min-w-full border-collapse">
                            <tbody>
                                <tr>
                                    <td className="border border-gray-300 p-2">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                        <input
                                            id="name"
                                            type="text"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                        />
                                        {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                                    </td>
                                </tr>

                                <tr>
                                    <td className="border border-gray-300 p-2">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                            Description
                                        </label>
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                        <textarea
                                            id="description"
                                            value={data.description}
                                            onChange={(e) => setData('description', e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                        ></textarea>
                                        {errors.description && <div className="text-red-500 text-sm">{errors.description}</div>}
                                    </td>
                                </tr>

                                <tr>
                                    <td className="border border-gray-300 p-2">
                                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                            Status
                                        </label>
                                    </td>
                                    <td className="border border-gray-300 p-2">
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
                                    </td>
                                </tr>

                                <tr>
                                    <td className="border border-gray-300 p-2">
                                        <label htmlFor="start_date" className="block text-sm font-medium text-gray-700">
                                            Start Date
                                        </label>
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                        <input
                                            id="start_date"
                                            type="date"
                                            value={data.start_date}
                                            onChange={(e) => setData('start_date', e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                        />
                                        {errors.start_date && <div className="text-red-500 text-sm">{errors.start_date}</div>}
                                    </td>
                                </tr>

                                <tr>
                                    <td className="border border-gray-300 p-2">
                                        <label htmlFor="end_date" className="block text-sm font-medium text-gray-700">
                                            End Date
                                        </label>
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                        <input
                                            id="end_date"
                                            type="date"
                                            value={data.end_date}
                                            onChange={(e) => setData('end_date', e.target.value)}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                        />
                                        {errors.end_date && <div className="text-red-500 text-sm">{errors.end_date}</div>}
                                    </td>
                                </tr>

                                <tr>
                                    <td className="border border-gray-300 p-2">
                                        <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
                                            Priority
                                        </label>
                                    </td>
                                    <td className="border border-gray-300 p-2">
                                        <input
                                            id="priority"
                                            type="number"
                                            value={data.priority}
                                            onChange={(e) => setData('priority', parseInt(e.target.value))}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                                        />
                                        {errors.priority && <div className="text-red-500 text-sm">{errors.priority}</div>}
                                    </td>
                                </tr>

                                <tr>
                                    <td className="border border-gray-300 p-2" colSpan={2}>
                                        <div className="flex items-center justify-around">
                                            <Link href={route('projects.index')}>
                                                <ArrowReplyButton type="button" />
                                            </Link>

                                            <button
                                                type="submit"
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                Update Project
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                ) : (
                    // If the current user is not the project owner
                    <div className="text-center">
                        <div className="text-red-500 text-sm">
                            You are not authorized to edit this project.
                        </div>
                        <div className="mt-4 text-right">
                            <Link href={route('projects.index')}>
                                <ArrowReplyButton type="button" />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </WrapperLayout>
    );
}


