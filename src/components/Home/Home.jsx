import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';
import image from "../../assets/Profile.jpg"; 
import cv from "../../assets/Lazar.pdf"
import { useRef } from 'react';
const Home = () => {
  // center of the screen
    const projectRef = useRef(null);
  
    const scrollToProjects = () => {
      projectRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    };
  // center of the screen
  
  return (
        <section id="home" className="home-container">
            <div className="home-left">
        <h1 className="home-name">Hi, I'm Gandi Lazar</h1>
        <h2><Typewriter
          words={['Front End Developer', 'Backend Developer', 'Fullstack Developer']}
          loop={0}
          cursor
          cursorStyle="👉"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        /></h2>
        <p className="home-intro">
          I design and build responsive web apps using modern technologies.
          Passionate about learning and creating impactful solutions.
        </p>
        <div className="home-buttons">
          <a href={cv} download className="btn">Download CV</a>
          <a href="#contact" className="btn btn-outline">Hire Me</a>
        </div>
      </div>
      <div className="home-right">
        <img src={image} alt="profile" className="profile-img" />
      </div>
  
        </section>
  );
};

export default Home;
