import React from "react";
import "../Presentation/Presentation.scss";
import ProfilePicture from "../../assets/images/ProfilePicture1.webp";
const Presentation = () => {
  return (
    <section className="presentation" id="presentation">
      <div className="presentation-content">
        <img
          src={ProfilePicture}
          alt="Oumayma"
          className="profile-picture"
          loading="lazy"
        />
        <div className="text-content animate-slide-in">
          <h2>À propos de moi</h2>
          <p>
            Grâce à mon diplôme en Mathématiques et la formation en
            Développement Web, je mets en œuvre des compétences techniques
            solides pour concevoir des sites modernes et intuitifs. Mon objectif
            est de rendre la technologie accessible et de proposer des solutions
            efficaces et adaptées aux besoins de chaque projet. Plongez dans mon
            portfolio pour découvrir mes réalisations et mon savoir-faire.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Presentation;
