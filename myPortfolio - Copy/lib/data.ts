import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'manishprakkash@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Manish, I am reaching out to you because...',

    
    upworkProfile: 'https://www.upwork.com/freelancers/manishprakkash',
    cvDownload: '/cv/Manish-Prakkash-CV.pdf',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/ManishPrakkash' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/manish-prakkash-03b3a931a/' },

];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },

        {
            name: 'React',
            icon: '/logo/react.png',
        },

        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },

    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Postman',
            icon: '/logo/postman.svg',
        },
    
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Fitrack Application',
        slug: 'fitrack-application',
        liveUrl: 'https://fitrack-lime.vercel.app/', 
        year: 2025,
        description: `
  A fitness tracking web application with a React frontend and Django backend, designed for personalized health monitoring and secure data management. <br/> <br/>

  Key Features:<br/>
  <ul>
    <li>🔐 Authentication: Secure login/signup using JWT-based token system</li>
    <li>👤 Profile Management: Users can manage and update their fitness profile</li>
    <li>📊 Data Storage: Real-time data handling with MongoDB Atlas integration</li>
    <li>🌐 REST API: Django-powered RESTful endpoints for seamless frontend-backend interaction</li>
    <li>🔒 Secure Credentials: Passwords are hashed and stored securely</li>
    <li>🔗 CORS Setup: Cross-origin requests enabled for React-Django communication</li>
  </ul><br/>

  Technical Highlights:
  <ul>
    <li>Connected Django with MongoDB Atlas using Djongo/MongoEngine</li>
    <li>Implemented JWT authentication with refresh tokens for persistent sessions</li>
    <li>Built dynamic frontend components using React and Tailwind CSS</li>
    <li>Configured and consumed APIs via Axios with state-managed responses</li>
    <li>Modular project architecture with clear separation between frontend and backend</li>
  </ul>
`,
        role: `
  Full-Stack Developer <br/>
  Led the full development and integration process:
  <ul>
    <li>✅ Backend: Developed Django REST API and connected to MongoDB Atlas</li>
    <li>🔐 Auth System: Implemented JWT-based secure login and signup system</li>
    <li>📁 Models: Designed MongoDB schemas for storing user and fitness data</li>
    <li>🎨 Frontend: Built a clean, responsive UI using React, Tailwind CSS</li>
    <li>🔄 Data Handling: Used Axios for API calls and managed client-side state</li>
    <li>🛠️ Deployment Ready: Structured codebase for deployment readiness (CI/CD optional)</li>
  </ul>
`,
        techStack: [
            'React',
            'Django',
            'MongoDB',
            'JWT',
            'Tailwind CSS',
            'Axios',
        ],
        thumbnail: '/projects/thumbnail/fitrack.png',
        longThumbnail: '/projects/long/fitrack.png',
        images: [
            '/projects/images/fitrack1.png',
            '/projects/images/fitrack2.png',
            '/projects/images/fitrack3.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Web Developer',
        company: 'Cognifyz Technologies',
        duration: 'Jul 2025 - Present',
    },

];
