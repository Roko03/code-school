import { useEffect, useState } from "react";
import styles from "./StudentWorkshopPageSection.module.scss";
import StudentWorkshopListComponent from "./components/student-workshop-list/StudentWorkshopListComponent";
import getWorkshopByUser from "../../lib/workshop/getWorkshopByUser";

const StudentWorkshopPageSection = () => {
  const [workshopList, setWorkshopList] = useState<null | WorkshopType[]>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchWorkshops = async () => {
    setIsLoading(true);
    const response = await getWorkshopByUser();

    setWorkshopList(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWorkshops();
  }, []);

  console.log(workshopList);

  return (
    <section className={styles.student_workshop_section}>
      <StudentWorkshopListComponent workshopList={workshopList} />
    </section>
  );
};

export default StudentWorkshopPageSection;
