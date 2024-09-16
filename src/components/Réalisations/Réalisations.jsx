import React, { useState } from "react";
import Card from "./carte";
import "../Réalisations/Réalisations.scss";
import list from "../../data.json";
import { NavLink } from "react-router-dom";

const Cards = () => {
  const [data] = useState(list);

  return (
    <section className="Realisations" id="realisations">
      <h2>Réalisations</h2>
      <div className="cards-container">
        {data.map((projet) => (
          <NavLink key={projet.id} to={`./projet/${projet.id}`}>
            <Card
              title={projet.title}
              cover={projet.cover}
              skills={projet.skills}
            />
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default Cards;
