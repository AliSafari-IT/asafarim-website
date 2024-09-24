// D:\Ampps\www\source\projects\asafarim\backend\resources\js\types\index.d.ts
import { ForwardRefExoticComponent, SVGProps, RefAttributes } from "react";

export interface User {
    updated_at?: ReactNode;
    created_at?: ReactNode;
    username?: ReactNode;
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null; 
    avatar?: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    user: User | null; 
};

export interface NavListItem {
    label: string;
    to?: string;
    icon: ForwardRefExoticComponent<
        Omit<SVGProps<SVGSVGElement>, "ref"> & { title?: string | undefined; titleId?: string | undefined; } & RefAttributes<SVGSVGElement>
    >;
}

export interface MarkdownHeadingType {
    headingText: string;
    level: number;
    headingId: string;
}


export interface TreeNode {
    key: string;
    sortOrder?: number;
    label: string;
    url?: string;
    file?: {
        name?: string;
        path?: string;
    };
    date?: {
        from: string;
        to?: string;
        created_at: string;
        updated_at: string;
        published_at: string;
        deleted_at: string;
    };
    description?: string;
    icon?: {
        label: string;
        url?: string;
        svgComponent?: SVGProps<SVGSVGElement>;
        size?: number;
    } | string;
    expanded?: boolean;
    nodes?: TreeNode[];
}

export interface AuthorInfo {
    key: string;
    name: string;
    title: string;
    url: string;
    image_url: string;
    socials: Record<string, string>;
}

export interface TagInfo {
    tagKey: string;
    label?: string;
    permalink: string;
    description: string;
}

export interface MarkdownPageProps {
    user: User;
    markdownContent: string;
    meta: {
        title: string;
        slug: string;
        authors: string[];
        tags: string[];
        hide_table_of_contents: boolean;
        page: boolean;
        date: string;
        showLastUpdateTime: boolean;
    };

    allTags: TagInfo[];
    allAuthors: AuthorInfo[];
}

export interface Project {
    id: number;
    name: string;
    description?: string;
    status: string;
    start_date?: string;
    end_date?: string;
    priority: number;
    createdby: number;
    created_at: string;
    updated_at: string;
}

// Add index signature to allow dynamic keys
export interface InertiaPageProps {
    flash?: {
        success?: string;
        error?: string;
    };
    [key: string]: any;  // This allows any additional properties
}

export interface TechStack {
    id: number;
    name: string;
    description?: string;
    created_at: string;
    updated_at: string;
}

