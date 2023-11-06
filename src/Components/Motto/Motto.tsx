import css from "./Motto.module.css";
import sprite from "../../assets/svg/sprite.svg";
export const Motto: React.FC = () => {
  return (
    <div className={css.mottoGlobalContainer}>
      <div className={css.mottoContainer}>
        <svg className={css.punchIcon} width={70} height={70}>
          <use href={sprite + "#punch"}></use>
        </svg>
      </div>
      <p className={css.motto}>
        Назва фонду{" "}
        <span className={css.accentText}> BURN THEM FUCKING VIOLENT</span> — це
        чітка й непохитна позиція цілковитого звільнення нашої Землі від
        останнього окупанта, до Перемоги!
      </p>
      <div className={css.fake}></div>
    </div>
  );
};
export default Motto;
