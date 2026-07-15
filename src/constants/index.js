export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
    {
        id: 5,
        name: 'Experience',
        href: '#experience',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Jadwel | جدول — AI Travel Discovery Platform',
        desc: 'Jadwel consolidates Saudi Arabia\'s fragmented travel information into one bilingual (Arabic/English) platform. It surfaces hidden gems and local favorites through editorial curation and ML-powered badges, and lets users build a full day-by-day itinerary just by setting preferences.',
        subdesc: 'Built with Next.js and React Native, backed by a RAG pipeline (Supabase + pgvector) and a Python FastAPI service for ML recommendations. Includes a TSP route-optimization engine and a verified local tour guide marketplace. Graduation Project, CCSIT Showcase 11.',
        href: 'https://www.jadwel.app/en',
        hrefLabel: 'View Live Demo',
        images: Array.from({ length: 10 }, (_, i) => `/assets/projects/jadwel/jadwel-${i + 1}.png`),
        logo: '/assets/logos/project-logo-jadwel.png',
        logoStyle: {
            border: '0.2px solid #3A2E1F',
            boxShadow: '0px 0px 60px 0px #C9A22740',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            { name: 'Next.js' },
            { name: 'React Native' },
            { name: 'Supabase' },
            { name: 'Python' },
        ],
    },
    {
        title: 'Management Issue System — KFMC',
        desc: 'A production-ready, full-stack web application built during my Cooperative Training at King Fahad Medical City, designed to streamline how workplace issues are submitted, tracked, and resolved. Includes role-based dashboards and an internal team chat.',
        subdesc: 'Built with ASP.NET Web Forms and C#, backed by a normalized SQL Server database with a full ER diagram. Implemented secure authentication, role-based access control, form validation, and SMTP email notifications. Deployed live on SmarterASP.NET hosting.',
        href: 'https://github.com/Hassan-Alzouri/management-issue-system',
        hrefLabel: 'View on GitHub',
        images: Array.from({ length: 5 }, (_, i) => `/assets/projects/kfmc/kfmc-${i + 1}.png`),
        logo: '/assets/logos/project-logo-kfmc.png',
        logoStyle: {
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            { name: 'ASP.NET' },
            { name: 'C#' },
            { name: 'SQL Server' },
        ],
    },
    {
        title: 'QuickShow — Movie Ticket Booking System',
        desc: 'A full-stack MERN movie ticket booking platform with seat selection, secure payment processing, and an admin dashboard for managing movies and showtimes.',
        subdesc: 'Built with the MERN stack, integrating Stripe for payments and a modern, responsive UI with automated email notifications.',
        href: 'https://github.com/Hassan-Alzouri/QuickShow',
        hrefLabel: 'View on GitHub',
        images: Array.from({ length: 10 }, (_, i) => `/assets/projects/movie-booking/movie-booking-${i + 1}.png`),
        logo: '/assets/logos/project-logo-movie.png',
        logoStyle: {
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            { name: 'React.js' },
            { name: 'Node.js' },
            { name: 'MongoDB' },
            { name: 'Stripe' },
        ],
    },
    {
        title: 'Role-Based Auth App — React & Firebase',
        desc: 'A role-based authentication web app built with React.js and Firebase Authentication. Users register and log in with validation, and are routed based on role — admins land on a protected admin dashboard, everyone else on a regular user dashboard.',
        subdesc: 'Focused on secure authentication flows, protected routing, and role-based access control using Firebase.',
        href: 'https://github.com/Hassan-Alzouri/react-firebase-role-authentication',
        hrefLabel: 'View on GitHub',
        images: Array.from({ length: 4 }, (_, i) => `/assets/projects/react-firebase-role-authentication/react-firebase-role-authentication-${i + 1}.png`),
        logo: '/assets/logos/project-logo-firebase-auth.png',
        logoStyle: {
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            { name: 'React.js' },
            { name: 'Firebase' },
            { name: 'Auth' },
        ],
    },
    {
        title: 'Restaurant Management System',
        desc: 'A Java Swing restaurant management app with role-based Manager/Cashier access, loyalty points tracking, and sales reporting.',
        subdesc: 'Built with FlatLaf/Raven for a modern desktop UI as part of an OOP course project, with real business logic for orders and reporting.',
        href: 'https://github.com/Hassan-Alzouri/restaurant-system',
        hrefLabel: 'View on GitHub',
        images: ['/assets/projects/restaurant-system/restaurant-system-1.png'],
        logo: '/assets/logos/project-logo-restaurant.png',
        logoStyle: {
            border: '0.2px solid #173A26',
            boxShadow: '0px 0px 60px 0px #3CB37140',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            { name: 'Java' },
            { name: 'Swing' },
            { name: 'OOP' },
        ],
    },
    {
        title: 'Sportswear Store App',
        desc: 'A Flutter UI practice project for a sportswear store app, featuring a clean, responsive e-commerce interface for browsing and shopping merchandise.',
        subdesc: 'Focused on responsive layouts, smooth navigation, and a polished, user-centric shopping experience.',
        href: 'https://github.com/Hassan-Alzouri/sportswear-store-app',
        hrefLabel: 'View on GitHub',
        images: ['/assets/projects/sportswear-store/sportswear-store-1.png'],
        logo: '/assets/logos/project-logo-sportswear.png',
        logoStyle: {
            border: '0.2px solid #3D2814',
            boxShadow: '0px 0px 60px 0px #FF8A3D40',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            { name: 'Flutter' },
            { name: 'Dart' },
        ],
    },
    {
        title: 'User Management App',
        desc: 'A Flutter app that fetches and displays user data from a REST API using the Provider pattern, with a clean list-to-detail profile view.',
        subdesc: 'Focused on API integration and state management using the Provider pattern in Flutter.',
        href: 'https://github.com/Hassan-Alzouri/user-management-flutter-app',
        hrefLabel: 'View on GitHub',
        images: ['/assets/projects/user-management/user-management-1.png'],
        logo: '/assets/logos/project-logo-usermgmt.png',
        logoStyle: {
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            { name: 'Flutter' },
            { name: 'Dart' },
            { name: 'Provider' },
        ],
    },
];
export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'PORTA — Eastern Region Urban Hackathon',
        pos: '🏆 1st Place — Transport & Infrastructure Track',
        duration: '2025',
        title: "Contributed to developing an AI-powered logistics platform to solve truck congestion at King Abdulaziz Port, Dammam — replacing random queuing with intelligent, real-time scheduling. Recognized by the Eastern Province Deputy Governor and the Eastern Province Development Authority.",
        icon: '/assets/trophy.jfif',
        images: [
            '/assets/experience/porta.jfif',
            '/assets/experience/porta-certificate.png',
        ],
    },
    {
        id: 2,
        name: 'King Fahad Medical City (KFMC)',
        pos: 'Cooperative Training — Software Development',
        duration: 'Jun 2025 - Aug 2025',
        title: "Built a full-stack Management Issue System using ASP.NET Web Forms, C#, and SQL Server. Designed the normalized database, implemented role-based access control with separate Admin/Employee dashboards, and deployed the live application with SMTP notifications.",
        icon: '/assets/aspnet.jfif',
        images: [
            '/assets/experience/kfmc.jfif',
            '/assets/experience/kfmc-certificate.png',
        ],
    },
    {
        id: 3,
        name: 'MECC AI Hackathon',
        pos: 'AI & Data Engineer',
        duration: 'Nov 2025',
        title: "Worked as part of a team building an AI Copilot for equipment inspection deferral decisions in oil & gas facilities — combining a rule-based risk engine (API 571/510/580) with a Random Forest model, cutting evaluation time by 60%.",
        icon: '/assets/ai.jfif',
        images: [
            '/assets/experience/mecc-1.jpeg',
            '/assets/experience/mecc-certificate.png',
            '/assets/experience/mecc-2.jpeg',
            '/assets/experience/mecc-3.jpeg',
            '/assets/experience/mecc-4.jpeg',
        ],
    },
    {
        id: 4,
        name: 'Shahn — Streamathon (KFUPM)',
        pos: 'Team Lead',
        duration: '2025',
        title: "Worked as part of a team building Shahn, a peer-to-peer EV charger marketplace, in under 24 hours — building the frontend, Supabase schema, and payment/webhook integration. An Aramco representative called the execution phenomenal.",
        icon: '/assets/ev.jfif',
        images: [
            '/assets/experience/streamathon.jfif',
        ],
    },
];