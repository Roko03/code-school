import { useEffect, useState } from "react";
import styles from "./StudentWorkshopPageSection.module.scss";
import StudentWorkshopListComponent from "./components/student-workshop-list/StudentWorkshopListComponent";
import getWorkshopByUser from "../../lib/workshop/getWorkshopByUser";
import { authManager } from "../../util/useAuthContext";
import appliedToWorkshop from "../../lib/workshop/appliedToWorkshop";

const StudentWorkshopPageSection = () => {
  const auth = authManager();
  const [workshopList, setWorkshopList] = useState<null | WorkshopType[]>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchWorkshops = async () => {
    setIsLoading(true);
    const response = await getWorkshopByUser();

    setWorkshopList(response);
    setIsLoading(false);
  };

  const appliedToWorkshopFunction = async (workshop_id: number | null) => {
    if (auth.user == null || workshop_id == null) {
      return;
    }

    const response = await appliedToWorkshop(workshop_id, auth.user.id);

    if (!response.success) {
      return;
    }

    fetchWorkshops();
  };

  useEffect(() => {
    fetchWorkshops();
  }, []);

  return (
    <section className={styles.student_workshop_section}>
      <StudentWorkshopListComponent
        workshopList={workshopList}
        isLoading={isLoading}
        workshopFunction={(id: number) => appliedToWorkshopFunction(id)}
      />
    </section>
  );
};

export default StudentWorkshopPageSection;
