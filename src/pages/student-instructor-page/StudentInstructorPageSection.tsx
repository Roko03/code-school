import { useEffect, useState } from "react";
import styles from "./StudentInstructorPageSection.module.scss";
import StudentInstructorListComponent from "./components/student-instructor-list/StudentInstructorListComponent";
import getProfessorsWithOrganizations from "../../lib/user/getProfessorsWithOrganizations";

const StudentInstructorPageSection = () => {
  const [instructorList, setInstructorList] = useState<
    null | StudentInstructor[]
  >(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchInstructors = async () => {
    setIsLoading(true);
    const response = await getProfessorsWithOrganizations();

    setInstructorList(response);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchInstructors();
  }, []);

  return (
    <section className={styles.student_instructor_section}>
      <StudentInstructorListComponent
        instructorList={instructorList}
        isLoading={isLoading}
      />
    </section>
  );
};

export default StudentInstructorPageSection;
