import React from "react";
import "../Home/home.scss";
import Title from "../../components/Title/Title";
import Presentation from "../../components/Presentation/Presentation";
import Competences from "../../components/Skills/Skills";

const Home = () => {
  return (
    <main className="home-container">
      <Title />
      <Presentation />
      <Competences />
    </main>
  );
};

export default Home;
