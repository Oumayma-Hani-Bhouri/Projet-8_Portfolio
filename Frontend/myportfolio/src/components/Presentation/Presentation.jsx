import React from "react";
import "../Presentation/Presentation.scss";
import ProfilePicture from "../../assets/images/ProfilePicture.webp";
const Presentation = () => {
  return (
    <section className="presentation" id="presentation">
      <h2>Présentation</h2>
      <div className="presentation-content">
        <img
          src={ProfilePicture}
          alt="Oumayma"
          className="profile-picture"
          loading="lazy"
        />
        <div className="text-content animate-slide-in">
          <p>
            Avec une Licence en Mathématiques et une formation en Développement
            Web, je suis spécialisée dans la création de sites web dynamiques et
            intuitifs. Mon parcours me permet de transformer des concepts
            complexes en solutions simples et élégantes. Parcourez mon portfolio
            pour découvrir mes projets et savoir-faire !
          </p>
        </div>
      </div>
    </section>
  );
};
export default Presentation;
