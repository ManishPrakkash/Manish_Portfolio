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
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/manish-prakkash-03b3a931a/',
    },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/newFramermotion.png',
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
        {
            name: 'Nest.js',
            icon: '/logo/nest.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
    database: [
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'npm',
            icon: '/logo/npm.svg',
        },
        {
            name: 'Postman',
            icon: '/logo/postman.svg',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Engal Sandhai',
        slug: 'engal-sandhai',
        liveUrl: 'https://engal-sandhai.web.app/',
        sourceCode: 'https://github.com/ManishPrakkash/Engal-Sandhai',
        year: 2026,
        description: `
  <strong>Problem:</strong> The college campus vegetable store lacked an efficient way to manage daily stock and process orders for over 300 faculty members, relying on manual billing and causing stock overselling issues.<br/><br/>

  <strong>Solution:</strong> Built Engal Sandhai, a web-based, intranet-only billing and realtime stock management system connecting 300+ daily active faculty buyers with admin staff. The platform streamlines orders, handles static QR-based payments, and perfectly syncs inventory.<br/><br/>

  <strong>Key Features:</strong><br/>
  <ul>
    <li>⚡ <strong>Realtime Updates:</strong> Instant stock sync and live new-order notifications across all connected clients via WebSockets.</li>
    <li>🧮 <strong>Atomic Transactions:</strong> Multi-item order processing with atomic stock decrements to completely prevent race conditions and overselling.</li>
    <li>🔐 <strong>Role-Based Auth:</strong> Employee ID-based authentication with forced password resets and strict per-order session rules (auto-logout after payment upload).</li>
    <li>🛍️ <strong>Purchasing & Billing:</strong> Comprehensive buying panel with cart management, automated bill generation, and payment screenshot uploads.</li>
    <li>🛠️ <strong>Admin Dashboard:</strong> Full control over daily stock updates, price management, manual payment verification, and order reverting.</li>
  </ul><br/>

  <strong>Technical Implementation:</strong>
  <ul>
    <li>Architected a highly responsive real-time backend using Firebase Authentication and Firestore database.</li>
    <li>Implemented WebSockets for live stock synchronization and instant admin notifications.</li>
    <li>Ensured data integrity during high-concurrency periods using atomic Firestore transactions.</li>
    <li>Deployed as a lightweight, intranet-only self-hosted stack eliminating the need for paid cloud infrastructure.</li>
  </ul><br/>

  <strong>Impact:</strong> Currently in active production use by 300+ college staff members daily, completely digitizing the campus vegetable store's billing and inventory workflow.
`,
        role: `
  <strong>Backend Developer & Deployment Engineer</strong><br/>
  Led the backend architecture and production deployment:<br/>
  <ul>
    <li>🗄️ <strong>Database Architecture:</strong> Designed the Firestore schema for users, orders, and real-time stock tracking.</li>
    <li>⚡ <strong>Atomic Transactions:</strong> Engineered the critical order-processing logic using Firestore atomic transactions to prevent overselling during peak purchase times.</li>
    <li>📡 <strong>Realtime Infrastructure:</strong> Integrated WebSockets and Firestore listeners for instant state synchronization across 300+ concurrent clients.</li>
    <li>🔐 <strong>Security & Auth:</strong> Configured Firebase Auth and security rules for strict role-based access control between Admin faculty and standard users.</li>
    <li>🚀 <strong>Deployment:</strong> Configured and deployed the entire system on a local intranet-only environment for zero-cost, high-speed operation.</li>
  </ul>
`,
        techStack: [
            'React',
            'Firebase',
            'Firestore',
            'WebSockets',
            'Tailwind CSS',
            'TypeScript',
        ],
        thumbnail: '/projects/thumbnail/engal-sandhai.png',
        longThumbnail: '/projects/long/engal-sandhai.png',
        images: [
            '/projects/images/engal-sandhai1.png',
            '/projects/images/engal-sandhai2.png',
            '/projects/images/engal-sandhai3.png',
        ],
    },

    {
        title: 'Cloud Meter',
        slug: 'cloud-meter',
        liveUrl: 'https://www.npmjs.com/package/cloud-meter',
        sourceCode: 'https://github.com/ManishPrakkash/Cloud-Meter',
        year: 2025,
        description: `
  <strong>Problem:</strong> Most backend performance issues in production stem from poorly implemented pagination — unbounded queries, deep offsets, missing limits, and unstable sorting — that go undetected until they cause real scaling failures.<br/><br/>

  <strong>Solution:</strong> Built Cloud Meter, a production-grade CLI tool published to npm that statically analyzes backend codebases (no runtime required) using AST parsing to detect pagination anti-patterns, score the codebase from 0–100, and deliver actionable fix recommendations.<br/><br/>

  <strong>Key Features:</strong><br/>
  <ul>
    <li>☁️ <strong>Static AST Analysis:</strong> Scans JS/TS files, SQL queries, and ORM patterns without executing any code</li>
    <li>📊 <strong>Scoring Engine:</strong> 0–100 score with severity-based deductions — Missing LIMIT (−30), Deep OFFSET (−20), No ORDER BY (−15), and more</li>
    <li>🔍 <strong>12 Detection Rules:</strong> Catches missing LIMIT, deep OFFSET, unstable cursors, unbounded endpoints, dynamic sort injection, infinite scroll risks, and concurrent write exposure</li>
    <li>🛠️ <strong>Self-Guiding CLI:</strong> Every command outputs what to run next — fully interactive or headless CI mode</li>
    <li>⚙️ <strong>Config System:</strong> Project-level <code>cloud-meter.config.json</code> with saved defaults for path, output mode, severity threshold, and ignored directories</li>
    <li>🚦 <strong>CI/CD Integration:</strong> <code>--mode ci</code> exits with code 1 when findings exceed configured severity threshold — drop into any pipeline</li>
  </ul><br/>

  <strong>Technical Implementation:</strong>
  <ul>
    <li>Built CLI with Node.js and TypeScript, published as <code>cloud-meter</code> on npm with global install support</li>
    <li>Implemented AST-based pattern matching for Prisma, Mongoose, Sequelize, TypeORM, raw SQL, and GraphQL Relay-style resolvers</li>
    <li>Designed a modular rulebook with configurable severity weights and heuristic penalties for dynamic sorting and concurrency risk</li>
    <li>Added framework detection for Express, NestJS, Fastify, and Koa route/controller/service layers</li>
    <li>Supported monorepo structures with auto-detection of <code>apps/api</code>, <code>services/api</code>, and <code>backend</code> directories</li>
    <li>Persisted analysis cache for <code>recommend</code> command to serve fix recipes from the last scan without re-running</li>
  </ul><br/>

  <strong>Impact:</strong> Delivered a zero-runtime, production-grade CLI that catches pagination scaling risks before they hit production — installable in one command, CI-ready out of the box, and covering the full ORM, SQL, and GraphQL ecosystem.
`,
        role: `
  <strong>CLI Tool Author & Publisher</strong><br/>
  Designed, built, and published the full tool end-to-end:<br/>
  <ul>
    <li>🏗️ <strong>Architecture:</strong> Designed the modular command structure (<code>analyze</code>, <code>init</code>, <code>recommend</code>, <code>doctor</code>, <code>config</code>) with a shared config loader and analysis cache</li>
    <li>🔬 <strong>Detection Engine:</strong> Implemented 12 AST-based detection rules targeting pagination anti-patterns across ORMs, raw SQL, and GraphQL resolvers</li>
    <li>📈 <strong>Scoring Model:</strong> Built the severity-weighted deduction system with grade thresholds (Production Grade → Critical)</li>
    <li>🚦 <strong>CI/CD Mode:</strong> Wired up non-interactive <code>--mode ci</code> with exit codes and JSON output for pipeline integration</li>
    <li>📦 <strong>npm Publishing:</strong> Packaged and published to npm as <code>cloud-meter</code> with global CLI entrypoint and TypeScript type checking</li>
    <li>🧪 <strong>Testing & Tooling:</strong> Added test suite, build pipeline, and local link workflow for iterative development</li>
  </ul>
`,
        techStack: [
            'AST Parsing',
            'npm CLI',
            'GraphQL',
            'TypeScript',
            'Prisma',
        ],
        thumbnail: '/projects/thumbnail/project3.png',
        longThumbnail: '/projects/long/project3.png',
        images: [
            '/projects/images/project3-1.png',
            '/projects/images/project3-2.png',
            '/projects/images/project3-3.png',
        ],
    },
    {
        title: 'Artifex',
        slug: 'artifex',
        liveUrl: 'https://artifex-22767.firebaseapp.com',
        sourceCode: 'https://github.com/ManishPrakkash/Artifex',
        year: 2025,
        description: `
  <strong>Problem:</strong> Building multi-agent AI systems requires deep technical knowledge of agent frameworks, architecture design, and Python code generation — a complex, time-consuming process inaccessible to most developers without specialist expertise.<br/><br/>

  <strong>Solution:</strong> Built Artifex, a next-generation AI agent builder that converts natural language requirements into complete, production-ready multi-agent Python systems using Google ADK, featuring a FastAPI/WebSocket backend, a visual Next.js frontend with real-time graph visualization, and a meta-agent orchestrator that runs sub-agents for requirements analysis, architecture planning, tool generation, and code output.<br/><br/>

  <strong>Key Features:</strong><br/>
  <ul>
    <li>🧠 <strong>Meta-Agent Orchestration:</strong> Google ADK-powered orchestrator chains specialized sub-agents (Requirements Analyzer → Architecture Planner → Agent Builder → Tool Builder → Code Generator → Validator) to convert free-text into executable Python projects</li>
    <li>📊 <strong>Visual Agent Graph:</strong> Real-time ReactFlow architecture visualization streamed over WebSocket — shows agent nodes, tool connections, and sub-agent hierarchies as they are built</li>
    <li>🔧 <strong>Custom Tool Generation:</strong> Generates Python tool functions with error handling for Google Search, URL context, API integrations, data processing, and file I/O</li>
    <li>💻 <strong>Integrated Code Editor:</strong> Syntax-highlighted TipTap editor for previewing and editing the generated <code>agent.py</code>, <code>tools.py</code>, <code>requirements.txt</code>, and <code>README.md</code> inline</li>
    <li>🔄 <strong>4 Agent Type Support:</strong> Generates LLM Agent, Sequential Agent, Parallel Agent, and Loop Agent configurations with correct ADK wiring</li>
    <li>🚀 <strong>Session Management:</strong> Persistent config state across the full creation conversation — requirements, architecture, tool specs, and generated files survive multi-turn sessions</li>
  </ul><br/>

  <strong>Technical Implementation:</strong><br/>
  <ul>
    <li>Built meta-agent system with Google ADK, coordinating 6 specialized sub-agents via a root orchestrator defined in Pydantic config schemas</li>
    <li>Designed FastAPI REST + WebSocket API with live progress streaming to the frontend during code generation</li>
    <li>Built Next.js frontend with ReactFlow for interactive agent graph visualization, TipTap for code editing, and Tailwind CSS + shadcn/ui for the interface</li>
    <li>Implemented config-to-code pipeline converting validated Pydantic agent configs into complete Python ADK project files</li>
    <li>Supported 8+ builtin tools (google_search, url_context, load_memory, transfer_to_agent, exit_loop, etc.) and arbitrary custom Python tool generation</li>
    <li>Auto-detected monorepo structures and generated project-ready output with <code>requirements.txt</code> and <code>README.md</code> for immediate use</li>
  </ul><br/>

  <strong>Impact:</strong> Delivered a full-stack AI agent builder that collapses multi-agent system development from hours of manual coding into a single natural language conversation — producing complete, runnable Python ADK projects with visual architecture previews and integrated editing.
`,
        role: `
  <strong>Full-Stack AI Systems Developer</strong><br/>
  Designed and built the entire platform end-to-end:<br/>
  <ul>
    <li>🤖 <strong>Meta-Agent System:</strong> Architected the Google ADK orchestrator and 6 specialized sub-agents with Pydantic-validated config schemas and prompt templates</li>
    <li>🔧 <strong>Code Generation Pipeline:</strong> Built the config-to-code engine that converts structured agent configs into complete, production-ready Python ADK projects</li>
    <li>🌐 <strong>Backend API:</strong> Developed FastAPI REST and WebSocket endpoints for real-time progress streaming and session management throughout the agent creation flow</li>
    <li>🎨 <strong>Frontend Interface:</strong> Built the Next.js app with ReactFlow agent graph visualization, TipTap code editor, and full dark/light mode support with shadcn/ui components</li>
    <li>🛠️ <strong>Tool Builder:</strong> Implemented the custom Python tool generator supporting API integrations, data processing tools, file I/O, and all 8+ Google ADK builtin tools</li>
    <li>📦 <strong>Project Output:</strong> Wired up the full file generation pipeline producing <code>agent.py</code>, <code>tools.py</code>, <code>requirements.txt</code>, and <code>README.md</code> as a downloadable Python project</li>
  </ul>
`,
        techStack: [
            'Google ADK',
            'WebSockets',
            'FastAPI',
            'Python',
            'ReactFlow',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/project4.png',
        longThumbnail: '/projects/long/project4.png',
        images: [
            '/projects/images/project4-1.png',
            '/projects/images/project4-2.png',
            '/projects/images/project4-3.png',
        ],
    },

    {
        title: 'Secure Paste',
        slug: 'secure-paste',
        liveUrl:
            'https://chromewebstore.google.com/detail/hicjfchdpgbghjilelabhpilcfnlggnk',
        sourceCode: 'https://github.com/ManishPrakkash/Secure-Paste',
        year: 2025,
        description: `
  <strong>Problem:</strong> Developers routinely paste code containing API keys, tokens, database credentials, and private keys into AI platforms like ChatGPT, Claude, and Gemini — accidentally leaking sensitive secrets to third-party services with no warning or protection.<br/><br/>

  <strong>Solution:</strong> Built Secure Paste, a Chrome extension that automatically intercepts paste events on AI platforms, detects secrets using 33 built-in regex patterns, replaces them with reversible masked tokens in real-time, and restores original values when copying AI responses back — all processed 100% locally with no cloud involvement.<br/><br/>

  <strong>Key Features:</strong><br/>
  <ul>
    <li>🔐 <strong>33 Detection Patterns:</strong> Covers AWS keys, GitHub/GitLab tokens, JWT/Bearer tokens, OpenAI/Stripe/Slack API keys, RSA/SSH/PGP private keys, PostgreSQL/MongoDB/Redis URLs, and more — across 8 toggleable categories</li>
    <li>⚡ <strong>Real-time Masking:</strong> Secrets replaced instantly on paste with reversible tagged tokens (e.g. <code>[AWS_KEY#a3f7]</code>) before the AI platform ever sees the content</li>
    <li>🔄 <strong>Automatic Restoration:</strong> Copying AI responses via Ctrl+C or platform copy buttons automatically restores original secret values into the clipboard</li>
    <li>🎯 <strong>5 Platform Support:</strong> Pre-configured for ChatGPT, Claude, Google Gemini, Perplexity, and Grok with per-site enable/disable control</li>
    <li>⚙️ <strong>Custom Patterns:</strong> Full regex support for adding company-specific secret patterns with per-pattern usage statistics</li>
    <li>🔒 <strong>Zero Trust Architecture:</strong> 100% local processing — no servers, no telemetry, no cloud, minimal permissions (storage only), full open-source audit trail</li>
  </ul><br/>

  <strong>Technical Implementation:</strong>
  <ul>
    <li>Built as a Chrome Manifest V3 extension using TypeScript (strict mode), React 18, Vite 5, and Tailwind CSS</li>
    <li>Implemented content scripts that intercept paste events and walk the DOM to find and replace secret patterns before input reaches AI platform text fields</li>
    <li>Designed a bidirectional masking engine: forward pass replaces secrets with tagged tokens keyed by short hash; reverse pass restores originals on clipboard copy</li>
    <li>Architected 8 category groups (Cloud, API tokens, Private keys, Passwords, Database, Network, PII, Custom) with individual toggles stored via Chrome <code>storage</code> API</li>
    <li>Wrote 33 production-grade regex patterns covering broad secret formats with context-aware matching to minimize false positives</li>
    <li>Published to Chrome Web Store with production build pipeline via Vite and TypeScript type-checking enforced in CI</li>
  </ul><br/>

  <strong>Impact:</strong> Delivered a published Chrome extension that silently protects developers from credential leaks on every AI paste — zero config, zero cloud, 33 pattern classes, live on the Chrome Web Store.
`,
        role: `
  <strong>Browser Extension Developer</strong><br/>
  Designed and shipped the full extension end-to-end:<br/>
  <ul>
    <li>🔍 <strong>Detection Engine:</strong> Wrote 33 regex patterns across 8 secret categories and built the context-aware matching pipeline to minimize false positives</li>
    <li>🔄 <strong>Masking System:</strong> Implemented the bidirectional token engine — forward masking on paste and reverse restoration on clipboard copy, with short-hash keyed token mapping</li>
    <li>🧩 <strong>Content Scripts:</strong> Built Chrome MV3 content scripts that hook into paste and copy events across ChatGPT, Claude, Gemini, Perplexity, and Grok DOM structures</li>
    <li>🎨 <strong>Popup UI:</strong> Built the React 18 + Tailwind CSS settings panel with category toggles, custom pattern editor, per-site controls, and usage statistics</li>
    <li>⚙️ <strong>Storage Layer:</strong> Wired all user preferences and custom patterns to the Chrome <code>storage</code> API with live sync between content scripts and popup</li>
    <li>📦 <strong>Publishing:</strong> Packaged and published the extension to the Chrome Web Store with Vite production build and TypeScript strict-mode enforcement</li>
  </ul>
`,
        techStack: [
            'TypeScript',
            'Chrome Extension',
            'Manifest V3',
            'React',
            'Vite',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/project4.png',
        longThumbnail: '/projects/long/project4.png',
        images: [
            '/projects/images/project4-1.png',
            '/projects/images/project4-2.png',
            '/projects/images/project4-3.png',
        ],
    },
    {
        title: 'CREDENT',
        slug: 'credent',
        sourceCode: 'https://github.com/ManishPrakkash/CRED',
        year: 2025,
        description: `
  <strong>Problem:</strong> Educational institutions lacked a structured mobile system for advisors to manage staff performance points — submissions were manual, tracking was opaque, and there was no real-time visibility into approvals, rejections, or leaderboard standings.<br/><br/>

  <strong>Solution:</strong> Built CRED Points, a React Native mobile application using Expo and Supabase that enables advisors to create classes with unique join codes, staff to submit work requests for point approval, and both roles to track points, view leaderboards, and receive real-time notifications — with full role-based access control and row-level security.<br/><br/>

  <strong>Key Features:</strong><br/>
  <ul>
    <li>🏆 <strong>Point Request Workflow:</strong> Staff submit work requests with descriptions → Advisor approves / rejects / requests correction → Points auto-updated → Activity log created for full transparency</li>
    <li>📊 <strong>Real-time Dashboards:</strong> Role-specific dashboards (Staff, Advisor, Representative) auto-refresh every 60 seconds with live point balances, monthly stats, and notification badges</li>
    <li>🏅 <strong>Live Leaderboard:</strong> Class-wide performance rankings updated in real-time — staff compare standing with peers, advisors monitor top performers and engagement levels</li>
    <li>🔐 <strong>Role-Based Access:</strong> Supabase Row-Level Security policies enforce staff / advisor permission boundaries on all database tables — JWT-authenticated API calls throughout</li>
    <li>🔔 <strong>Notifications:</strong> Instant in-app notifications on request approval, rejection, and correction requests — with notification badges on the bottom nav</li>
    <li>🛡️ <strong>Smart Navigation Guards:</strong> Prevents unauthorized route access, redirects classless staff to join page, disables back navigation on sensitive screens, and conditionally renders bottom nav based on user state</li>
  </ul><br/>

  <strong>Technical Implementation:</strong>
  <ul>
    <li>Built cross-platform mobile app with Expo SDK 54, React Native 0.81, and TypeScript using Expo Router file-based routing</li>
    <li>Styled with NativeWind (Tailwind CSS for React Native) and custom components with Linear Gradients and Lucide icons</li>
    <li>Integrated Supabase for PostgreSQL database, email/password authentication, RLS policies, and real-time data sync</li>
    <li>Managed auth and class state globally via React Context API with AsyncStorage for local session persistence</li>
    <li>Architected 6-table schema: users, classes, joined_classes, requests, activities, notifications — with cascade delete and many-to-many staff-class relationships</li>
    <li>Added React Native Reanimated animations, safe area insets for gesture navigation devices, and auto-padding for 3-button navigation bars</li>
  </ul><br/>

  <strong>Impact:</strong> Delivered a production-ready mobile app serving two distinct roles — staff and advisors — with a full request lifecycle, live leaderboards, role-gated navigation, and Supabase-backed real-time data across Android and iOS.
`,
        role: `
  <strong>Full-Stack Mobile Developer</strong><br/>
  Designed and built the entire system end-to-end:<br/>
  <ul>
    <li>📱 <strong>Mobile App:</strong> Built the full Expo + React Native app with file-based Expo Router navigation, role-specific dashboards, and NativeWind styling</li>
    <li>🗄️ <strong>Database Design:</strong> Designed the 6-table Supabase PostgreSQL schema with RLS policies, cascade operations, and indexed relationships for staff-class-request flows</li>
    <li>🔐 <strong>Auth & Security:</strong> Wired up Supabase email/password auth with JWT token management, row-level security enforcement, and role-based navigation guards</li>
    <li>🔄 <strong>Request Workflow:</strong> Implemented the full approve/reject/correction lifecycle with automatic point updates, activity logging, and notification dispatch on each state change</li>
    <li>🏆 <strong>Leaderboard & Analytics:</strong> Built real-time class leaderboards and advisor performance analytics with 60-second auto-refresh and live notification badges</li>
    <li>⚙️ <strong>State Management:</strong> Architected AuthContext and ClassContext providers with AsyncStorage persistence for seamless session restore and class state across app restarts</li>
  </ul>
`,
        techStack: [
            'React Native',
            'Expo',
            'PostgreSQL',
            'TypeScript',
            'Supabase',
            'NativeWind',
        ],
        thumbnail: '/projects/thumbnail/project4.png',
        longThumbnail: '/projects/long/project4.png',
        images: [
            '/projects/images/project4-1.png',
            '/projects/images/project4-2.png',
            '/projects/images/project4-3.png',
        ],
    },
    {
        title: 'Quizaroo',
        slug: 'quizaroo',
        liveUrl: 'https://manishprakkash.github.io/Quizaroo/',
        sourceCode: 'https://github.com/ManishPrakkash/Quizaroo',
        year: 2025,
        description: `
  <strong>Problem:</strong> Developers learning JavaScript needed an engaging, self-paced quiz platform that covers the full JS spectrum — from basics to ES6+ advanced patterns — with timed pressure and instant feedback to reinforce learning.<br/><br/>

  <strong>Solution:</strong> Built Quizaroo, a modern interactive JavaScript quiz application using vanilla JavaScript, Tailwind CSS, and a clean modular architecture — featuring 20 curated questions across 4 difficulty levels, a 10-second countdown timer per question, instant answer feedback, and a full results breakdown with answer review.<br/><br/>

  <strong>Key Features:</strong><br/>
  <ul>
    <li>🎯 <strong>20 Levelled Questions:</strong> 4 difficulty tiers — Level 1: Basics, Level 2: Core JS, Level 3: ES6 Features, Level 4: Advanced JS — 5 questions each</li>
    <li>⏱️ <strong>10-Second Timer:</strong> Per-question visual countdown with automatic progression on timeout</li>
    <li>✅ <strong>Instant Feedback:</strong> Correct/incorrect highlights immediately after each answer selection</li>
    <li>📊 <strong>Detailed Results:</strong> Full score breakdown with per-question answer review at the end</li>
    <li>♿ <strong>Accessibility:</strong> Semantic HTML, ARIA labels, keyboard navigation support, and color contrast compliance</li>
    <li>🚀 <strong>CI/CD Pipeline:</strong> GitHub Actions workflow for automated linting and deployment to GitHub Pages on push to main</li>
  </ul><br/>

  <strong>Technical Implementation:</strong>
  <ul>
    <li>Built with zero external runtime dependencies — pure vanilla JavaScript using ES6+ features (classes, arrow functions, template literals, modules)</li>
    <li>Followed modular architecture: <code>app.js</code> (controller), <code>quiz.js</code> (state & scoring), <code>timer.js</code> (reusable countdown), <code>questions.js</code> (data), <code>ui.js</code> (DOM rendering)</li>
    <li>Applied Module, Observer, Singleton, and State Management patterns for clean separation of concerns</li>
    <li>Styled with Tailwind CSS and custom CSS with dark mode via system preference detection</li>
    <li>Used event delegation and efficient DOM manipulation for minimal memory footprint and optimized re-renders</li>
    <li>Automated deployment via GitHub Actions to GitHub Pages with lint checks on every push</li>
  </ul><br/>

  <strong>Impact:</strong> Delivered a fully accessible, zero-dependency JavaScript quiz app with CI/CD automation, modular architecture, and 4-tier difficulty progression — live on GitHub Pages and ready to extend with new question sets.
`,
        role: `
  <strong>Frontend Developer</strong><br/>
  Designed and built the entire application from scratch:<br/>
  <ul>
    <li>🏗️ <strong>Architecture:</strong> Designed the 5-module vanilla JS architecture with clear separation between state, timer, data, rendering, and app control</li>
    <li>⏱️ <strong>Timer Module:</strong> Built a reusable Observer-pattern timer with configurable duration, tick callbacks, and timeout handling</li>
    <li>🎯 <strong>Quiz Engine:</strong> Implemented state management for question progression, scoring, answer tracking, and results compilation</li>
    <li>🎨 <strong>UI Layer:</strong> Wrote all DOM rendering logic in <code>ui.js</code> using Tailwind CSS classes with smooth transitions, progress indicators, and responsive layout</li>
    <li>♿ <strong>Accessibility:</strong> Added semantic HTML, ARIA labels, focus indicators, keyboard navigation, and WCAG color contrast compliance</li>
    <li>🚀 <strong>CI/CD:</strong> Configured GitHub Actions workflow for automated lint checks and GitHub Pages deployment on every push to main</li>
  </ul>
`,
        techStack: ['JavaScript', 'GitHub Pages', 'GitHub Actions', 'HTML5'],
        thumbnail: '/projects/thumbnail/project3.png',
        longThumbnail: '/projects/long/project3.png',
        images: [
            '/projects/images/project3-1.png',
            '/projects/images/project3-2.png',
            '/projects/images/project3-3.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Full Stack Developer',
        company: 'EFIQ Solutions',
        duration: 'May 2026 - Present',
        url: 'https://efiqsolutions.com/',
    },
    {
        title: 'App Developer',
        company: 'Technovanam',
        duration: 'Mar 2026 - Apr 2026',
        url: 'https://technovanam.in/',
        certificateUrl: '/certificates/technovanam.jpg',
    },
    {
        title: 'Web Developer',
        company: 'Cognifyz Technologies',
        duration: 'Jul 2025',
    },
];
