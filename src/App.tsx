import React from "react";
// import Hero from "./Hero/Hero";
import "../src/assets/global.css";
import Header from "./Components/Header/Header";
import Hero from "./Hero/Hero";
import About from "./Components/About/About";
import Activity from "./Components/Activity/Activity";
import Motto from "./Components/Motto/Motto";
import Results from "./Components/Results/Results";
import Partners from "./Components/Partners/Partners";
import Slider from "./Components/Slider/Slider";
import Gallery from "./Components/Gallery/Gallery";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Activity />
      <Motto />
      <Results />
      <Partners />
      <Gallery />
    </>
  );
};
export default App;
