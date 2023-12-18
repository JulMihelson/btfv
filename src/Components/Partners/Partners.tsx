import sprite from "../../assets/svg/sprite.svg";
import css from "./Partners.module.css";
import logo from "../../assets/images/poliss_future_logo.png";
const Partners: React.FC = () => {
  return (
    <div id="partners" className={css.partnersGlobalContainer}>
      <div className={css.partnersContainer}>
        <svg className={css.punchIcon} width={70} height={70}>
          <use href={sprite + "#punch"}></use>
        </svg>
        <h2 className={css.partnersTitle}>партнери</h2>
        <div className={css.line}></div>
        <ul className={css.partnersList}>
          <li>
            <img src={logo} alt="kjuj" width={150}></img>
          </li>
          <li>
            <svg width={400}>
              <use href={sprite + "#military_post_logo"}></use>
            </svg>
          </li>
          <li>
            <svg width={400}>
              <use href={sprite + "#craf_logo"}></use>
            </svg>
          </li>

          <li>
            <svg width={400}>
              <use href={sprite + "#off_road_vol_logo"}></use>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Partners;
