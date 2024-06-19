import { useState } from "react";
import styles from "./HeaderComponent.module.scss";
import MenuComponent from "./menu/MenuComponent";

const HeaderComponent = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__main}>
            <a className={styles.header__main_logo}>
              <img
                src={"/logo-desktop.svg"}
                alt="logo"
                className={styles.header__main__logo__desktop}
              />
              <img
                src={"/logo-mobile.svg"}
                alt="logo"
                className={styles.header__main__logo__mobile}
              />
            </a>
            <div className={styles.header__main__links}></div>
          </div>
        </div>
      </header>
      <MenuComponent
        isActive={isMenuActive}
        closeModal={() => setIsMenuActive(false)}
      />
    </>
  );
};

export default HeaderComponent;
