import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./Slider.module.css";
import photo1 from "../../assets/images/gallery_images/gallery_image_1.jpg";
import photo2 from "../../assets/images/gallery_images/gallery_image_2.jpg";
import photo3 from "../../assets/images/gallery_images/gallery_image_3.jpg";
import photo4 from "../../assets/images/gallery_images/gallery_image_4.jpg";
import photo5 from "../../assets/images/gallery_images/gallery_image_5.jpg";
import photo6 from "../../assets/images/gallery_images/gallery_image_6.jpg";
import photo7 from "../../assets/images/gallery_images/gallery_image_7.jpg";
import React from "react";

interface IGallery {
  items: IGalleryItem[];
}
interface IGalleryItem {
  image: string;
  alt: string;
  id: number;
}
const items: IGallery = {
  items: [
    {
      image: photo1,
      alt: "наші машини",
      id: 0,
    },
    {
      image: photo2,
      alt: "наші машини",
      id: 1,
    },
    {
      image: photo3,
      alt: "наші машини",
      id: 2,
    },
    {
      image: photo4,
      alt: "наші машини",
      id: 3,
    },
    {
      image: photo5,
      alt: "наші машини",
      id: 4,
    },
    {
      image: photo6,
      alt: "наші машини",
      id: 5,
    },
    {
      image: photo7,
      alt: "наші машини",
      id: 6,
    },
  ],
};

const SliderComp: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className={css.container}>
      <Slider {...settings}>
        {items.items.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.alt} className={css.img} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComp;
