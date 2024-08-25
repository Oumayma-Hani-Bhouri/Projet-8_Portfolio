import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Header from "./components/Header/Header";
import Notfoundpage from "./pages/error-page";
import "../src/assets/scss/App.scss";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};
export default App;