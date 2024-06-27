import ButtonComponent from "../../../../../../components/button/ButtonComponent";
import styles from "./AdminUserTableComponent.module.scss";

interface AdminUserTableComponentProps {
  userList: null | UserType[];
  type: "-" | "adm" | "prof" | "stu";
}

const AdminUserTableComponent: React.FC<AdminUserTableComponentProps> = ({
  userList,
  type,
}) => {
  const getListItems = (type: "-" | "adm" | "prof" | "stu") => {
    if (userList == null) {
      return <></>;
    }

    return userList.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.username}</td>
          <td>{user.email}</td>
          {type == "-" ? (
            <>
              <td>
                {user.role == "adm"
                  ? "Admin"
                  : user.role == "prof"
                  ? "Profesor"
                  : "Student"}
              </td>
            </>
          ) : type == "prof" ? (
            <>
              <td>{user.bio}</td>
            </>
          ) : (
            <></>
          )}
          <td className={styles.td_button}>
            <ButtonComponent
              variant={"adminEdit"}
              onClick={() => console.log(user.id)}
            >
              <img src={"/pencil.svg"} alt="trash" />
              <span>
                <p>Uredi</p>
              </span>
            </ButtonComponent>
          </td>
          <td className={styles.td_button}>
            <ButtonComponent
              variant={"adminTrash"}
              onClick={() => console.log(user.id)}
            >
              <img src={"/trash.svg"} alt="trash" />
              <span>
                <p>Izbriši</p>
              </span>
            </ButtonComponent>
          </td>
        </tr>
      );
    });
  };

  return (
    <table className={styles.admin_user_table}>
      <thead>
        <tr>
          <th>Korisničko ime</th>
          <th>Email</th>
          {type == "-" ? (
            <>
              <th>Uloga</th>
            </>
          ) : type == "prof" ? (
            <>
              <th>Biografija</th>
            </>
          ) : (
            <></>
          )}
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>{getListItems(type)}</tbody>
    </table>
  );
};

export default AdminUserTableComponent;
