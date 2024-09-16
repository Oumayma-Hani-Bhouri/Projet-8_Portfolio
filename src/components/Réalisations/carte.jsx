import React from "react";
import "./carte.scss";

const Skills = ({ skills }) => {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <span key={index} className="skill">
          {skill}
        </span>
      ))}
    </div>
  );
};

const Card = ({ title, cover, skills }) => {
  return (
    <div className="card">
      <img src={cover} alt={`${title} logo`} className="card-img" />
      <h2 className="card-title">{title}</h2>

      <Skills skills={skills} />
    </div>
  );
};

export default Card;
