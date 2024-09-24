import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, errors } = useForm({
        name: '',
        description: '',
        status: 'ongoing',
        start_date: '',
        end_date: '',
        priority: 0,
    });

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        post(route('projects.store'));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                />
                {errors.name && <div>{errors.name}</div>}
            </div>

            <div>
                <label>Description:</label>
                <textarea
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                ></textarea>
                {errors.description && <div>{errors.description}</div>}
            </div>

            <div>
                <label>Status:</label>
                <select
                    value={data.status}
                    onChange={(e) => setData('status', e.target.value)}
                >
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                    <option value="on_hold">On Hold</option>
                </select>
                {errors.status && <div>{errors.status}</div>}
            </div>

            <div>
                <label>Start Date:</label>
                <input
                    type="date"
                    value={data.start_date}
                    onChange={(e) => setData('start_date', e.target.value)}
                />
                {errors.start_date && <div>{errors.start_date}</div>}
            </div>

            <div>
                <label>End Date:</label>
                <input
                    type="date"
                    value={data.end_date}
                    onChange={(e) => setData('end_date', e.target.value)}
                />
                {errors.end_date && <div>{errors.end_date}</div>}
            </div>

            <div>
                <label>Priority:</label>
                <input
                    type="number"
                    value={data.priority}
                    onChange={(e) => setData('priority', Number(e.target.value))}
                />
                {errors.priority && <div>{errors.priority}</div>}
            </div>

            <button type="submit">Create Project</button>
        </form>
    );
}
