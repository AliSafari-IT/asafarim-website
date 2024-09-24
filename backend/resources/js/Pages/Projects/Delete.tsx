// Delete Project
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import WrapperLayout from '@/Layouts/WrapperLayout';
import { DataBarHorizontalDescending16Filled, Warning48Filled } from '@fluentui/react-icons';
import { User } from '@/types';

interface ProjectProps {
    project: {
        id: number;
        name: string;
        description?: string;
        status: string;
        start_date?: string;
        end_date?: string;
        priority: number;
        createdby: number;
    };
}

export default function Delete({ project }: ProjectProps) {
    const { csrf_token, auth } = usePage().props;
    const { post, data } = useForm();
    const handleDeleteProject = (id: number) => {
        return route('projects.destroy', id);
    };
    return (
        <WrapperLayout title={`Delete Project: ${project.name}`} >
            <div className="grid place-items-center">
                <Head title={"Delete Project"} />
                <div>
                    <div className="text-sm font-bold my-6">
                    <div className="text-lg font-bold my-6 flex items-center justify-center justify-items-stretch">
                        
                            <Warning48Filled style={{color: 'red'}}/>
                            <div>Are you sure you want to delete this project?</div>
                        </div>
                        <div className="text-sm font-bold my-6">
                            <p className='text-lg text-red-600 text-right'>This action is irreversible.</p>
                        </div>
                    </div>
                    <div className="text-sm font-bold my-6 flex flex-row justify-between">
                        <Link
                            href={route('projects.index')}
                            className="px-6 py-3 bg-blue-gray-600 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300 ease-in-out"
                        >
                            Cancel
                        </Link>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                if (confirm('Deleting project: ' + project.name + '!')) {
                                    post(route('projects.destroy', project));
                                }
                            }}
                            method="post"
                            style={{ display: 'inline-block', marginLeft: '5px' }}
                        >
                            <input
                                type="hidden"
                                name="_method"
                                value="DELETE"
                            />
                            <input
                                type="hidden"
                                name="_token"
                                value={csrf_token as string}
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-red-400 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition duration-300 ease-in-out ml-4"
                            >
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </WrapperLayout>
    );
}