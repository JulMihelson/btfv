import css from "./Footer.module.css";
import logo from "../../assets/logo_btfv_white_footer.png";
import SocialMediaIcons from "../SocialMedia/SocialMediaBlock";

const Footer: React.FC = () => {
  return (
    <footer className={css.footerContainer}>
      <div className={css.globalFooterContainer}>
        <img alt="BTFV logo" src={logo} width={123} height={123} />
        <ul className={css.footerMenu}>
          <li className={css.footerMenuItems}>про нас</li>
          <li className={css.footerMenuItems}>діяльність</li>
          <li className={css.footerMenuItems}>партнери</li>
          <li className={css.footerMenuItems}>галерея</li>
          <li className={css.footerMenuItems}>контакти</li>
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
