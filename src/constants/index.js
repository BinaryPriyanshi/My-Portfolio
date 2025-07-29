import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  // {
  //   year: "2024 - Present",
  //   role: "Senior Full Stack Developer",
  //   company: "Google Inc.",
  //   description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
  //   technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  // },
   {
    year: "JULY'2025-Present",
    role: "Software Engineer 1",
    company: "Globus Learn Corp",
    description: `◦ As part of a 3-person engineering team, architected and built the ‘prepzy.ai‘ platform from the ground up, including
its core CMS and LMS functionalities.
◦ Developed the backend for the Learning Management System (LMS) using Node.js and MySQL, creating APIs for
course creation, student enrollment, and progress tracking.
◦ Engineered the frontend of the Content Management System (CMS) in Next.js, enabling dynamic content updates
and reducing content deployment time by 60%`,
    technologies: ["React.js","Next.js","TypeScript","Tailwind.css","Javascript","MySql","PostgresSql","mongodb"],
  },
    {
    year: "JAN'2025-JUNE'2025",
    role: "Full Stack developer intern",
    company: "Globus Learn Corp",
    description: `◦ Contributed to the initial development of ‘app.prepzy.ai‘, implementing user authentication and building core UI
components with TypeScript and Redux Toolkit.
◦ Developed and integrated a module for user-generated content within the LMS, allowing instructors to create and
manage their own curriculum and assessments.
`,
    technologies: ["React.js","Next.js","TypeScript","Tailwind.css","Javascript","MySql","PostgresSql","mongodb"],
  },
 
  {
    year: "OCT'2024 - DEC'2024",
    role: "Software Developer intern",
    company: "TATA Consultancy Services (TCS)",
    description: `◦ Developed and delivered production-ready webpages using Angular 17, contributing to a 10% increase in website
performance.        
◦ Collaborated with senior engineers to implement robust and efficient code, which led to a 20% reduction in reported
bugs for the features developed`,
    technologies: [ "Angular 16+",,"typescript" ,"react.js", "mySQL"],
  },


];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project3,
    
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "BigBoxKit",
    image: project1,
    
    description:
      "E-commerce platform with React front-end, Node/Express back-end, MongoDB database, and Redux for state management.Implemented filter feature, user authentication and ACID properties in the booking of items, transactions, etc",
    technologies: ["HTML", "CSS", "React","express.js" ,"Node.js", "MongoDB"],
  },
  {
    title:"PDF Editor",
    image: project2,
    
    description:
      "Multi-platform software designed to extract pages, split, merge, mix, and rotate PDF files",
    technologies: ["HTML", "CSS", "javascript"],
  },

  {
    title: "Amazon clone",
    image: project4,
    
    description:
      "A Amazon  website clone front end only using HTML, CSS , Javascript",
    technologies: ["HTML", "CSS", "javascript"],
  },
  {
    title: "Weather App",
    
    image: project4,
    
    description:
      "It is a weather predictiong website which API,HTML, CSS , Javascript to predict weather of any place",
    technologies: ["HTML", "CSS", "javascript", "API"],

  }
];

export const CONTACT = {
  address: "Lucknow",
  
  email: "priyanshi140702@gmail.com",
};
