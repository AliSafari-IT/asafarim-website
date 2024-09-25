import React, { useEffect, useState } from 'react';
import { Head, usePage } from '@inertiajs/react';
import WrapperLayout from '@/Layouts/WrapperLayout';
import { InertiaPageProps, PageProps, Project, User } from '@/types';

import { AddNewButton } from '@/Components/Buttons';
import { projectMenuRoutes } from './data/menuRoutes';
import DropdownActions from '@/Components/DropdownActions';


interface ProjectsPageProps {
    projects: Project[];
}

export default function Index({ projects }: ProjectsPageProps) {
    const { flash, csrf_token } = usePage<PageProps>().props;
    const [showFlash, setShowFlash] = useState(true);
    const auth = usePage().props.auth as any;
    console.log("Project/Index: auth → ", { auth });

    // Auto-hide flash message after 5 seconds
    useEffect(() => {
        if (flash?.success || flash?.error) {
            const timer = setTimeout(() => setShowFlash(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [flash]);



    return (
        <WrapperLayout title="Projects"  >
            <div className="grid place-items-center overflow-x-auto">
                <Head title="Projects" />

                {/* Display Flash Messages */}
                {showFlash && flash?.success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Success!</strong>
                        <span className="block sm:inline">{flash.success}</span>
                    </div>
                )}
                {showFlash && flash?.error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Error!</strong>
                        <span className="block sm:inline">{flash.error}</span>
                    </div>
                )}

                {/* Projects table */}
                <div className="text-sm font-bold my-6">
                    {projects?.length === 0 ? <p>No projects found</p> : null}
                    {projects?.length > 0 ? <p>{projects?.length} projects found</p> : null}
                </div>

                <div className="flex justify-start items-start my-3">
                    <form method="GET" action={route('projects.create')}>
                        <input type="hidden" name="_token" value={csrf_token} />
                        <AddNewButton type="submit" title="Add new project" />
                    </form>
                </div>

                {projects?.length > 0 && (
                    <div className="overflow-x-auto sm:overflow-x-scroll md:overflow-x-visible">
                        <table className="min-w-full bg-white divide-y divide-gray-200 shadow sm:rounded-lg w-full text-left text-sm">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="py-2 px-4 border-b">ID</th>
                                    <th className="py-2 px-4 border-b">Name</th>
                                    <th>Created by</th>
                                    <th>Status</th>
                                    <th>Start date</th>
                                    <th>End date</th>
                                    <th>Priority</th>
                                    <th>Description</th>
                                    <th className="py-2 px-4 border-b">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((project) => (
                                    <tr key={project.id}>
                                        <td className="py-2 px-4 border-b">{project.id}</td>
                                        <td className="py-2 px-4 border-b">{project.name}</td>
                                        <td className="py-2 px-4 border-b">{project.createdby ?? 'N/A'}</td>
                                        <td className="py-2 px-4 border-b">{project.status}</td>
                                        <td className="py-2 px-4 border-b">{project.start_date}</td>
                                        <td className="py-2 px-4 border-b">{project.end_date}</td>
                                        <td className="py-2 px-4 border-b">{project.priority}</td>
                                        <td className="py-2 px-4 border-b">{project.description}</td>
                                        <td className="py-2 px-4 border-b">
                                            <DropdownActions projectId={project.id} routes={projectMenuRoutes} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </WrapperLayout>
    );
}
