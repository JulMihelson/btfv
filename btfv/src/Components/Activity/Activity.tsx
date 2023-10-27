import css from "./Activity.module.css";
import sprite from "../../assets/svg/sprite.svg";

import CardCarousel from "./CardCarousel";
import { Slider } from "antd";

const Activity: React.FC = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,

  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className={css.activityContainer}>
      <div className={css.activityHead}>
        <svg width={70} height={70}>
          <use href={sprite + "#punch"}></use>
        </svg>
        <h2 className={css.activityTitle}>діяльність</h2>
      </div>

      <CardCarousel />
    </div>
  );
};

export default Activity;
