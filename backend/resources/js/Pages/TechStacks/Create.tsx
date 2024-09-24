import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

interface FormData {
    name: string;
    description?: string;
}

const Create: React.FC = () => {
    const { data, setData, post, errors } = useForm<FormData>({
        name: '',
        description: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('tech_stacks.store'));
    };

    return (
        <div>
            <h1>Create Tech Stack</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label>Name</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="form-control"
                    />
                    {errors.name && <div className="text-red-500">{errors.name}</div>}
                </div>

                <div className="mb-4">
                    <label>Description</label>
                    <textarea
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="form-control"
                    ></textarea>
                    {errors.description && <div className="text-red-500">{errors.description}</div>}
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Create;
