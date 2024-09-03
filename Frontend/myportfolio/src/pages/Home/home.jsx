import React from "react";
import "../Home/home.scss";
import Title from "../../components/Title/Title";
import Presentation from "../../components/Presentation/Presentation";

const Home = () => {
  return (
    <main className="home-container">
      <Title />
      <Presentation />
    </main>
  );
};

export default Home;
