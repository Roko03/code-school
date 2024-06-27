import ButtonComponent from "../../../../../../components/button/ButtonComponent";
import styles from "./AdminUserListMobileComponent.module.scss";

interface AdminUserListMobileComponentProps {
  userList: null | UserType[];
  type: "-" | "adm" | "prof" | "stu";
}

const AdminUserListMobileComponent: React.FC<
  AdminUserListMobileComponentProps
> = ({ userList, type }) => {
  const getUsers = (type: "-" | "adm" | "prof" | "stu") => {
    if (userList == null) {
      return <></>;
    }

    if (type == "-") {
      return <>{getAllUser()}</>;
    }

    return <AdminUserListByRoleComponent userList={userList} />;
  };

  const getAllUser = () => {
    if (userList == null) {
      return <></>;
    }

    const adminList = userList.filter((user) => user.role == "adm");
    const professorList = userList.filter((user) => user.role == "prof");
    const studentList = userList.filter((user) => user.role == "stu");

    return (
      <>
        <h1>Admin</h1>
        <AdminUserListByRoleComponent userList={adminList} />
        <h1>Profesori</h1>
        <AdminUserListByRoleComponent userList={professorList} />
        <h1>Studenti</h1>
        <AdminUserListByRoleComponent userList={studentList} />
      </>
    );
  };

  return <div className={styles.user_mobile_list}>{getUsers(type)}</div>;
};

const AdminUserListByRoleComponent = ({
  userList,
}: {
  userList: UserType[];
}) => {
  return (
    <div className={styles.user_list}>
      {userList.map((user) => {
        return (
          <div className={styles.user_list__item} key={user.id}>
            <div className={styles.user_list__item__data}>
              <p>
                <span>Korisničko ime: </span>
                {user.username}
              </p>
              <p>
                <span>Email: </span> {user.email}
              </p>
              {user.role == "prof" && (
                <p className={styles.user_list__item__data__biography}>
                  <span>Biografija: </span>
                  {user.bio}
                </p>
              )}
            </div>
            <div className={styles.user_list__item__buttons}>
              <ButtonComponent
                variant={"adminEdit"}
                onClick={() => console.log(user.id)}
              >
                <img src={"/pencil.svg"} alt="trash" />
                <span>
                  <p>Uredi</p>
                </span>
              </ButtonComponent>
              <ButtonComponent
                variant={"adminTrash"}
                onClick={() => console.log(user.id)}
              >
                <img src={"/trash.svg"} alt="trash" />
                <span>
                  <p>Izbriši</p>
                </span>
              </ButtonComponent>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminUserListMobileComponent;
