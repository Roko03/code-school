import { useState } from "react";
import styles from "./StudentWorkshopListComponent.module.scss";
import StudentWorkshopListItemComponent from "./student-workshop-list-item/StudentWorkshopListItemComponent";

interface StudentWorkshopListComponentProps {
  workshopList: StudentWorkshopLoginType[] | null;
}

const StudentWorkshopListComponent: React.FC<
  StudentWorkshopListComponentProps
> = ({ workshopList }) => {
  const [workshopItemOpen, setWorkshopItemOpen] = useState<number | null>(null);

  if (workshopList == null) return <></>;
  if (workshopList.length == 0) return <p>Nema prikaza</p>;

  return (
    <div className={styles.workshop_list}>
      {workshopList.map((workshop) => {
        return (
          <StudentWorkshopListItemComponent
            workshop={workshop.workshop}
            workshopItemOpen={workshopItemOpen}
            setWorkshopItemOpen={(id: number | null) => setWorkshopItemOpen(id)}
          />
        );
      })}
    </div>
  );
};

export default StudentWorkshopListComponent;
