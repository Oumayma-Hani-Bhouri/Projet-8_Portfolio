import { Link } from "react-router-dom";
import "../Error/error.scss";
import ErrorImg from "../../assets/images/ErrorImg.jpg";

function Error() {
  return (
    <section className="error_container">
      <img className="error_Img" src={ErrorImg} alt=" une erreur" />

      <p className="error_text">La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error_link">
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
}

export default Error;
