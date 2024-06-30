import CircularProgressComponent from "../../../../components/circular-progress/CircularProgressComponent";
import styles from "./ProfessorWorkshopListComponent.module.scss";
import ProfessorWorkshopListItem from "./professor-workshop-list-item/ProfessorWorkshopListItem";

interface ProfessorWorkshopListComponentProps {
  workshopList: ProfessorWorkshopType[] | null;
  isLoading: boolean;
}

const ProfessorWorkshopListComponent: React.FC<
  ProfessorWorkshopListComponentProps
> = ({ workshopList, isLoading }) => {
  if (isLoading) return <CircularProgressComponent />;

  if (workshopList == null) return <></>;

  if (workshopList.length == 0) return <p>Nema prikaza</p>;

  return (
    <div className={styles.workshop_list}>
      {workshopList.map((workshop) => {
        return (
          <ProfessorWorkshopListItem key={workshop.id} workshop={workshop} />
        );
      })}
    </div>
  );
};

export default ProfessorWorkshopListComponent;
