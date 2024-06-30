import { useState } from "react";
import styles from "./ProfessorWorkshopPageSection.module.scss";
import ProfessorWorkshopListComponent from "./components/professor-workshop-list/ProfessorWorkshopListComponent";

const ProfessorWorkshopPageSection = () => {
  const [workshopList, setWorkshopList] = useState<
    ProfessorWorkshopType[] | null
  >(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

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
