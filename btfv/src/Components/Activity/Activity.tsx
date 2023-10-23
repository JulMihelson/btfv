import css from "./Activity.module.css";
import sprite from "../../assets/svg/sprite.svg";

import CardCarousel from "./CardCarousel";

const Activity: React.FC = () => {
  return (
    <div>
      <svg width={70} height={70}>
        <use href={sprite + "#punch"}></use>
      </svg>
      <h2 className={css.activityTitle}>діяльність</h2>
      <CardCarousel />
    </div>
  );
};

export default Activity;
