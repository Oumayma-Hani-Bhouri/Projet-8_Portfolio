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
            Avec une formation en Mathématiques et en Développement Web, j'allie
            logique et créativité pour concevoir des sites à la fois dynamiques
            et intuitifs. Mon approche vise à simplifier les solutions complexes
            tout en garantissant une expérience utilisateur optimale. Explorez
            mes projets et découvrez mon expertise à travers ce portfolio
          </p>
        </div>
      </div>
    </section>
  );
};
export default Presentation;
