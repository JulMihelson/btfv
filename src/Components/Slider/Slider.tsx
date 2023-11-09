import React, { useEffect, useRef } from "react";
import sprite from "../../assets/svg/sprite.svg";
import Swiper from "swiper";
import "swiper/css";
import { SwiperSlide } from "swiper/react";
import "./Slider.css";

const Slider: React.FC = () => {
  const swiperRef = useRef<HTMLDivElement | null>(null);
  const swiper = useRef<Swiper | null>(null);

  useEffect(() => {
    const swiperParams = {
      slidesPerView: 3,
      spaceBetween: 50,
      autoplay: true,
      centeredSlides: true,

      loop: true,
      pagination: {
        el: ".swiper-pagination-prod",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };

    if (swiperRef.current) {
      swiper.current = new Swiper(swiperRef.current, swiperParams);
    }

    return () => {
      if (swiper.current) {
        swiper.current.destroy();
      }
    };
  }, []);

  return (
    <div className="swiper" ref={swiperRef}>
      <div className="swiper-wrapper">
        <SwiperSlide>
          <div className="swiper-slide">
            <svg>
              <use href={sprite + "#off_road_vol_logo"}></use>
            </svg>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <svg>
              <use href={sprite + "#poliss_future_logo"}></use>
            </svg>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <svg>
              <use href={sprite + "#craf_logo"}></use>
            </svg>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <svg>
              <use href={sprite + "#military_post_logo"}></use>
            </svg>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination-prod"></div>
      </div>
    </div>
  );
};

export default Slider;
