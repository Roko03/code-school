import styles from "./AuthenticationPageSection.module.scss";
import AuthenticationFormComponent from "./components/authentication-form/AuthenticationFormComponent";

const AuthenticationPageSection = () => {
  return (
    <>
      <section className={styles.authentication_section}>
        <h2>Prijavi se u sustav</h2>
        <AuthenticationFormComponent />
      </section>
    </>
  );
};

export default AuthenticationPageSection;
