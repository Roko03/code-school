import { useState } from "react";
import styles from "./StudentWorkshopListComponent.module.scss";
import StudentWorkshopListItemComponent from "./student-workshop-list-item/StudentWorkshopListItemComponent";
import CircularProgressComponent from "../../../../components/circular-progress/CircularProgressComponent";

interface StudentWorkshopListComponentProps {
  workshopList: WorkshopType[] | null;
  isLoading: boolean;
}

const StudentWorkshopListComponent: React.FC<
  StudentWorkshopListComponentProps
> = ({ workshopList, isLoading }) => {
  const [workshopItemOpen, setWorkshopItemOpen] = useState<number | null>(null);

  if (isLoading) return <CircularProgressComponent />;

  if (workshopList == null) return <></>;
  if (workshopList.length == 0) return <p>Nema prikaza</p>;

  return (
    <div className={styles.workshop_list}>
      {workshopList.map((workshop) => {
        return (
          <StudentWorkshopListItemComponent
            key={workshop.id}
            workshop={workshop}
            workshopItemOpen={workshopItemOpen}
            setWorkshopItemOpen={(id: number | null) => setWorkshopItemOpen(id)}
          />
        );
      })}
    </div>
  );
};

export default StudentWorkshopListComponent;
