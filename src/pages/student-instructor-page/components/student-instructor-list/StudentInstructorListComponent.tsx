import styles from "./StudentInstructorListComponent.module.scss";
import StudentInstructorListItemComponent from "./student-instructor-list-item/StudentInstructorListItemComponent";

interface StudentInstructorListComponentProps {
  instructorList: StudentInstructor[] | null;
}

const StudentInstructorListComponent: React.FC<
  StudentInstructorListComponentProps
> = ({ instructorList }) => {
  if (instructorList == null) return <></>;
  if (instructorList.length == 0) return <p>Nema prikaza</p>;

  return (
    <div className={styles.instructor_list}>
      {instructorList.map((instructor) => {
        return (
          <StudentInstructorListItemComponent
            key={instructor.id}
            instructor={instructor}
          />
        );
      })}
    </div>
  );
};

export default StudentInstructorListComponent;
