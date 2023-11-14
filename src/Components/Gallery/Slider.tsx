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
import React, { useEffect, useState } from "react";

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

const SliderComp: React.FC = () => {
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    initialSlide: 0,
    rows: 1,
    arrows: false,
    infinite: false,
    autoplay: false,
    beforeChange: (current: number, next: number) => {
      setIsPrevDisabled(next === 0);
      setIsNextDisabled(next === 6);
    },
  };

  const handlePrevClick = () => {
    if (!isPrevDisabled) {
      slickSlider.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (!isNextDisabled) {
      slickSlider.slickNext();
    }
  };

  let slickSlider: any;

  useEffect(() => {
    if (slickSlider) {
      slickSlider.slickGoTo(0);
    }
  }, [slickSlider]);
  return (
    <div className={css.sliderBlock}>
      <div className={css.slickList}>
        <div className={css.btnWrap}>
          <button
            className={css.prevBtn}
            onClick={handlePrevClick}
            disabled={isPrevDisabled}
          >
            Previous
          </button>
          <Slider {...settings} ref={(slider) => (slickSlider = slider)}>
            {items.items.map((item: IGalleryItem, index: number) => (
              <div key={index} className={css.slickSlide}>
                <img src={item.image} alt={item.alt} width={300} height={500} />
                <p>{index}</p>
              </div>
            ))}
          </Slider>
          <button
            className={css.nextBtn}
            onClick={handleNextClick}
            disabled={isNextDisabled}
          >
            Next
          </button>
        </div>
      </div>
    </div>

    // <div {...settings} className={css.sliderBlock}>
    //   <Slider infinite={false}>
    //     {items.items.map((item: IGalleryItem, index: number) => (
    //       <div key={index} className={css.galleryItem}>
    //         <img src={item.image} alt={item.alt} width={300} height={500} />
    //       </div>
    //     ))}
    //   </Slider>
    // </div>
  );
};

export default SliderComp;
