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
import Gallery from "./Components/Gallery/Gallery";
import Contacts from "./Components/Contacts/Contacts";

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
      <Contacts />
    </>
  );
};
export default App;
