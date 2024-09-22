import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB.`;

export const EXPERIENCES = 
  {
    year: "2024 - Present",
    role: "Software Engineer",
    company: "TCS",
    description: `I am currently developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB","Oauth2.0"],
  };

export const PROJECTS = [
  {
    title: "E-Commerce Shoes Website",
    image: project1,
    url:"https://adi4512.github.io/ecommerce-filtering/",
    description:
      "A fully functional e-commerce website with features like searching,etc.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "MemeGenerator",
    image: project2,
    url:"https://adi4512.github.io/MemeGenerator/",
    description:
      "website that generators random memes..",
    technologies: ["HTML", "CSS", "React", "Node.js", "Api"]
  },
  {
    title: "Portfolio Website",
    image: project3,
    url:"#",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "tailwind css", "framer motion","Threejs","Nextjs"]
  },
  {
    title: "tenzies Game",
    image: project4,
    url:"https://adi4512.github.io/Tenzies-Game/" ,
    description:
      "A Gaming platform to play tenzies,beautifully designed and easy to use.",
    technologies: ["HTML", "CSS", "React", "Express","bootstrap"],
  },
];

export const CONTACT = {
  address: "PUNE, INDIA",
  phoneNo: "+91  9981338473 ",
  email: "Adityasharma4510@gmail.com",
};
