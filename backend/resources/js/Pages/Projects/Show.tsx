import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import WrapperLayout from '@/Layouts/WrapperLayout';
import { ArrowReplyButton } from '@/Components/Buttons';
import { PageProps } from '@/types';



export default function Show() {
    const { project } = usePage<PageProps>().props;

    return (
        <WrapperLayout title="Project Details"  >
            <div className="grid place-items-center overflow-x-auto">
                <Head title={`Project Details - ${project?.name}`} />
                <div className="container mx-auto my-6 p-4">
                    <h1 className="text-2xl font-bold mb-4">Project: {project?.name}, Created: {project?.updated_at.slice(0, 10)}</h1>

                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="py-2 px-4 text-left">Field</th>
                                    <th className="py-2 px-4 text-left">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2 font-semibold">Name</td>
                                    <td className="border px-4 py-2">{project?.name}</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 font-semibold">Description</td>
                                    <td className="border px-4 py-2">{project?.description}</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 font-semibold">Status</td>
                                    <td className="border px-4 py-2 capitalize">{project?.status}</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 font-semibold">Start Date</td>
                                    <td className="border px-4 py-2">{project?.start_date}</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 font-semibold">End Date</td>
                                    <td className="border px-4 py-2">{project?.end_date}</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 font-semibold">Priority</td>
                                    <td className="border px-4 py-2">{project?.priority}</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 font-semibold">Created By</td>
                                    <td className="border px-4 py-2">{project?.createdby}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex items-center justify-around m-6">

                            <Link href={route('projects.index')}>
                                <ArrowReplyButton type="button" />
                            </Link>
                            <Link href={route('projects.edit', project?.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</Link>

                        </div>
                    </div>
                </div>
            </div>
        </WrapperLayout>
    );
}
