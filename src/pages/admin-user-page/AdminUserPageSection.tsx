import { ReactNode, useEffect, useState } from "react";
import styles from "./AdminUserPageSection.module.scss";
import AdminUserRoleSelector from "./components/admin-user-role-selector/AdminUserRoleSelector";
import { useSearchParams } from "react-router-dom";
import AdminUserListComponent from "./components/admin-user-list/AdminUserListComponent";
import getAllUser from "../../lib/user/getAllUser";
import filterUser from "../../lib/user/filterUser";
import { number } from "zod";
import AdminModalComponent from "../../components/modal/admin/AdminModalComponent";
import AdminUserFormComponent from "./components/admin-user-form/AdminUserFormComponent";

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
  const [targetUserId, setTargetUserId] = useState<null | number>(null);

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

  const openModalByVariant = (
    variant: "edit" | "delete",
    userid: null | number
  ) => {
    setIsModalOpen(true);
    setModalVariant(variant);
    setTargetUserId(userid);
  };

  const getFormByModalVariant = (type: null | "add" | "edit" | "delete") => {
    if (type == null) {
      return <></>;
    }

    const formVariant: { [key in "add" | "edit" | "delete"]: ReactNode } = {
      add: <></>,
      edit: <AdminUserFormComponent />,
      delete: <></>,
    };

    return formVariant[type];
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
        openModalByVariant={(
          variant: "edit" | "delete",
          userid: null | number
        ) => openModalByVariant(variant, userid)}
      />
      <AdminModalComponent
        isOpen={isModalOpen}
        closeDialog={() => {
          setIsModalOpen(false);
          setTargetUserId(null);
          setModalVariant(null);
        }}
        type={modalVariant}
      >
        {getFormByModalVariant(modalVariant)}
      </AdminModalComponent>
    </section>
  );
};

export default AdminUserPageSection;
