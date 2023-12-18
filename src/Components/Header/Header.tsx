import React, { useState } from "react";
import css from "./Header.module.css";
import logo from "../../assets/logo_btfv_white.png";
// import sprite from "../../assets/svg/sprite.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useMediaQuery } from "react-responsive";
import { SocialMediaIcons } from "../SocialMedia/SocialMediaBlock";

// interface iProps {
//   className: string;
//   isOpen: boolean;
// }

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  return (
    <header>
      <div className={css.headerContainer}>
        <div className={css.globalContainer}>
          <img alt="BTFV logo" src={logo} width={201} height={83} />

          <ul className={css.headerMenu}>
            <li className={css.headerMenuItems}>
              <a data-scroll href="#about_us">
                про нас
              </a>
            </li>
            <li className={css.headerMenuItems}>
              <a data-scroll href="#activity">
                діяльність
              </a>
            </li>
            <li className={css.headerMenuItems}>
              <a data-scroll href="#partners">
                партнери
              </a>
            </li>
            <li className={css.headerMenuItems}>
              <a data-scroll href="#gallery">
                галерея
              </a>
            </li>
            <li className={css.headerMenuItems}>
              <a data-scroll href="#contacts">
                контакти
              </a>
            </li>
          </ul>
          <SocialMediaIcons />

          {!isDesktop && <BurgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
