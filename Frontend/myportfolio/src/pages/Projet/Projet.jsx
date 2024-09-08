import React, { useState } from "react";
import list from "../../data.json";
import { useParams, Navigate } from "react-router-dom";
import Carousel from "../../components/Carrousel/Carrousel";
import "../Projet/Projet.scss";

const Projetdetails = () => {
  const { ProjetId } = useParams();
  const [data] = useState(list);

  const projet = data.find((projet) => projet.id === ProjetId);

  if (!projet) {
    return <Navigate to="/error" />;
  }

  return (
    <div className="project-container">
      <div className="project-header">
        <h2 className="project-title">{projet.title}</h2>

        <div className="project-description">
          <h3>Description:</h3>
          <p>{projet.description}</p>
        </div>
      </div>
      <Carousel images={projet.pictures} />

      <h3>Technologies utilisées</h3>
      <ul className="project-skills">
        {projet.skills.map((skill, index) => (
          <li key={index} className="skill-badge">
            {skill}
          </li>
        ))}
      </ul>
      <div className="project-links">
        {projet.lien && (
          <a
            href={projet.lien}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Voir sur GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default Projetdetails;
