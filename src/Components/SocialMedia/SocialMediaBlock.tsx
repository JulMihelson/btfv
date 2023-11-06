import sprite from "../../assets/svg/sprite.svg";
import css from "./SocialMedia.module.css";
export const SocialMediaIcons = () => {
  return (
    <ul className={css.socialMediaIcons}>
      <li>
        <svg className={css.instaLogo} width={40} height={40}>
          <use xlinkHref={sprite + "#instagram_logo"} />
        </svg>
      </li>
      <li>
        <svg className={css.fbLogo} width={40} height={40}>
          <use xlinkHref={sprite + "#facebook_logo"} />
        </svg>
      </li>
    </ul>
  );
};
export default SocialMediaIcons;
