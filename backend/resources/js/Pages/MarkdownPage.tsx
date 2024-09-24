import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import WrapperLayout from '@/Layouts/WrapperLayout';
import { AuthorInfo, MarkdownHeadingType, MarkdownPageProps, TreeNode } from '@/types';
import TableOfContents from '@/Pages/TechDocs/components/TableOfContents';
import "../../css/md.scss";
import generateSlug from '@/utils/generateSlug';
import { Link, TreeItemOpenChangeData, TreeItemOpenChangeEvent } from '@fluentui/react-components';
import TreeMenuComponent from './TreeMenu';
import { treeMenuData } from './treeMenuData';
import { createPath } from '@/utils/createPath';
import { AuthorList } from './AuthorList';

const scrollToHeadingByContent = (tag: string, content: string) => {
    const elements = document.getElementsByTagName(tag);
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element.textContent?.trim() === content.trim()) {
            element.scrollIntoView({ behavior: 'smooth' });
            break;
        }
    }
};

const MarkdownPage: React.FC<MarkdownPageProps> = ({
    markdownContent,
    meta,
    allTags,
    allAuthors,
}) => {
    const [headings, setHeadings] = useState<MarkdownHeadingType[]>([]);
    const [activeHeading, setActiveHeading] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Debugging logs to check the props received
    console.log("MarkdownPage rendered with allAuthors: ", allAuthors);
    console.log("MarkdownPage rendered with meta.authors: ", meta.authors);

    // Filter matched authors based on meta.authors
    const matchedAuthors = allAuthors?.filter((author) =>
        meta.authors?.includes(author.key)
    );

    console.log("matchedAuthors: ", matchedAuthors);

    const filterTreeData = (data: TreeNode[], searchTerm: string): TreeNode[] => {
        return data?.map((item) => {
                if (item.label.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return item;
                }

                if (item.nodes && item.nodes.length > 0) {
                    const filteredNodes = filterTreeData(item.nodes, searchTerm);
                    if (filteredNodes.length > 0) {
                        return { ...item, nodes: filteredNodes };
                    }
                }

                return null;
            })
            .filter((item) => item !== null);
    };

    const filteredTreeData = searchTerm ? filterTreeData(treeMenuData, searchTerm) : treeMenuData;

    useEffect(() => {
        const parsedHeadings: MarkdownHeadingType[] = [];
        const existingSlugs = new Set<string>();

        const headingRegex = /^(#+)\s*(.*)$/gm;
        const matches = markdownContent.matchAll(headingRegex);

        for (const match of matches) {
            const headingLevel = match[1].length;
            const headingText = match[2];
            const headingId = generateSlug(headingText, existingSlugs) + "-" + headingLevel;

            parsedHeadings.push({
                headingText,
                level: headingLevel,
                headingId,
            });

            existingSlugs.add(headingId);
        }

        const filteredHeadings = activeHeading
            ? parsedHeadings.filter((heading) => heading.headingId === activeHeading)
            : parsedHeadings;

        setHeadings(filteredHeadings);
    }, [markdownContent, meta.hide_table_of_contents]);

    const htmlContent = marked.parse(markdownContent).toString();

    const handleClick = (headingId: string, headingText: string, headingLevel: number) => {
        if (activeHeading !== headingId) {
            setActiveHeading(headingId);
            scrollToHeadingByContent(`h${headingLevel}`, headingText);
        }
    };

    const [open, setOpen] = useState(true);
    const handleOpenChange = (
        event: TreeItemOpenChangeEvent,
        data: TreeItemOpenChangeData
    ) => {
        setOpen(data.open);
    };

    return (
        <WrapperLayout title={meta.title}>
            <div className="flex">
                {/* Left-side tree menu */}
                <div className="tree-menu">
                    <div className="search-bar flex items-center space-x-2 border border-gray-300 rounded-md px-2 py-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search..."
                            className="flex-1 px-2 py-1 text-sm text-gray-700 bg-transparent border-none outline-none"
                        />
                    </div>

                    <ul className="mt-4">
                        {filteredTreeData.map((item) => (
                            <TreeMenuComponent key={item.key} data={[item]} />
                        ))}
                    </ul>
                </div>
                {/* Main content */}
                <div className="md-container">
                    <div className="md-article">
                        <article className="md-pages">
                            <header>
                                <h1>{meta.title}</h1>
                                {/* Author Information */}
                                {matchedAuthors && matchedAuthors.length > 0 && (
                                    <AuthorList matchedAuthors={matchedAuthors} />
                                )}
                                {/* Article Header */}
                                {/* Tag List */}
                                <ul className="tags">
                                    Tags:{" "}
                                    {meta.tags.map((tagKey) => {
                                        return (
                                            <li key={tagKey} className="tag">
                                                <a href={createPath(`tags/${tagKey}`)}>#{(allTags[tagKey as keyof typeof allTags] as any).label}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </header>
                            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                        </article>
                    </div>

                    {/* Conditionally render Table of Contents */}
                    {!meta.hide_table_of_contents && headings.length > 0 && (
                        <TableOfContents
                            headings={headings}
                            activeHeading={activeHeading}
                            onHeadingClick={handleClick}
                        />
                    )}
                </div>
            </div>
        </WrapperLayout>
    );
};

export default MarkdownPage;
