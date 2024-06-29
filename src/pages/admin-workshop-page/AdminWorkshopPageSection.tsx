import styles from "./AdminWorkshopPageSection.module.scss";
import ButtonComponent from "../../components/button/ButtonComponent";
import AdminWorkshopListComponent from "./components/admin-workshop-list/AdminWorkshopListComponent";
import { useState } from "react";

const AdminWorkshopPageSection = () => {
  const [workshopList, setWorkshopList] = useState<null | WorkshopType[]>([
    {
      id: 1,
      name: "Radionica 1",
      time: "2024-06-19T06:00:00Z",
      info: "Radionica 1 opis",
      level: "jun",
      subject: "rjs",
      user_id: 2,
    },
    {
      id: 2,
      name: "Radionica 2",
      time: "2024-06-19T06:00:00Z",
      info: "Radionica 1 opis",
      level: "jun",
      subject: "rjs",
      user_id: 2,
    },
  ]);

  return (
    <section className={styles.admin_workshop_section}>
      <ButtonComponent variant={"add"}>
        <p>Dodaj radionicu</p>
      </ButtonComponent>
      <AdminWorkshopListComponent workshopList={workshopList} />
    </section>
  );
};

export default AdminWorkshopPageSection;
