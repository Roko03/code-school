import { useEffect, useState } from "react";
import styles from "./StudentMainPageSection.module.scss";
import StudentMainPageWorkshopList from "./components/student-workshop-list/StudentMainPageWorkshopList";
import getStudentWorkshop from "../../lib/workshop/getStudentWorkshop";

const StudentMainPageSection = () => {
  const [workshopList, setWorkshopList] = useState<
    StudentWorkshopLoginType[] | null
  >(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchWorkshops = async () => {
    setIsLoading(true);
    const response = await getStudentWorkshop();

    if (!response.success) {
      return;
    }

    setWorkshopList(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWorkshops();
  }, []);

  return (
    <section className={styles.student_main_section}>
      <StudentMainPageWorkshopList
        workshopList={workshopList}
        isLoading={isLoading}
      />
    </section>
  );
};

export default StudentMainPageSection;
