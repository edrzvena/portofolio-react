// Versi Bahasa Inggris dari seluruh teks situs.
// Struktur harus identik dengan id.js (urutan item array harus sama, karena di komponen
// teks digabung dengan data statis berdasarkan index).
const en = {
  nav: {
    skills: 'Skills',
    experience: 'Experience',
    education: 'Education',
    certificates: 'Certificates',
    projects: 'Projects',
    contact: 'Contact',
  },

  hero: {
    quote: 'Talk is cheap. Show me the code.',
    quoteAuthor: '— Linus Torvalds',
    role: '// Web Developer',
    greeting: "Hi, I'm",
    name: 'Pedro Widya',
    greetingSuffix: '',
    viewProjects: 'View Projects',
    downloadCV: 'Download CV',
    stats: ['Projects', 'Certifications', 'Technologies'],
  },

  skills: {
    heading: 'Tech Stack',
    toolsHeading: 'Tools & Others',
    tools: ['GitHub', 'REST API', 'AI-Assisted Development (Claude)'],
  },

  experience: {
    heading: 'Experience',
    items: [
      {
        title: 'Marketing Support',
        tasks: [
          'Compiled and monitored store KPIs as an instrument for evaluating branch operational performance, and reported assessment results to management on a regular basis.',
          'Conducted assessments of visual merchandising standards and store service quality by reviewing CCTV footage in accordance with company operating standards.',
          'Managed the CCTV equipment procurement process — from purchase coordination and invoice verification to administrative documentation for store needs.',
          'Supported marketing campaign execution through the management and distribution of promotional materials (TVC, digital media, and print) so marketing strategies hit their target.',
          'Coordinated cross-functionally between the Marketing team and store Supervisors in assessment, performance reporting, and follow-up of branch evaluation results.',
        ],
      },
      {
        title: 'Administration',
        tasks: [
          'Managed online store operations, including product management, order processing, and sales performance monitoring to ensure smooth digital transactions.',
          'Prepared and accurately entered daily sales reports, including recording cash inflows and outflows as material for operational financial evaluation.',
          'Maintained orderly, well-documented petty cash and main cash records to support store financial transparency and accountability.',
        ],
      },
    ],
  },

  education: {
    heading: 'Education',
    items: [
      {
        title: 'Informatics Engineering',
        institution: 'Universitas Buddhi Dharma',
        details: [
          'GPA: 3.51.',
          'Focused on modern web development using React and PostgreSQL.',
          'NLP, Data Mining, and Text Mining development.',
        ],
      },
      {
        title: 'Thesis Project',
        institution:
          'Implementation of emotion sentiment in song lyrics using a Discord Bot with a lexicon-based sentiment analysis method',
        details: [
          'Built a Discord Bot to play songs.',
          'Built a Discord Bot to analyze the emotional sentiment of songs.',
          'Developed Next, Previous, Pause, Shut Down, and Show Lyric controls for the Discord Bot.',
        ],
      },
    ],
  },

  certificates: {
    heading: 'Certificates',
    verify: 'Verify Credential',
    items: [
      {
        title: 'Claude 101',
        description:
          'Prompt engineering, Projects, Artifacts, Skills, MCP integration, Enterprise Search, and Research mode.',
      },
      {
        title: 'Claude Code 101',
        description:
          'AI coding agent workflows: Explore→Plan→Code→Commit, context management, CLAUDE.md, subagents, MCP servers, and hooks.',
      },
    ],
  },

  projects: {
    heading: 'Projects',
    viewAll: 'View all on GitHub',
    readMore: 'Read more',
    readLess: 'Read less',
    viewProject: 'View Project',
    items: [
      {
        title: 'Daily Standup',
        description:
          'A web app that helps developers create daily standup reports instantly: users just type what they did in everyday language, and the app automatically turns it into a clean report ready to share with the team.',
      },
      {
        title: 'Code Explainer',
        description:
          'A web app that explains code syntax using Claude AI: choose your language and get an explanation for each block of logic.',
      },
      {
        title: 'POS Cashier — Point of Sale Web App',
        description:
          'Built a web-based Point of Sale (POS) cashier app to support daily sales transactions for cafe/retail businesses, using React and Supabase.',
      },
      {
        title: 'Bot Discord',
        description: 'A bot for playing music on the Discord platform.',
      },
      {
        title: 'Implementation Of Text Mining For Emotion Detection',
        description:
          'Detects emotional sentiment from text using text mining techniques to analyze and identify the emotions contained in sentences.',
      },
    ],
  },

  contact: {
    heading: 'Contact Me',
    formHeading: 'Send me a message',
    namePh: 'Your Name',
    emailPh: 'Your Email',
    messagePh: 'Your Message',
    send: 'Send Message',
    sending: 'Sending…',
    success: "Message sent, thanks! I'll get back to you ASAP.",
    error: 'Failed to send. Please try again, or email me directly at widyadharta@gmail.com.',
  },

  footer: {
    rights: '© Pedro Widya. All rights reserved.',
  },
};

export default en;
