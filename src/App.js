import React from "react";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Cards/>
      <Food/>
    </div>
  );
}

export default App;
