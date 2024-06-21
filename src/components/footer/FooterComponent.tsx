import { Link } from "react-router-dom";
import LinkListComponent from "../link-list/LinkListComponent";
import styles from "./FooterComponent.module.scss";
import { authManager } from "../../util/useAuthContext";

const FooterComponent = () => {
  const authenticationManager = authManager();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wave}>
        <img src="/blue-background-wave.svg" alt="blue-background-wave" />
      </div>
      <div className={styles.footer__box}>
        <div className={styles.footer__box__container}>
          <Link
            to={authenticationManager.isAuthorized ? "/" : "/authentication"}
            className={styles.footer__box__logo}
          >
            <img
              src={"/logo-mobile.svg"}
              alt="mobile-logo"
              className={styles.footer__box__logo__mobile}
            />
            <img
              src={"/logo-desktop.svg"}
              alt="mobile-logo"
              className={styles.footer__box__logo__desktop}
            />
          </Link>
          <LinkListComponent variant={"footer"} />
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
