import React from "react";
import "../Home/home.scss";
import Title from "../../components/Title/Title";
import Presentation from "../../components/Presentation/Presentation";
import Competences from "../../components/Skills/Skills";
import Cards from "../../components/Réalisations/Réalisations";

const Home = () => {
  return (
    <main className="home-container">
      <Title />
      <Presentation />
      <Competences />
      <Cards />
    </main>
  );
};

export default Home;
