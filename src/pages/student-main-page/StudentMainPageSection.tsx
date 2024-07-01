import { useState } from "react";
import styles from "./StudentMainPageSection.module.scss";
import StudentMainPageWorkshopList from "./components/student-workshop-list/StudentMainPageWorkshopList";

const StudentMainPageSection = () => {
  const [workshopList, setWorkshopList] = useState<
    StudentWorkshopLoginType[] | null
  >(null);

  return (
    <section className={styles.student_main_section}>
      <StudentMainPageWorkshopList workshopList={workshopList} />
    </section>
  );
};

export default StudentMainPageSection;
