import React from "react";
import "../Title/Title.scss";

const Title = () => {
  return (
    <section className="title-container">
      <div className="text-content">
        <h1>
          Bonjour ! <span>Je suis Oumayma, développeuse web </span>{" "}
        </h1>
        <p>
          Passionnée par la création de sites web interactifs et performants.
        </p>
      </div>
    </section>
  );
};

export default Title;