import css from "./Gallery.module.css";

// import { Carousel } from "antd";
import sprite from "../../assets/svg/sprite.svg";
import React from "react";
import photo1 from "../../assets/images/gallery_images/gallery_image_1.jpg";
import photo2 from "../../assets/images/gallery_images/gallery_image_2.jpg";
import photo3 from "../../assets/images/gallery_images/gallery_image_3.jpg";
import photo4 from "../../assets/images/gallery_images/gallery_image_4.jpg";
import photo5 from "../../assets/images/gallery_images/gallery_image_5.jpg";
import photo6 from "../../assets/images/gallery_images/gallery_image_6.jpg";
import photo7 from "../../assets/images/gallery_images/gallery_image_7.jpg";
import SliderComp from "./Slider";
interface IGallery {
  items: IGalleryItem[];
}
interface IGalleryItem {
  image: string;
  alt: string;
}
const items: IGallery = {
  items: [
    {
      image: photo1,
      alt: "наші машини",
    },
    {
      image: photo2,
      alt: "наші машини",
    },
    {
      image: photo3,
      alt: "наші машини",
    },
    {
      image: photo4,
      alt: "наші машини",
    },
    {
      image: photo5,
      alt: "наші машини",
    },
    {
      image: photo6,
      alt: "наші машини",
    },
    {
      image: photo7,
      alt: "наші машини",
    },
  ],
};
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
      <div className={css.galleryLine}>
        <SliderComp />

        {/* <Carousel autoplay>
          {items.items.map((item: IGalleryItem, index: number) => (
            <React.Fragment>
              <div key={index} className={css.galleryItem}>
                <img src={item.image} alt={item.alt} width={300} height={200} />
              </div>
            </React.Fragment>
          ))}
        </Carousel> */}
      </div>
    </div>
  );
};

export default Gallery;
