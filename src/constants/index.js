import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";

// Hero section content
export const HERO_CONTENT = `I am a Senior Front-End Developer with 7+ years of experience building high-performance, scalable web and mobile applications. Expert in React, Next.js, and TypeScript, I specialize in creating dynamic user interfaces and reusable components. My passion lies in delivering seamless user experiences through optimized code and innovative solutions.`;

// About section content
export const ABOUT_TEXT = `With over 7 years of expertise in front-end development, I have led and contributed to projects that focus on React, Next.js, and TypeScript. My experience spans across designing scalable, responsive applications and integrating third-party libraries and APIs for enhanced functionality. I am skilled in using Redux for state management and implementing best practices in testing with Jest. I am driven by a desire to build intuitive, high-quality products that align with business goals while continuously learning and applying cutting-edge technologies.`;

// Experience section content
export const EXPERIENCES = [
  {
    year: "Sep 2023 - Present",
    role: "Sr. Frontend Developer",
    company: "Starbucks",
    description: `Designed reusable React components and hooks to enhance performance and consistency. Integrated third-party APIs to improve functionality and scalability. Implemented responsive design principles across various devices and leveraged Redux Toolkit for efficient state management.`,
    technologies: [
      "React 18",
      "Redux",
      "Redux Toolkit",
      "TypeScript",
      "SCSS",
      "NodeJS",
      "Jest",
    ],
  },
  {
    year: "Oct 2021 - Aug 2023",
    role: "Web Developer",
    company: "Bureau Veritas",
    description: `Developed user interfaces using React, Bootstrap, and Next.js. Integrated MongoDB for database management and handled unit testing with Jest and Postman. Collaborated with business analysts to ensure technical requirements were met.`,
    technologies: [
      "React 17",
      "Bootstrap",
      "Next.js",
      "NodeJS",
      "MongoDB",
      "Redux",
      "JIRA",
    ],
  },
  {
    year: "Mar 2020 - Sep 2021",
    role: "UI Developer",
    company: "Refresh Financial",
    description: `Built a reusable component library for mobile applications using React Native. Developed a single-page application with responsive design and incorporated third-party APIs for real-time updates.`,
    technologies: [
      "React Native",
      "TypeScript",
      "Docker",
      "Kubernetes",
      "Jest",
      "Material UI",
    ],
  },
  {
    year: "Jan 2019 - Feb 2020",
    role: "UI Developer",
    company: "Acumen Capital Partners",
    description: `Designed and developed screens using React.js and Redux. Conducted unit testing with Mocha and collaborated closely with clients and business analysts.`,
    technologies: [
      "React.js",
      "Redux",
      "JavaScript",
      "jQuery",
      "Mocha",
      "AJAX",
    ],
  },
  {
    year: "Oct 2017 - Dec 2018",
    role: "Web Developer",
    company: "Michelin North America",
    description: `Designed user interfaces with React JS, jQuery, and Bootstrap. Worked on server-side application development using Spring Boot and Hibernate.`,
    technologies: [
      "ReactJS",
      "NodeJS",
      "jQuery",
      "Bootstrap",
      "Spring Boot",
      "JIRA",
    ],
  },
];

// Projects section content
export const PROJECTS = [
  {
    title: "Personal Expense Tracker",
    image: project1,
    description:
      "A React-based application for tracking personal expenses. Features include adding, editing, and categorizing expenses, as well as visualizing financial data through charts. Utilized Firebase for user authentication and real-time data storage.",
    technologies: ["React", "Redux", "JavaScript", "Chart.js", "Firebase"],
    link: "https://codechallange-prerak-expense-tracker.netlify.app/",
  },
  {
    title: "Wordle Game Clone",
    image: project2,
    description:
      "A fully functional clone of the popular Wordle game built with React. Includes features like keyboard input, word validation, and dynamic game modes (easy and hard). Designed with responsive layouts to ensure a smooth experience across devices.",
    technologies: ["React", "JavaScript", "CSS", "Framer Motion"],
    link: "https://codechallange-prerak-wordle-game.netlify.app/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A responsive portfolio website showcasing my projects, skills, and contact information. Built using React and Tailwind CSS, it highlights my work in front-end development with a modern, mobile-first design.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "GitHub Pages"],
    link: "https://22prerak22.github.io/portfolio/",
  },
  {
    title: "AI-Powered 3D T-Shirt Designer",
    image: project4,
    description:
      "A 3D T-Shirt color picker that allows users to visualize and customize T-Shirt colors in real-time. Features AI-based color suggestions and animations for an engaging user experience. Built using Three.js and OpenAI API.",
    technologies: ["Three.js", "OpenAI API", "CSS", "JavaScript"],
    link: "https://dynamic-smakager-59803e.netlify.app/",
  },
];

// Contact information
export const CONTACT = {
  address: "6 Denim Drive, Brampton, L6P1K4",
  phoneNo: "+1 647 544 0695",
  email: "patelprerak226@gmail.com",
};
