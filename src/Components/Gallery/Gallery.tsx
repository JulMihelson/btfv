import css from "./Gallery.module.css";
import sprite from "../../assets/svg/sprite.svg";
import React from "react";

import SliderComp from "./Slider";

const Gallery: React.FC = () => {
  return (
    <div id="gallery" className={css.galleryContainer}>
      <div className={css.galleryHead}>
        <svg width={70} height={70}>
          <use href={sprite + "#punch"}></use>
        </svg>
        <h2 className={css.galleryTitle}>галерея</h2>
        <div className={css.line}></div>
      </div>
      <div className={css.galleryLine}>
        <SliderComp />
      </div>
    </div>
  );
};

export default Gallery;
