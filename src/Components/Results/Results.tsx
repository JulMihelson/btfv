import css from "./Results.module.css";
import sprite from "../../assets/svg/sprite.svg";
export const Results: React.FC = () => {
  return (
    <div className={css.resultsContainer}>
      <div className={css.resultsHead}>
        <svg width={70} height={70}>
          <use href={sprite + "#punch"}></use>
        </svg>
        <h2 className={css.resultsTitle}>результати роботи</h2>
      </div>
      <div className={css.infoBlock}>
        <div className={css.infoTextBackground}>
          <div className={css.infoText}>
            З початку повномасштабного вторгнення спільнота
            <span className={css.accentText}> BTFV </span> передала військовим:
          </div>
        </div>

        <ul className={css.infoGrid}>
          <li className={css.gridItem}>
            <div className={css.iconBackground}>
              <svg className={css.iconGrid} width={70} height={70}>
                <use href={sprite + "#armored-vehicle"}></use>
              </svg>
            </div>
            <p className={css.text}>
              <span>18 </span> автомобілів
            </p>
          </li>

          <li className={css.gridItem}>
            <div className={css.iconBackground}>
              <svg className={css.iconGrid} width={70} height={70}>
                <use href={sprite + "#truck"}></use>
              </svg>
            </div>

            <p className={css.text}>
              <span>7 </span>причепів спеціальних/ евакуаційних
            </p>
          </li>
          <li className={css.gridItem}>
            <div className={css.iconBackground}>
              <svg className={css.iconGrid} width={70} height={70}>
                <use href={sprite + "#drone"}></use>
              </svg>
            </div>

            <p className={css.text}>
              <span>4 </span>дрони/ квадрокоптери
            </p>
          </li>
          <li className={css.gridItem}>
            <div className={css.iconBackground}>
              <svg className={css.iconGrid} width={70} height={70}>
                <use href={sprite + "#ATV"}></use>
              </svg>
            </div>
            <p className={css.text}>
              <span>9 </span>квадроциклів/ мотоходів
            </p>
          </li>
          <li className={css.gridItem}>
            <div className={css.iconBackground}>
              <svg className={css.iconGrid} width={70} height={70}>
                <use href={sprite + "#armour"}></use>
              </svg>
            </div>

            <p className={css.text}>Амуніція та екіпірування</p>
          </li>
          <li className={css.gridItem}>
            <div className={css.iconBackground}>
              <svg className={css.iconGrid} width={70} height={70}>
                <use href={sprite + "#radio"}></use>
              </svg>
            </div>
            <p className={css.text}>Засоби зв'язку</p>
          </li>
          <li className={css.gridItem}>
            <div className={css.iconBackground}>
              <svg className={css.iconGrid} width={70} height={70}>
                <use href={sprite + "#car-repair"}></use>
              </svg>
            </div>
            <p className={css.text}>Ремонт та камуфлювання</p>
          </li>
          <li className={css.gridItem}>
            <div className={css.iconBackground}>
              <svg className={css.iconGrid} width={70} height={70}>
                <use href={sprite + "#tire"}></use>
              </svg>
            </div>
            <p className={css.text}>Гума для автомобілів та квадроциклів</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Results;
