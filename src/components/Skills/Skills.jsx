import React from 'react';
import { useRef } from 'react';
import './Skills.css'; // Styles remain mostly the same
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import python from '../../assets/python.png'
import bootstrap from '../../assets/bootstrap.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import express from '../../assets/express.png'
import mongo from '../../assets/mongo.png'
import git from '../../assets/git.png'
import github from '../../assets/github.png'

const skills = [
  { name: 'HTML', img: html },
  { name: 'CSS', img: css },
  { name: 'JavaScript', img: javascript },
  { name: 'Python', img: python },
  { name: 'Bootstrap', img: bootstrap },
  { name: 'React', img: react },
  { name: 'Node.js', img: node },
  { name: 'Express', img: express },
  { name: 'MongoDB', img: mongo },
  { name: 'Git', img: git },
  { name: 'Github', img: github }
];
  

const Skills = () => {
     // center of the screen
        const projectRef = useRef(null);
      
        const scrollToProjects = () => {
          projectRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        };
      // center of the screen
  return (
    <section id="skills" className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            <img src={skill.img} alt={skill.name} className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
