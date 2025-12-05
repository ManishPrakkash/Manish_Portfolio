import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'manishprakkash@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Manish, I am reaching out to you because...',

    
    upworkProfile: 'https://www.linkedin.com/in/manish-prakkash-03b3a931a/',
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
  <strong>Problem:</strong> Fitness enthusiasts needed a centralized platform to track health metrics, manage profiles, and securely store personal fitness data with seamless authentication.<br/><br/>

  <strong>Solution:</strong> Built Fitrack, a full-stack fitness tracking application combining React frontend with Django REST API backend, featuring JWT-based authentication and real-time MongoDB Atlas integration for personalized health monitoring.<br/><br/>

  <strong>Key Features:</strong><br/>
  <ul>
    <li>🔐 <strong>Authentication:</strong> Secure login/signup using JWT-based token system with refresh tokens for persistent sessions</li>
    <li>👤 <strong>Profile Management:</strong> Users can manage and update their fitness profile with real-time data synchronization</li>
    <li>📊 <strong>Data Storage:</strong> Real-time data handling with MongoDB Atlas integration using Djongo/MongoEngine</li>
    <li>🌐 <strong>REST API:</strong> Django-powered RESTful endpoints for seamless frontend-backend interaction</li>
    <li>🔒 <strong>Secure Credentials:</strong> Passwords are hashed and stored securely following industry best practices</li>
    <li>🔗 <strong>CORS Setup:</strong> Cross-origin requests enabled for React-Django communication via Axios</li>
  </ul><br/>

  <strong>Technical Implementation:</strong>
  <ul>
    <li>Connected Django with MongoDB Atlas using Djongo/MongoEngine for NoSQL data modeling</li>
    <li>Implemented JWT authentication with refresh tokens for persistent, secure sessions</li>
    <li>Built dynamic, responsive frontend components using React and Tailwind CSS</li>
    <li>Configured and consumed APIs via Axios with state-managed responses</li>
    <li>Modular project architecture with clear separation between frontend and backend layers</li>
  </ul><br/>

  <strong>Impact:</strong> Delivered a production-ready fitness tracking platform with enterprise-grade security, scalable architecture, and seamless user experience across authentication, data management, and profile customization.
`,
        role: `
  <strong>Full-Stack Developer</strong><br/>
  Led end-to-end development and integration:<br/>
  <ul>
    <li>✅ <strong>Backend:</strong> Developed Django REST API and connected to MongoDB Atlas with secure data models</li>
    <li>🔐 <strong>Auth System:</strong> Implemented JWT-based secure login and signup system with token refresh</li>
    <li>📁 <strong>Models:</strong> Designed MongoDB schemas for storing user and fitness data with validation</li>
    <li>🎨 <strong>Frontend:</strong> Built a clean, responsive UI using React and Tailwind CSS with modern design patterns</li>
    <li>🔄 <strong>Data Handling:</strong> Used Axios for API calls and managed client-side state efficiently</li>
    <li>🛠️ <strong>Deployment Ready:</strong> Structured codebase for deployment readiness with modular architecture</li>
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
        duration: 'Jul 2025',
    },

];
