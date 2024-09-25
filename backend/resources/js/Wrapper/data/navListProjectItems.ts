import { createPath } from "@/utils/createPath";

// Nav list menu items for the website with dynamic paths
export const projects = [
    {
        title: "Portfolio Showcase",
        href: createPath("projects"),
        description:
            "A place to display my work and projects that I've completed using various technologies like .NET, TypeScript, React, WPF, Laravel, Angular, Tailwind, R, and more.",
    },
    {
        title: "Technical Expertise",
        href: createPath("technical-expertise"),
        description:
            "A comprehensive showcase of my technical skills and knowledge, including in-depth examples and discussions of technologies such as .NET, React, Angular, and more.",
    },
    {
        title: "Knowledge Sharing",
        href: createPath("blog"),
        description:
            "A section dedicated to sharing insights, tutorials, articles, and thoughts on the latest trends and technologies in the field of software development.",
    },
    {
        title: "Resume",
        href: createPath("my-resume"),
        description:
            "An interactive space to view and download my professional resume, including detailed information about my skills, experience, and completed projects.",
    },
    {
        title: "About Me",
        href: createPath("about"),
        description:
            "Get to know more about me, my journey as a developer, my passions, and my approach to technology and problem-solving.",
    },
    {
        title: "Services",
        href: createPath("services"),
        description:
            "Discover the services I offer, including freelance development, consulting, and project collaboration, tailored to meet various business needs.",
    },
    {
        title: "Contact",
        href: createPath("contact"),
        description:
            "A place to get in touch with me for inquiries, collaborations, or to just say hello. Includes a contact form and links to my professional profiles.",
    },
    {
        title: "Testimonials",
        href: createPath("testimonials"),
        description:
            "Read what my clients and colleagues have to say about my work and the experiences they've had collaborating with me.",
    },
];

// Function to get list of navigation items
export default function navListProjectItems() {
    // In a real application, this function might fetch project data from a database or API.

    // Return the extended array of projects
    return projects;
}
