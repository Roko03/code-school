import { authManager } from "../../util/useAuthContext";
import styles from "./AdminMainPageSection.module.scss";

const AdminMainPageSection = () => {
  const auth = authManager();
  return (
    <section className={styles.admin_main_section}>
      <h1>Dobrodošao {auth.user?.username}, vaša uloga je admin</h1>
    </section>
  );
};

export default AdminMainPageSection;
