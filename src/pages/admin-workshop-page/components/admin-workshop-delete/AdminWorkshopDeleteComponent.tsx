import ButtonComponent from "../../../../components/button/ButtonComponent";
import styles from "./AdminWorkshopDeleteComponent.module.scss";

interface AdminWorkshopDeleteComponentProps {
  workshop: WorkshopType | null;
  closeDialog: () => void;
  deleteFunction: () => void;
}

const AdminWorkshopDeleteComponent: React.FC<
  AdminWorkshopDeleteComponentProps
> = ({ workshop, closeDialog, deleteFunction }) => {
  if (workshop == null) return <></>;

  return (
    <div className={styles.delete_box}>
      <p>Želite li zaista izbrisati:</p>
      <h2>{workshop.name}</h2>
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

export default AdminWorkshopDeleteComponent;
