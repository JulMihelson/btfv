import React, { useState } from "react";
import css from "./Header.module.css";
import logo from "../../assets/logo_btfv_white.png";
// import sprite from "../../assets/svg/sprite.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useMediaQuery } from "react-responsive";
import { SocialMediaIcons } from "../SocialMedia/SocialMediaBlock";

interface iProps {
  className: string;
  isOpen: boolean;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  return (
    <header>
      <div className={css.headerContainer}>
        <div className={css.globalContainer}>
          <img alt="BTFV logo" src={logo} width={201} height={83} />

          <ul className={css.headerMenu}>
            <li className={css.headerMenuItems}>про нас</li>
            <li className={css.headerMenuItems}>діяльність</li>
            <li className={css.headerMenuItems}>партнери</li>
            <li className={css.headerMenuItems}>галерея</li>
            <li className={css.headerMenuItems}>контакти</li>
          </ul>
          <SocialMediaIcons />
          {/* <ul className={css.socialMediaIcons}>
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
          </ul> */}
          {!isDesktop && (
            <BurgerMenu
              // className={css.burgerMenu}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
