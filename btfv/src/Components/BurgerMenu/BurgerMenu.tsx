import React from "react";
import sprite from "../../assets/sprite.svg";
import css from "./BurgerMenu.module.css";

interface iProps {
  //   children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: React.FC<iProps> = ({ isOpen, setIsOpen }) => {
  const handleIsOpen = () => {
    setIsOpen(true);
  };

  const handleClosed = () => {
    setIsOpen(false);
  };

  return (
    <>
      {!isOpen && (
        <button
          className={css.burgerMenu}
          type="button"
          aria-label="button for open mobile menu"
          onClick={handleIsOpen}
        >
          <svg className={css.burgerIcon} width={50} height={50}>
            <use xlinkHref={sprite + "#burger_menu_icon"} />
          </svg>
        </button>
      )}

      <div className={`${css.burgerMenu}  ${isOpen && css.transitionOpen}`}>
        <button
          type="button"
          className={css.menuCloseBtn}
          onClick={handleClosed}
          aria-label="close menu"
        >
          <svg className={css.closeMenuIcon}>
            <use href={sprite + "#close-icon"} />
          </svg>
        </button>

        {/* {children} */}
      </div>
    </>
  );
};

export default BurgerMenu;
