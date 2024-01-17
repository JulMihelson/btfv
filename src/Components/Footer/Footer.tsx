import css from "./Footer.module.css";
import logo from "../../assets/logo_btfv_white_footer.png";
import SocialMediaIcons from "../SocialMedia/SocialMediaBlock";

const Footer: React.FC = () => {
  return (
    <footer className={css.footerContainer}>
      <div className={css.globalFooterContainer}>
        <img alt="BTFV logo" className={css.footerLogo} src={logo} />
        <ul className={css.footerMenu}>
          <li className={css.footerMenuItems}>
            <a data-scroll href="#about_us">
              про нас
            </a>
          </li>
          <li className={css.footerMenuItems}>
            <a data-scroll href="#activity">
              діяльність
            </a>
          </li>
          <li className={css.footerMenuItems}>
            <a data-scroll href="#partners">
              партнери
            </a>
          </li>
          <li className={css.footerMenuItems}>
            <a data-scroll href="#gallery">
              галерея
            </a>
          </li>
          <li className={css.footerMenuItems}>
            <a data-scroll href="#contacts">
              контакти
            </a>
          </li>
        </ul>

        <SocialMediaIcons />
        <div className={css.line}></div>
        <div className={css.accentText}>
          Created by{" "}
          <a rel="noopener" href="https://www.instagram.com/yuliya.mikhalkova/">
            Jul Mihelson
          </a>
        </div>
        <div className={css.accentText}>All rights reserved 2023</div>
      </div>
    </footer>
  );
};
export default Footer;
