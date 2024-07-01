import styles from "./StudentMainPageWorkshopList.module.scss";
import StudentMainPageWorkshopListItem from "./student-workshop-list-item/StudentMainPageWorkshopListItem";

interface StudentMainPageWorkshopListProps {
  workshopList: StudentWorkshopLoginType[] | null;
}

const StudentMainPageWorkshopList: React.FC<
  StudentMainPageWorkshopListProps
> = ({ workshopList }) => {
  if (workshopList == null) return <></>;

  if (workshopList.length == 0)
    return (
      <div className={styles.workshop_list}>
        <h1>Moje radionice</h1>
        <p>Nemate prijavljenih radionice</p>
      </div>
    );
  return (
    <div className={styles.workshop_list_container}>
      <h1>Moje radionice</h1>
      <div className={styles.workshop_list}>
        {workshopList.map((workshopElement) => {
          return (
            <StudentMainPageWorkshopListItem
              key={workshopElement.id}
              workshop={workshopElement.workshop}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StudentMainPageWorkshopList;
