import { useState } from "react";
import styles from "./StudentInstructorPageSection.module.scss";
import StudentInstructorListComponent from "./components/student-instructor-list/StudentInstructorListComponent";

const StudentInstructorPageSection = () => {
  const [instructorList, setInstructorList] = useState<
    null | StudentInstructor[]
  >([
    {
      id: 2,
      username: "Jakov",
      email: "jakov@gmail.com",
      bio: "Jakov biografija1",
      organizations: [
        {
          id: 1,
          name: "Organizacijaaa",
          info: "Organizacija info",
        },
      ],
    },
    {
      id: 15,
      username: "karlo",
      email: "karlo@gmail.com",
      bio: null,
      organizations: [
        {
          id: 1,
          name: "Organizacijaaa",
          info: "Organizacija info",
        },
      ],
    },
  ]);

  return (
    <section className={styles.student_instructor_section}>
      <StudentInstructorListComponent instructorList={instructorList} />
    </section>
  );
};

export default StudentInstructorPageSection;
