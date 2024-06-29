import styles from "./AdminWorkshopPageSection.module.scss";
import ButtonComponent from "../../components/button/ButtonComponent";
import AdminWorkshopListComponent from "./components/admin-workshop-list/AdminWorkshopListComponent";
import { useEffect, useState } from "react";
import getAllWorkshop from "../../lib/workshop/getAllWorkshop";

const AdminWorkshopPageSection = () => {
  const [workshopList, setWorkshopList] = useState<null | WorkshopType[]>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchWorkshops = async () => {
    setIsLoading(true);
    const response = await getAllWorkshop();

    setWorkshopList(response);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchWorkshops();
  }, []);

  return (
    <section className={styles.admin_workshop_section}>
      <ButtonComponent variant={"add"}>
        <p>Dodaj radionicu</p>
      </ButtonComponent>
      <AdminWorkshopListComponent
        workshopList={workshopList}
        isLoading={isLoading}
      />
    </section>
  );
};

export default AdminWorkshopPageSection;
