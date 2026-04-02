const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 30, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs =  [
  // --- Frontend ---
  {
    name: "JavaScript",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "HTML5",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind CSS",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
  },

  // --- Backend ---
  {
    name: "Node.js",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
  },
  

  // --- Bases de Datos ---
  {
    name: "PostgreSQL",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },

  // --- Herramientas ---
  {
    name: "Git",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "Docker",
    imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Gonzalo has been a catalyst for our digital transformation. His ability to architect end-to-end solutions and automate mission-critical auditing processes has set a new standard for our departmental efficiency.",
    employer: "Department of Labor, Entre Ríos",
    imgPath: "/images/gob er.jpg",
    logoPath: "/images/gob er.jpg",
    title: "Lead Software Architect & Full Stack Developer",
    date: "October 2024 - Present",
    responsibilities: [
      "Architected and engineered from scratch a centralized digital ecosystem to automate 100% of the department's core administrative and legal workflows[cite: 10, 11, 12].",
      "Developed a high-performance ETL engine to parse and cross-reference thousands of financial records from national banks, identifying critical data discrepancies and ensuring institutional transparency.",
      "Mitigated 'orphaned data' issues by tracing data origins and implementing real-time validation layers to eliminate human-entry errors in financial reporting[cite: 15].",
      "Designed and deployed a RAG-based AI assistant (Web & WhatsApp) integrated with complex legal knowledge bases to streamline internal queries[cite: 13].",
      "Led a full-scale Linux infrastructure migration and conducted advanced technical training to enhance system reliability and staff autonomy[cite: 15].",
    ],
  },
  {
    review:
      "Gonzalo played a vital role in architecting Kiura’s SaaS infrastructure. His expertise in real-time systems and scalable front-end architectures significantly improved our platform's stability and professional reach.",
    employer: "Kiura",
    imgPath: "/images/kiura.png",
    logoPath: "/images/kiura.png",
    title: "Full Stack Developer",
    date: "March 2024 - September 2024",
    responsibilities: [
      "Designed and developed a scalable Mental Health SaaS platform using React, Node.js, and Express, focusing on high-availability and secure data handling[cite: 16, 17].",
      "Integrated complex real-time features including encrypted video calls and live chat using WebSockets and RESTful APIs[cite: 17, 18].",
      "Engineered professional matching algorithms and secure payment gateway integrations to facilitate seamless healthcare transactions[cite: 18].",
      "Optimized application performance and accessibility, ensuring a responsive user-centered experience across all device types[cite: 19].",
    ],
  },
  {
    review:
      "Gonzalo’s deep-rooted expertise in systems administration and infrastructure optimization provided the essential foundation for our institution's modernization over nearly a decade.",
    imgPath: "/images/gob er.jpg",
    employer: "Government of Entre Ríos",
    logoPath: "/images/gob er.jpg",
    title: "Senior Systems & Infrastructure Analyst",
    date: "January 2015 - February 2024",
    responsibilities: [
      "Managed cross-departmental IT infrastructure for nearly 10 years, ensuring 99.9% uptime for critical public service systems.",
      "Spearheaded the modernization of legacy infrastructure by developing in-house tools to digitize and automate manual administrative workflows[cite: 21].",
      "Coordinated large-scale digital initiatives and security protocols across multiple government departments[cite: 21].",
      "Leveraged deep Linux and network administration knowledge to lead the institution's transition toward modern software development standards[cite: 21].",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
