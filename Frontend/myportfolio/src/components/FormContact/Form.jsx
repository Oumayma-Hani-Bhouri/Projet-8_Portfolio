import React, { useState } from "react";
import "../FormContact/Form.scss";

const BasicForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/JqhBTP0Yhf8", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert("We received your submission, thank you!");
        } else if (response.code === 422) {
          // Field validation failed
          setError(response.message);
        } else {
          // other error from formcarry
          setError(response.message);
        }
      })

      // request related error.
      .catch((error) => setError(error));
    console.error("Error:", error);
  }

  return (
    <section className="Contact-container" id="contact">
      <h2> Contact </h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="formcarry-container">
          <label htmlFor="name">Nom et Prénom</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Doe John"
          />
        </div>

        <div className="formcarry-container">
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="john@doe.com"
          />
        </div>

        <div className="formcarry-container">
          <label htmlFor="message">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            placeholder="Entrez votre message..."
          ></textarea>
        </div>

        <div className="formcarry-container">
          <button type="submit">Envoyez</button>
        </div>
      </form>
    </section>
  );
};
export default BasicForm;
