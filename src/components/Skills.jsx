import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2>Tools and Technologies</h2>

        {/* Technologies */}
        <div className="category">
          <h3>Technologies</h3>
          <div className="skills-list">
            <SkillCard name="HTML" img="https://cdn-icons-png.flaticon.com/512/732/732212.png" />
            <SkillCard name="CSS" img="https://cdn-icons-png.flaticon.com/512/732/732190.png" />
            <SkillCard name="JavaScript" img="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" />
            <SkillCard name="TypeScript" img="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />
            <SkillCard name="Node.js" img="https://cdn-icons-png.flaticon.com/512/919/919825.png" />

          </div>
        </div>

        {/* Frameworks */}
        <div className="category">
          <h3>Frameworks</h3>
          <div className="skills-list">
            <SkillCard name="React" img="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" />
            <SkillCard name="React Native" img="https://cdn.worldvectorlogo.com/logos/react-native-1.svg" />
            <SkillCard name="Bootstrap" img="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" />
            <SkillCard name="Express.js" img="https://cdn-icons-png.flaticon.com/512/919/919825.png" />
              <SkillCard name="Tailwind CSS" img="https://cdn.iconscout.com/icon/free/png-512/free-tailwindcss-plain-wordmark-4627702-3817207.png" />

          </div>
        </div>

        {/* Tools */}
        <div className="category">
          <h3>Tools</h3>
          <div className="skills-list">
            <SkillCard name="Git" img="https://cdn-icons-png.flaticon.com/512/2111/2111288.png" />
            <SkillCard name="GitHub" img="https://cdn-icons-png.flaticon.com/512/733/733553.png" />
            <SkillCard name="VS Code" img="https://cdn-icons-png.flaticon.com/512/906/906324.png" />
            <SkillCard name="Figma" img="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" />
           <SkillCard name="Android Studio" img="https://upload.wikimedia.org/wikipedia/commons/9/94/Android_Studio_Logo_2024.svg" />
          </div>
        </div>

        {/* Database */}
        <div className="category">
          <h3>Database</h3>
          <div className="skills-list">
            <SkillCard name="Firebase" img="https://cdn-icons-png.flaticon.com/512/5968/5968885.png" />
            <SkillCard name="MongoDB" img="https://techicons.dev/icons/mongodb" />

          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ name, img }) => (
  <div className="skill-card">
    <img src={img} alt={name} />
    <h4>{name}</h4>
  </div>
);

export default Skills;


