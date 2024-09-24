// D:\Ampps\www\source\projects\asafarim\backend\resources\js\Pages\TagPage.tsx
import React from "react";
import WrapperLayout from "@/Layouts/WrapperLayout";
import { TagInfo, User } from "@/types";
import "../../css/md.scss";
import { createPath } from "@/utils/createPath";

interface TagPageProps {
    tag: TagInfo;
}

const TagPage: React.FC<TagPageProps> = ({ tag }) => {
    const permalink = createPath(tag.permalink);

    return (
        <WrapperLayout title={`Tag: ${tag.label}`}>
            <div className="tag-page p-4">
                <h1 className="text-3xl font-bold">{tag.label}</h1>
                <p><strong>Permalink:</strong> <a href={permalink} target="_parent">{"https://asafarim.be"+permalink}</a></p>
                <p><strong>Description:</strong> {tag.description}</p>
            </div>
        </WrapperLayout>
    );
};

export default TagPage;
