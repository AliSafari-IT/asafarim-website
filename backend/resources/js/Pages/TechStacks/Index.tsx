import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { TechStack, InertiaPageProps } from '@/types';
import WrapperLayout from '@/Layouts/WrapperLayout';

interface Props {
    techStacks: TechStack[];
}

const Index: React.FC<Props> = ({ techStacks }) => {
    const { flash } = usePage<InertiaPageProps>().props;

    return (
<WrapperLayout title="Tech Stacks">
            <div className="grid place-items-center">
                <Head title="Tech Stacks" />         

            {flash?.success && <div className="alert alert-success">{flash.success}</div>}

            <Link href={route('tech_stacks.create')} className="btn btn-primary">
                Add New Tech Stack
            </Link>

            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {techStacks.map((techStack) => (
                        <tr key={techStack.id}>
                            <td>{techStack.name}</td>
                            <td>{techStack.description}</td>
                            <td>
                                <Link href={route('tech_stacks.edit', techStack.id)} className="btn btn-warning">
                                    Edit
                                </Link>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        if (confirm('Are you sure?')) {
                                            window.location.href = route('tech_stacks.destroy', techStack.id);
                                        }
                                    }}
                                    method="post"
                                    style={{ display: 'inline-block', marginLeft: '5px' }}
                                >
                                    <input type="hidden" name="_method" value="DELETE" />
                                    <button type="submit" className="btn btn-danger">
                                        Delete
                                    </button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </WrapperLayout>
    );
};

export default Index;
