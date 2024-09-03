import React from "react";
import "./Skills.scss";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaSass,
  FaJs,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="skill-icon" style={{ color: "#e34c26" }} />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="skill-icon" style={{ color: "#1572B6" }} />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="skill-icon" style={{ color: "#F7DF1E" }} />,
  },
  {
    name: "React",
    icon: <FaReact className="skill-icon" style={{ color: "#61DAFB" }} />,
  },
  {
    name: "Sass",
    icon: <FaSass className="skill-icon" style={{ color: "#CC6699" }} />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="skill-icon" style={{ color: "#339933" }} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="skill-icon" style={{ color: "#47A248" }} />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="skill-icon" style={{ color: "#181717" }} />,
  },
];

const Competences = () => {
  return (
    <section className="Skills">
      <h2> Compétences</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className={`load__bar load__bar--${index + 1}`}>
              {skill.icon}
            </div>
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Competences;
