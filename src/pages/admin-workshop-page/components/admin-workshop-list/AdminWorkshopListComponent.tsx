import styles from "./AdminWorkshopListComponent.module.scss";
import AdminWorkshopListItem from "./admin-workshop-list-item/AdminWorkshopListItem";

interface AdminWorkshopListComponentProps {
  workshopList: null | WorkshopType[];
}

const AdminWorkshopListComponent: React.FC<AdminWorkshopListComponentProps> = ({
  workshopList,
}) => {
  if (workshopList == null) {
    return <></>;
  }
  return (
    <div className={styles.admin_workshop_list}>
      {workshopList.map((workshop) => {
        return <AdminWorkshopListItem key={workshop.id} workshop={workshop} />;
      })}
    </div>
  );
};

export default AdminWorkshopListComponent;
