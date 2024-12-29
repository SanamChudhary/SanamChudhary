import React from 'react';
import '../styles/Portfolio.css';
import PortfolioImage from '../assets/project-image.png';
import TicImage from '../assets/tic-tak-toc.jpg';
import SimonSaysImage from '../assets/simon-says-image.jpg'

// Sample data for your projects
const projects = [
  {
    title: 'Tic-Tac-Toe',
    description: 'A simple Tic-Tac-Toe game where two players take turns marking spaces on a 3x3 grid. The player who aligns three marks vertically, horizontally, or diagonally wins.',
    link: 'https://sanamchytictactoe.netlify.app/',
    technologies: ['React', 'CSS', 'JavaScript'],
    image: TicImage,
  },
  {
    title: 'Simple Portfolio',
    description: 'A personal portfolio website that showcases web development skills, project experience, and professional background.',
    link: 'https://sanamchudhary.github.io/',
    technologies: ['React', 'HTML', 'CSS'],
    image: PortfolioImage,
  },
  {
    title: 'Simon-Says',
    description: 'Simon Says is a fun and interactive memory game where the player must repeat a sequence of colors (or other elements) shown on the screen. This project is a great way to showcase my ability to integrate all three technologies effectively in a real-world application. It highlights your skills in interactivity, design, and logic implementation.',
    link: 'file:///D:/Simon%20Say%20Game/Simon-Says-Game/index.html',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: SimonSaysImage
  }
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="project-detail">
        <h1>FEATURED PROJECTS</h1>
        <p>Here are some of the selected projects that showcase my passion for web development.</p>
      </div>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="description">
              <h3>{project.title}</h3>
              <p>{project.description} The technologies uses to build <strong>{project.technologies.join(', ')}</strong></p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </section>
  );
};

export default Portfolio;
