import ButtonComponent from "../../../../components/button/ButtonComponent";
import styles from "./AdminOrganizationDeleteComponent.module.scss";

interface AdminOrganizationDeleteComponentProps {
  organization: OrganizationType | null;
  closeDialog: () => void;
  deleteFunction: () => void;
}

const AdminOrganizationDeleteComponent: React.FC<
  AdminOrganizationDeleteComponentProps
> = ({ organization, closeDialog, deleteFunction }) => {
  if (organization == null) {
    return <></>;
  }
  return (
    <div className={styles.delete_box}>
      <p>Želite li zaista izbrisati:</p>
      <h2>{organization.name}</h2>
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

export default AdminOrganizationDeleteComponent;
