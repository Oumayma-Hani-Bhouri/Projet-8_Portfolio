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
            Passionnée par le développement web, je combine une Licence
            Mathématiques et une formation en Développement Web pour créer des
            sites dynamiques et fonctionnels. Mon approche consiste à rendre les
            solutions complexes simples et accessibles. Découvrez mes projets et
            mon savoir-faire à travers ce portfolio.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Presentation;
