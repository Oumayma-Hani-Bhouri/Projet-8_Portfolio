import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Notfoundpage from "../src/pages/error-page";
import "../src/assets/scss/App.scss";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
};
export default App;
