import React from "react";
import css from "./Hero.module.css";
const Hero: React.FC = () => {
  return (
    <div className={css.heroContainer}>
      <h1 className={css.title}>спільнота зі сталевим характером</h1>
      <button className={css.supportBtn} type="button">
        підтримати
      </button>
    </div>
  );
};
export default Hero;
