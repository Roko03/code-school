import { useEffect, useState } from "react";
import styles from "./AdminUserPageSection.module.scss";
import AdminUserRoleSelector from "./components/admin-user-role-selector/AdminUserRoleSelector";
import { useSearchParams } from "react-router-dom";
import AdminUserListComponent from "./components/admin-user-list/AdminUserListComponent";
import getAllUser from "../../lib/user/getAllUser";
import filterUser from "../../lib/user/filterUser";

const AdminUserPageSection = () => {
  const [searchParams] = useSearchParams();

  const query: "-" | "adm" | "prof" | "stu" =
    searchParams.get("role") !== null
      ? (searchParams.get("role") as "adm" | "prof" | "stu")
      : "-";

  const [roleSelected, setRoleSelected] = useState<
    "-" | "adm" | "prof" | "stu"
  >(query);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalVariant, setModalVariant] = useState<
    null | "add" | "edit" | "delete"
  >(null);

  const [userList, setUserList] = useState<null | UserType[]>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchUsers = async () => {
    setIsLoading(true);

    let response;

    if (query == "-") {
      response = await getAllUser();
    } else {
      response = await filterUser(query);
    }

    setUserList(response);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [query]);

  return (
    <section className={styles.admin_users_section}>
      <AdminUserRoleSelector
        value={roleSelected}
        onChange={(value: "-" | "adm" | "prof" | "stu") =>
          setRoleSelected(value)
        }
      />
      <AdminUserListComponent
        type={query}
        userList={userList}
        isLoading={isLoading}
      />
      {isModalOpen && <div>EJ</div>}
    </section>
  );
};

export default AdminUserPageSection;
