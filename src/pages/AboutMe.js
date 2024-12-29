import React from 'react';
import '../styles/AboutMe.css';

import MongoDBIcon from '../assets/mongodb-icon.svg';
import ExpressIcon from '../assets/express-icon.svg';
import NodeJSIcon from '../assets/nodejs-icon.svg';
import JavaScriptIcon from '../assets/javascript-icon.svg';
import ReactIcon from '../assets/react-icon.svg';
import MySqlIcon from '../assets/mysql-icon.svg';
import CssIcon from '../assets/css-icon.svg';
import HtmlIcon from '../assets/html-icon.svg';
import GitHubIcon from '../assets/github-icon.svg';
import JavaIcon from '../assets/java-icon.svg';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="intro">
        <h1>ABOUT ME</h1>
        <p>
          Hello! I’m Sanam Chaudhary, a passionate and dedicated <strong>MERN Stack Developer</strong>.
          I specialize in building dynamic, scalable web applications using MongoDB, Express.js, React, and Node.js.
          With a focus on creating intuitive and responsive user experiences, I aim to build applications that are both performant and easy to maintain.
        </p>
      </div>

      <div className="skills-header">
        <h1>MY CAPABILITIES</h1>
        <div className="capabilities-info">
          <p>
            "As a passionate and driven MERN Stack Developer, I specialize in building dynamic and scalable web applications using MongoDB, Express.js, React, and Node.js. I thrive on creating seamless, responsive user experiences and clean, efficient backend solutions. What sets me apart is my constant curiosity and commitment to learning new technologies and frameworks. I’m always exploring new tools and best practices to stay ahead in the fast-evolving tech landscape, ensuring that the applications I build are both modern and future-proof."
          </p>
          <ul className="skills-list">
            <li>
              <img src={MongoDBIcon} className="skill-icon" alt="MongoDB Icon" />
            </li>
            <li>
              <img src={ExpressIcon} className="skill-icon" alt="Express.js Icon" />
            </li>
            <li>
              <img src={ReactIcon} className="skill-icon" alt="React Icon" />
            </li>
            <li>
              <img src={NodeJSIcon} className="skill-icon" alt="Node.js Icon" />
            </li>
            <li>
              <img src={JavaScriptIcon} className="skill-icon" alt="JavaScript Icon" />
            </li>
            <li>
              <img src={HtmlIcon} className="skill-icon" alt="HTML Icon" />
            </li>
            <li>
              <img src={CssIcon} className="skill-icon" alt="CSS Icon" />
            </li>
            <li>
              <img src={MySqlIcon} className="skill-icon" alt="MySQL Icon" />
            </li>
            <li>
              <img src={GitHubIcon} className="skill-icon" alt="GitHub Icon" />
            </li>
            <li>
              <img src={JavaIcon} className="skill-icon" alt="Java Icon" />
            </li>
          </ul>
        </div>
      </div>

      <div className="experience-header">
        <h1>MY EXPERIENCE</h1>
        <div className="work-experience">
          <div>
            <div className="work-title">
              <h3>Freelance Developer</h3>
              <p>Dec, 2024 - Present</p>
            </div>
            <p>
              Over the past few years, I've had the opportunity to work on various exciting projects that have honed my skills in full-stack development.
              I enjoy tackling complex challenges and continuously learning new technologies to stay up to date with the latest industry trends.
            </p>
          </div>
          <div>
            <div className="work-title">
              <h3>Frontend Intern</h3>
              <p>Dec, 2024 - May, 2025</p>
            </div>
            <p>
              As a frontend intern, I focused on designing and developing user interfaces using HTML, CSS, and JavaScript.
              I ensured responsive design for seamless user experiences, collaborated with team members to implement features, and learned best practices for optimizing website performance and accessibility.
            </p>
          </div>
        </div>
      </div>
      <hr/>
    </section>
  );
};

export default AboutMe;
