import { useState } from "react";
import styles from "./StudentWorkshopPageSection.module.scss";
import StudentWorkshopListComponent from "./components/student-workshop-list/StudentWorkshopListComponent";

const StudentWorkshopPageSection = () => {
  const [workshopList, setWorkshopList] = useState<
    null | StudentWorkshopLoginType[]
  >([
    {
      id: 12,
      workshop: {
        id: 7,
        user: {
          id: 2,
          username: "Jakov",
          email: "jakov@gmail.com",
          bio: "Jakov biografija1",
          role: "prof",
        },
        numb_of_users: 1,
        name: "Radionica 1",
        time: "2024-06-21T07:00:00Z",
        info: "Radionica 1 opis",
        level: "jun",
        subject: "rjs",
        user_id: 2,
      },
      workshop_id: 7,
    },
  ]);

  return (
    <section className={styles.student_workshop_section}>
      <StudentWorkshopListComponent workshopList={workshopList} />
    </section>
  );
};

export default StudentWorkshopPageSection;
