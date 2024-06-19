import LinkListComponent from "../link-list/LinkListComponent";
import styles from "./FooterComponent.module.scss";

const FooterComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wave}>
        <img src="/blue-background-wave.svg" alt="blue-background-wave" />
      </div>
      <div className={styles.footer__box}>
        <div className={styles.footer__box__container}>
          <a href="/" className={styles.footer__box__logo}>
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
          </a>
          <LinkListComponent variant={"footer"} />
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
