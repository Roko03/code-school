import { authManager } from "../../util/useAuthContext";
import styles from "./ProfessorMainPageSection.module.scss";

const ProfessorMainPageSection = () => {
  const auth = authManager();
  return (
    <section className={styles.professor_main_section}>
      <h1>Dobrodošli {auth.user?.username}, vaša uloga je profesor</h1>
    </section>
  );
};

export default ProfessorMainPageSection;
