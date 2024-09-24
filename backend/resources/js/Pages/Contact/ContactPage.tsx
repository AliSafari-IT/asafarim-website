import React, { useState } from 'react';
import WrapperLayout from '@/Layouts/WrapperLayout';
import { useForm } from '@inertiajs/react';

interface FormState {
    name: string;
    email: string;
    message: string;
}

export default function ContactPage() {
    const { data, setData, post, processing, errors, reset } = useForm<FormState>({
        name: '',
        email: '',
        message: '',
    });

    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData(e.target.name as keyof FormState, e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccessMessage(null);
        setErrorMessage(null);

        post(route('contact.submit'), {
            onSuccess: () => {
                reset();
                setSuccessMessage(
                    `<h6>Thanks ${data.name}!</h6> <p>Your message has been sent!</p> <p class="text-sm text-align-left">
          We will get back to you via your email as soon as possible.
          </p>`,
                );
            },
            onError: () => {
                setErrorMessage('Oops! Something went wrong. Please try again later.');
            },
            preserveScroll: true,
        });
    };

    return (
        <WrapperLayout title="Contact">
            <div className="grid place-items-center lg:my-6 md:my-3 my-1">
                <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg space-y-6">
                    <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
                    {successMessage && (
                        <p
                            className="text-green-600 mt-4"
                            dangerouslySetInnerHTML={{ __html: successMessage }}
                        />
                    )}
                    {errorMessage && <p className="text-red-600 text-center mt-4">{errorMessage}</p>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                value={data.name}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errors.name && <p className="text-red-600 mt-2">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                value={data.email}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errors.email && <p className="text-red-600 mt-2">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                required
                                value={data.message}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            ></textarea>
                            {errors.message && <p className="text-red-600 mt-2">{errors.message}</p>}
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                disabled={processing}
                            >
                                {processing ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </WrapperLayout>
    );
}
