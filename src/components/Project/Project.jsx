import React from 'react';
import './Project.css';
import todo from "../../assets/To_Do_List_Pad.webp"
import Ecommerce from "../../assets/Ecomarce.png"
import Chatapp from '../../assets/Chatapp.png'
import { useRef } from 'react';

const projectData = [
  {
    title: "To-Do-List",
    img:todo,
    description: "A To-Do List allows users to add new tasks and delete completed or unwanted ones to manage their daily activities.",
    tech: "React, Js,HTML,Css",
    github: "https://github.com/Lazarg8008/project",
    demo: "https://lazarg8008.github.io/project/"
  },
  {
    title: "E-commerce App",
    img:Ecommerce,
    description: "An online shopping app with product listings, cart, and payment gateway.",
    tech: "React, Node.js, MongoDB",
    github: "https://github.com/yourusername/ecommerce-app",
    demo: "https://ecommercestore.vercel.app/"
  },
  {
    title: "Chat App",
    img:Chatapp,
    description: "Real-time chat app with socket.io and JWT authentication.",
    tech: "React, Socket.io, Node.js",
    github: "https://github.com/yourusername/chat-app",
    demo: "https://chatifyapp.netlify.app/"
  },
];

const Projects = () => {
  // center of the screen
     const projectRef = useRef(null);
   
     const scrollToProjects = () => {
       projectRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
     };
   // center of the screen

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <img src={project.img} alt={project.title} />
            <p>{project.description}</p>
            <p className="tech-stack"><strong>Tech:</strong> {project.tech}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-btn">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
