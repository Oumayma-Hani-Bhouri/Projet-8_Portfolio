import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Notfoundpage from "./pages/error-page";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
};
export default App;
