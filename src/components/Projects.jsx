import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://portfolioprojects-be14a-default-rtdb.firebaseio.com/.json");
        const data = await res.json();

        if (Array.isArray(data)) {
          setProjects(data.slice(0, 5)); 
        } else {
          console.error("Data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching Firebase data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="projects" className="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="scroll-gallery">
            {Array.isArray(project.coverImages) &&
  project.coverImages.map((img, i) => (
    <img key={img} src={img} alt={`${project.title} ${i + 1}`} className="gallery-img" loading="lazy" />
  ))}

            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn github-btn">GitHub</a>
                <a href={project.deploymentLink} target="_blank" rel="noopener noreferrer" className="btn live-btn">Live/Video</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


