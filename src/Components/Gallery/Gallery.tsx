import css from "./Gallery.module.css";
import { Carousel } from "antd";
import sprite from "../../assets/svg/sprite.svg";

const Gallery: React.FC = () => {
  return (
    <div className={css.galleryContainer}>
      <div className={css.galleryHead}>
        <svg width={70} height={70}>
          <use href={sprite + "#punch"}></use>
        </svg>
        <h2 className={css.galleryTitle}>галерея</h2>
        <div className={css.line}></div>
      </div>
      <Carousel></Carousel>
    </div>
  );
};

export default Gallery;
