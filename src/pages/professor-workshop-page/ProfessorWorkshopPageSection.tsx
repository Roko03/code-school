import { useState } from "react";
import styles from "./ProfessorWorkshopPageSection.module.scss";
import ProfessorWorkshopListComponent from "./components/professor-workshop-list/ProfessorWorkshopListComponent";

const ProfessorWorkshopPageSection = () => {
  const [workshopList, setWorkshopList] = useState<
    ProfessorWorkshopType[] | null
  >([
    {
      id: 7,
      numb_of_users: 0,
      name: "Radionica 1",
      time: "2024-06-21T07:00:00Z",
      info: "Radionica 1 opis",
      level: "jun",
      subject: "rjs",
    },
    {
      id: 10,
      numb_of_users: 0,
      name: "Radionica 2",
      time: "2024-06-13T21:11:00Z",
      info: "afasgag",
      level: "jun",
      subject: "rjs",
    },
  ]);

  return (
    <section className={styles.professor_workshop_section}>
      <ProfessorWorkshopListComponent workshopList={workshopList} />
    </section>
  );
};

export default ProfessorWorkshopPageSection;
