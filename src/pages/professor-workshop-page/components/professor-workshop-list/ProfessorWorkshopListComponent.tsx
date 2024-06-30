import styles from "./ProfessorWorkshopListComponent.module.scss";
import ProfessorWorkshopListItem from "./professor-workshop-list-item/ProfessorWorkshopListItem";

interface ProfessorWorkshopListComponentProps {
  workshopList: ProfessorWorkshopType[] | null;
}

const ProfessorWorkshopListComponent: React.FC<
  ProfessorWorkshopListComponentProps
> = ({ workshopList }) => {
  if (workshopList == null) return <></>;

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
