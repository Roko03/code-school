import CircularProgressComponent from "../../../../components/circular-progress/CircularProgressComponent";
import styles from "./AdminWorkshopListComponent.module.scss";
import AdminWorkshopListItem from "./admin-workshop-list-item/AdminWorkshopListItem";

interface AdminWorkshopListComponentProps {
  workshopList: null | WorkshopType[];
  isLoading: boolean;
}

const AdminWorkshopListComponent: React.FC<AdminWorkshopListComponentProps> = ({
  workshopList,
  isLoading,
}) => {
  if (isLoading) return <CircularProgressComponent />;

  if (workshopList == null) return <></>;

  if (workshopList.length == 0) return <p>Nema prikaza</p>;

  return (
    <div className={styles.admin_workshop_list}>
      {workshopList.map((workshop) => {
        return <AdminWorkshopListItem key={workshop.id} workshop={workshop} />;
      })}
    </div>
  );
};

export default AdminWorkshopListComponent;
