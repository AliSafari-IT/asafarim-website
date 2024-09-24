import AuthorPage from "./AuthorPage";
import { Head } from "@inertiajs/react";
import { AuthorInfo } from "@/types";

export const AuthorList = ({ matchedAuthors } : { matchedAuthors: AuthorInfo[] }) => {
    if (!matchedAuthors) {
        console.error('No authors found');
        return null;
    }

    return (
        <div>
            <Head title="Author Information" />
            <div className="author-list">
                <h2>Authors</h2>
                {matchedAuthors.map((author: AuthorInfo) => (
                    <div key={author.key} className="author-card">
                        <AuthorPage author={author} />
                    </div>
                ))}
            </div>
        </div>
    );
}
