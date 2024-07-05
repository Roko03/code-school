import ButtonComponent from "../../../../components/button/ButtonComponent";
import styles from "./AdminUserDeleteComponent.module.scss";

interface AdminUserDeleteComponentProps {
  closeDialog: () => void;
  user: UserType | null;
  deleteFunction: () => void;
}

const AdminUserDeleteComponent: React.FC<AdminUserDeleteComponentProps> = ({
  closeDialog,
  user,
  deleteFunction,
}) => {
  if (user == null) {
    return;
  }

  return (
    <div className={styles.delete_box}>
      <p>Želite li zaista izbrisati korisnika:</p>
      <h2>{user.username}</h2>
      <div className={styles.delete_box__buttons}>
        <ButtonComponent variant={"add"} onClick={() => closeDialog()}>
          <p>Vrati</p>
        </ButtonComponent>
        <ButtonComponent variant={"delete"} onClick={deleteFunction}>
          <p>Izbriši</p>
        </ButtonComponent>
      </div>
    </div>
  );
};

export default AdminUserDeleteComponent;
