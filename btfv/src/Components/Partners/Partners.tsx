import { Carousel } from "antd";
import sprite from "../../assets/svg/sprite.svg";
import css from "./Partners.module.css";

const Partners: React.FC = () => {
  return (
    <div className={css.partnersGlobalContainer}>
      <div className={css.partnersContainer}>
        <svg className={css.punchIcon} width={70} height={70}>
          <use href={sprite + "#punch"}></use>
        </svg>
        <h2 className={css.partnersTitle}>партнери</h2>
        <div className={css.line}></div>
        <svg>
          <use href={sprite + "#poliss_future_logo"}></use>
        </svg>
        <Carousel autoplay>
          <div>
            <svg width={300}>
              <use href={sprite + "#poliss_future_logo"}></use>
            </svg>
          </div>
          <div>
            <svg width={300}>
              <use href={sprite + "#military_post_logo"}></use>
            </svg>
          </div>
          <div>
            <svg width={300}>
              <use href={sprite + "#craf_logo"}></use>
            </svg>
          </div>
          <div>
            <svg width={300}>
              <use href={sprite + "#off_road_vol_logo"}></use>
            </svg>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default Partners;
