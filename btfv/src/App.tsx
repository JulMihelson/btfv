import React from "react";
// import Hero from "./Hero/Hero";
import "../src/assets/global.css";
import Header from "./Components/Header/Header";
import Hero from "./Hero/Hero";
import About from "./Components/About/About";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
    </>
  );
};
export default App;
