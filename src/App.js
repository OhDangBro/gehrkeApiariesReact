import React, { useState } from "react";
import './App.css';
import Chapstick from './components/Chapstick';
import Hero from './components/Hero';
import Honey from './components/Honey';
import Navi from "./components/Navi";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Hero />;
    }
    if (currentPage === "Honey") {
      return <Honey />;
    }
    if (currentPage === "Chapstick") {
      return <Chapstick />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    
    <>
    <main id="Main">{renderPage()}</main>
    <Navi currentPage={currentPage} handleClick={handlePageChange}></Navi>
    </>
  );
}

export default App;
