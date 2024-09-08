import React from "react";
import "../Home/home.scss";
import Title from "../../components/Title/Title";
import Presentation from "../../components/Presentation/Presentation";
import Competences from "../../components/Skills/Skills";
import Cards from "../../components/Réalisations/Réalisations";
import BasicForm from "../../components/FormContact/Form";

const Home = () => {
  return (
    <main className="home-container">
      <Title />
      <Presentation />
      <Competences />
      <Cards />
      <BasicForm />
    </main>
  );
};

export default Home;
