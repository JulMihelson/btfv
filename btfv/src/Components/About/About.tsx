import css from "./About.module.css";
import sprite from "../../assets/svg/sprite.svg";
import image from "../../assets/images/about_image.jpg";
import MainAim from "../MainAim/MainAim";

const About: React.FC = () => {
  return (
    <div className={css.aboutContainer}>
      <div className={css.aboutGlobalContainer}>
        <div>
          <img
            className={css.aboutImage}
            src={image}
            width={575}
            height={900}
            alt="Баггі для військових від фонду BTFV"
          ></img>
        </div>

        <div className={css.textBlock}>
          <svg width={70} height={70}>
            <use href={sprite + "#punch"}></use>
          </svg>
          <h2 className={css.aboutTitle}>про нас</h2>
          <div className={css.line}></div>
          <div className={css.aboutText}>
            <span className={css.accentText}>BTFV</span> як спільнота створена у
            перші дні повномасштабного вторгнення, а 30 липня 2022 р. отримала
            свою візію. Заснована військовим, який об’єднав небайдужих людей і
            побратимів, представників бізнесу й фондів, що започаткували
            системну волонтерську діяльність із забезпечення батальйону бойової
            бригади Збройних Сил України. Доволі швидко волонтерство спільноти
            розширилося за межі батальйону до рівня бригади, а згодом і вийшло
            за її рамки, охоплюючи інші формування та підрозділи різних родів
            військ Збройних Сил.
          </div>
          <div className={css.aboutText}>
            <span className={css.accentText}>BTFV</span> — це однодумці, які
            вбачають своїм обов’язком захист України від збройної агресії
            російської пфедерації з різних напрямів. У тісній співпраці з
            Партнерами, спільнота, а нині фонд, є прямою ланкою доступу та
            контакту з військовими, що дозволяє визначити пріоритетні потреби,
            як окремого військовослужбовця, так і підрозділу вцілому. Наша
            допомога передається «з рук у руки», і ми впевнені у кінцевому
            отриманні за призначенням.
          </div>
          <p className={css.accentTitle}>BTFV. Кожен герой на своєму фронті!</p>
        </div>
      </div>
      <MainAim />
    </div>
  );
};

export default About;
