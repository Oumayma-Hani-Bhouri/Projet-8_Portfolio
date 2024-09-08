import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Notfoundpage from "./pages/error-page";
import Projetdetails from "../src/pages/Projet/Projet";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Notfoundpage />} />
          <Route path="projet/:ProjetId" element={<Projetdetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
};
export default App;
