import LinkListComponent from "../link-list/LinkListComponent";
import styles from "./FooterComponent.module.scss";
import LogoComponent from "../logo/LogoComponent";

const FooterComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wave}>
        <img src="/blue-background-wave.svg" alt="blue-background-wave" />
      </div>
      <div className={styles.footer__box}>
        <div className={styles.footer__box__container}>
          <div className={styles.footer__box__container__logo}>
            <LogoComponent />
          </div>
          <LinkListComponent variant={"footer"} />
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
