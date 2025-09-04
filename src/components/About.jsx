import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          I'm Akash Chouhan, a passionate and results-driven software developer with a strong interest in front-end technologies. I specialize in creating responsive, user-friendly interfaces using React and React Native. I love translating design ideas into functional code and enjoy optimizing user experience on all devices.
        </p>
        <p>
          I believe in writing clean, efficient, and maintainable code. I actively seek out opportunities to grow, whether it’s by building side projects, contributing to open-source, or learning the latest technologies in web and mobile development.
        </p>

        <h3>Academic Background</h3>
        <ul>
          <li><strong>Bachelor of Technology (B.Tech) in Computer Science and Technology<br/>Cgpa-[8.58]</strong> — [Lakshmi Narain College of Technology], Bhopal</li>
          <li><strong>Higher Secondary Education <br/>Percentage-[64]</strong> — MP Board, Bhopal</li>
        </ul>
      </div>
    </section>
  );
};

export default About;

