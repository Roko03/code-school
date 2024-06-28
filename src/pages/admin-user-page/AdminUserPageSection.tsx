import { ReactNode, useEffect, useState } from "react";
import styles from "./AdminUserPageSection.module.scss";
import AdminUserRoleSelector from "./components/admin-user-role-selector/AdminUserRoleSelector";
import { useSearchParams } from "react-router-dom";
import AdminUserListComponent from "./components/admin-user-list/AdminUserListComponent";
import getAllUser from "../../lib/user/getAllUser";
import filterUser from "../../lib/user/filterUser";
import AdminModalComponent from "../../components/modal/admin/AdminModalComponent";
import AdminUserFormComponent, {
  TAdminUserSchema,
} from "./components/admin-user-form/AdminUserFormComponent";
import getUserById from "../../lib/user/getUserById";
import editUserById from "../../lib/user/editUserById";
import AdminUserDeleteComponent from "./components/admin-user-delete/AdminUserDeleteComponent";
import deleteUserById from "../../lib/user/deleteUserById";
import ButtonComponent from "../../components/button/ButtonComponent";
import createUser from "../../lib/user/createUser";

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

  const [targerUser, setTargetUser] = useState<null | UserType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const closeDialogFunction = () => {
    setIsModalOpen(false);
    setTargetUserId(null);
    setTargetUser(null);
  };

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

  const fetchUser = async () => {
    if (targetUserId == null) {
      return;
    }

    const response = await getUserById(targetUserId);

    setTargetUser(response);
  };

  const makeUser = async (data: TAdminUserSchema) => {
    const response = await createUser(data);
    closeDialogFunction();
    fetchUsers();
  };

  const editUser = async (data: TAdminUserSchema) => {
    if (targetUserId == null) {
      return;
    }

    const response = await editUserById(targetUserId, data);

    closeDialogFunction();
    fetchUsers();
  };

  const deleteUser = async () => {
    if (targetUserId == null) {
      return;
    }

    const response = await deleteUserById(targetUserId);

    closeDialogFunction();
    fetchUsers();
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
      add: (
        <AdminUserFormComponent
          variant={"add"}
          user={null}
          makeFunction={(data: TAdminUserSchema) => makeUser(data)}
        />
      ),
      edit: (
        <AdminUserFormComponent
          variant={"edit"}
          user={targerUser}
          editFunction={(data: TAdminUserSchema) => editUser(data)}
        />
      ),
      delete: (
        <AdminUserDeleteComponent
          closeDialog={() => closeDialogFunction()}
          user={targerUser}
          deleteFunction={() => deleteUser()}
        />
      ),
    };

    return formVariant[type];
  };

  useEffect(() => {
    fetchUsers();
  }, [query]);

  useEffect(() => {
    fetchUser();
  }, [targetUserId]);

  return (
    <section className={styles.admin_users_section}>
      <ButtonComponent
        variant={"add"}
        onClick={() => {
          setIsModalOpen(true);
          setModalVariant("add");
          setTargetUserId(null);
        }}
      >
        <img src={"/plus.svg"} alt="plus-image" />
        <p>Dodaj korisnika</p>
      </ButtonComponent>
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
        closeDialog={() => closeDialogFunction()}
        type={modalVariant}
      >
        {getFormByModalVariant(modalVariant)}
      </AdminModalComponent>
    </section>
  );
};

export default AdminUserPageSection;
