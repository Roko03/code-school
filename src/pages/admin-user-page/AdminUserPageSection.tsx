import { useState } from "react";
import styles from "./AdminUserPageSection.module.scss";
import AdminUserRoleSelector from "./components/admin-user-role-selector/AdminUserRoleSelector";

const AdminUserPageSection = () => {
  const [roleSelected, setRoleSelected] = useState<
    "-" | "adm" | "prof" | "stu"
  >("-");

  return (
    <section className={styles.admin_users_section}>
      <AdminUserRoleSelector
        value={roleSelected}
        onChange={(value: "-" | "adm" | "prof" | "stu") =>
          setRoleSelected(value)
        }
      />
    </section>
  );
};

export default AdminUserPageSection;
