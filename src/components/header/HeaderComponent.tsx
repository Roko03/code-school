import { useState } from "react";
import styles from "./HeaderComponent.module.scss";
import MenuComponent from "./menu/MenuComponent";
import BurgerMenuComponent from "../burger-menu/BurgerMenuComponent";
import LinkListComponent from "../link-list/LinkListComponent";
import { Link } from "react-router-dom";
import { authManager } from "../../util/useAuthContext";
import LogoComponent from "../logo/LogoComponent";
import ProfileComponent from "../profile/ProfileComponent";

const HeaderComponent = () => {
  const authenticationManager = authManager();
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__main}>
            <LogoComponent />
            <div className={styles.header__main__links}>
              <LinkListComponent variant={"header"} />
            </div>
            {authenticationManager.isAuthorized ? (
              <>
                <BurgerMenuComponent
                  isActive={isMenuActive}
                  onClick={() => setIsMenuActive(!isMenuActive)}
                />
                <ProfileComponent />
              </>
            ) : (
              <Link
                to={"/authentication"}
                className={styles.header__main__register_button}
              >
                Prijavi se
              </Link>
            )}
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
