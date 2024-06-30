import { useEffect, useState } from "react";
import styles from "./ProfessorWorkshopPageSection.module.scss";
import ProfessorWorkshopListComponent from "./components/professor-workshop-list/ProfessorWorkshopListComponent";
import getProfessorWorkshop from "../../lib/workshop/getProfessorWorkshop";

const ProfessorWorkshopPageSection = () => {
  const [workshopList, setWorkshopList] = useState<
    ProfessorWorkshopType[] | null
  >(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchWorkshops = async () => {
    setIsLoading(true);
    const response = await getProfessorWorkshop();

    if (!response.success) {
      return;
    }

    setWorkshopList(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWorkshops();
  }, []);

  return (
    <section className={styles.professor_workshop_section}>
      <ProfessorWorkshopListComponent
        workshopList={workshopList}
        isLoading={isLoading}
      />
    </section>
  );
};

export default ProfessorWorkshopPageSection;
