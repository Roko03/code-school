import styles from "./StudentInstructorListItemComponent.module.scss";

interface StudentInstructorListItemComponentProps {
  instructor: StudentInstructor;
}

const StudentInstructorListItemComponent: React.FC<
  StudentInstructorListItemComponentProps
> = ({ instructor }) => {
  return (
    <div className={styles.instructor_item}>
      <div className={styles.instructor_item__image}>
        <img src={"/background-banner.png"} alt="instructor-image" />
      </div>
      <div className={styles.instructor_item__info}>
        <span className={styles.instructor_item__info__name}>
          {instructor.username}
        </span>
        <p className={styles.instructor_item__info__organization}>
          <>
            {instructor.organizations.length == 0 ? (
              <></>
            ) : (
              <>
                {instructor.organizations.map((organization, index) => (
                  <span key={index}>{organization.name}</span>
                ))}
              </>
            )}
          </>
        </p>
        <p className={styles.instructor_item__info__text}>{instructor.bio}</p>
      </div>
    </div>
  );
};

export default StudentInstructorListItemComponent;
