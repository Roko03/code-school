import { useState } from "react";
import styles from "./AdminUserPageSection.module.scss";
import AdminUserRoleSelector from "./components/admin-user-role-selector/AdminUserRoleSelector";
import { useSearchParams } from "react-router-dom";
import AdminUserListComponent from "./components/admin-user-list/AdminUserListComponent";

const AdminUserPageSection = () => {
  const [searchParams] = useSearchParams();
  const query: "-" | "adm" | "prof" | "stu" =
    searchParams.get("role") !== null
      ? (searchParams.get("role") as "adm" | "prof" | "stu")
      : "-";
  const [roleSelected, setRoleSelected] = useState<
    "-" | "adm" | "prof" | "stu"
  >(query);

  return (
    <section className={styles.admin_users_section}>
      <AdminUserRoleSelector
        value={roleSelected}
        onChange={(value: "-" | "adm" | "prof" | "stu") =>
          setRoleSelected(value)
        }
      />
      <AdminUserListComponent type={query} />
    </section>
  );
};

export default AdminUserPageSection;
