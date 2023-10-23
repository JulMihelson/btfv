import css from "./MainAim.module.css";
import sprite from "../../assets/svg/sprite.svg";

const MainAim: React.FC = () => {
  return (
    <div className={css.ideaContainer}>
      <ul className={css.mainIdeasBlock}>
        <li className={css.missionItems}>
          <div className={css.colorRound}>
            <svg width={60} height={60} className={css.ideaIcon}>
              <use href={sprite + "#main-idea"}></use>
            </svg>
          </div>
          <div className={css.missionText}>
            <p className={css.mission}>Місія фонду</p>
            <p className={css.missionDescription}>
              Допомога Збройним Силам України у протидії російській агресії.
            </p>
          </div>
        </li>
        <li className={css.missionItems}>
          <div className={css.colorRound}>
            <svg width={70} height={70} className={css.gearIcon}>
              <use href={sprite + "#gearwheel"}></use>
            </svg>
          </div>
          <div className={css.missionText}>
            <p className={css.mission}>Основний напрям роботи</p>
            <p className={css.missionDescription}>
              Забезпечення військових транспортними засобами загальної та
              підвищеної прохідності.
            </p>
          </div>
        </li>
        <li className={css.missionItems}>
          <div className={css.colorRound}>
            <svg width={60} height={60} className={css.ideaIcon}>
              <use href={sprite + "#network"}></use>
            </svg>
          </div>
          <div className={css.missionText}>
            <p className={css.mission}>Цінності фонду</p>
            <p className={css.missionDescription}>
              Єдність. Справедливість. Взаємодопомога.
            </p>
          </div>
        </li>
      </ul>
      <div className={css.line}></div>
    </div>
  );
};

export default MainAim;
