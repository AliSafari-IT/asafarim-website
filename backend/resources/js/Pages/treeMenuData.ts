import { TreeNode } from "@/types";

// Enhanced treeMenuData with additional properties and richer structure
export const treeMenuData: TreeNode[] = [
  // Tech stack branch
  {
    key: "tech-stack",
    label: "Tech Stack",
    description: "List of technologies and tools used in the project",
    expanded: true,
    icon: "🧰",
    nodes: [
      {
        key: "react",
        label: "React",
        url: "https://reactjs.org/",
        description: "A JavaScript library for building user interfaces",
        icon: "⚛️",
        expanded: false,
        nodes: [
          {
            key: "react-docs",
            label: "React Documentation",
            url: "https://reactjs.org/docs/getting-started.html",
            description: "Official documentation for React framework",
            icon: "📖",
            expanded: false,
            nodes: [],
          },
    ]}]
  },
  // Blog branch
  {
    key: "blog",
    label: "Blog",
    description: "List of blog posts and resources",
    expanded: true,
    icon: "📝",
    nodes: [
      {
        key: "welcome",
        label: "Welcome",
        url: "https://laravel.com/docs",
        description: "Official documentation for Laravel framework",
        icon: "📖",
        expanded: false,
        nodes: [],
      },
    ],
  },
  // Frontend branch
  {
    key: "frontend",
    label: "Frontend",
    description: "Frontend frameworks and libraries",
    expanded: true,
    icon: "🌐",
    nodes: [
      {
        key: "laravel",
        label: "Laravel",
        url: "https://laravel.com/",
        description: "PHP framework for web artisans",
        icon: "🔧",
        expanded: false,
        nodes: [
          {
            key: "laravel-docs",
            label: "Laravel Documentation",
            url: "https://laravel.com/docs",
            description: "Official documentation for Laravel framework",
            icon: "📖",
            expanded: false,
            nodes: [],
          },
        ],
      },
      {
        key: "react",
        label: "React",
        url: "https://reactjs.org/",
        description: "A JavaScript library for building user interfaces",
        icon: "⚛️",
        expanded: false,
        nodes: [
          {
            key: "react-docs",
            label: "React Documentation",
            url: "https://reactjs.org/docs/getting-started.html",
            description: "Official React documentation",
            icon: "📖",
            expanded: false,
            nodes: [
              {
                key: "react-hooks",
                label: "React Hooks",
                url: "https://reactjs.org/docs/hooks-intro.html",
                description: "Introduction to React Hooks",
                icon: "🎣",
                nodes: [],
              },
            ],
          },
        ],
      },
      {
        key: "vue",
        label: "Vue",
        url: "https://vuejs.org/",
        description: "The Progressive JavaScript Framework",
        icon: "🖖",
        expanded: false,
        nodes: [
          {
            key: "vue-docs",
            label: "Vue Documentation",
            url: "https://vuejs.org/v2/guide/",
            description: "Official Vue.js documentation",
            icon: "📖",
            expanded: false,
            nodes: [
              {
                key: "vue-components",
                label: "Vue Components",
                url: "https://vuejs.org/v2/guide/components.html",
                description: "Guide to Vue components",
                icon: "🔧",
                nodes: [],
              },
            ],
          },
        ],
      },
    ],
  },
  // Backend branch
  {
    key: "backend",
    label: "Backend",
    description: "Backend frameworks and libraries",
    expanded: true,
    icon: "🔙",
    nodes: [
      {
        key: "nodejs",
        label: "Node.js",
        url: "https://nodejs.org/",
        description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
        icon: "🟢",
        expanded: false,
        nodes: [
          {
            key: "nodejs-docs",
            label: "Node.js Documentation",
            url: "https://nodejs.org/en/docs/",
            description: "Official Node.js documentation",
            icon: "📖",
            nodes: [],
          },
        ],
      },
      {
        key: "django",
        label: "Django",
        url: "https://www.djangoproject.com/",
        description: "The web framework for perfectionists with deadlines",
        icon: "🐍",
        expanded: false,
        nodes: [
          {
            key: "django-docs",
            label: "Django Documentation",
            url: "https://docs.djangoproject.com/",
            description: "Official Django documentation",
            icon: "📖",
            nodes: [],
          },
        ],
      },
      {
        key: "spring",
        label: "Spring",
        url: "https://spring.io/",
        description: "Provides a comprehensive programming and configuration model for modern Java-based enterprise applications",
        icon: "🌱",
        expanded: false,
        nodes: [
          {
            key: "spring-docs",
            label: "Spring Documentation",
            url: "https://docs.spring.io/spring-framework/docs/current/reference/html/",
            description: "Official Spring documentation",
            icon: "📖",
            nodes: [],
          },
        ],
      },
    ],
  },
  // DevOps branch
  {
    key: "devops",
    label: "DevOps",
    description: "Tools and platforms for DevOps",
    expanded: true,
    icon: "⚙️",
    nodes: [
      {
        key: "docker",
        label: "Docker",
        url: "https://www.docker.com/",
        description: "Platform for developing, shipping, and running applications",
        icon: "🐳",
        expanded: false,
        nodes: [
          {
            key: "docker-docs",
            label: "Docker Documentation",
            url: "https://docs.docker.com/",
            description: "Official Docker documentation",
            icon: "📖",
            nodes: [],
          },
        ],
      },
      {
        key: "kubernetes",
        label: "Kubernetes",
        url: "https://kubernetes.io/",
        description: "Open-source system for automating deployment, scaling, and management of containerized applications",
        icon: "☸️",
        expanded: false,
        nodes: [
          {
            key: "kubernetes-docs",
            label: "Kubernetes Documentation",
            url: "https://kubernetes.io/docs/home/",
            description: "Official Kubernetes documentation",
            icon: "📖",
            nodes: [],
          },
        ],
      },
    ],
  },
];
