import { useState } from "react";
import styles from "./StudentMainPageSection.module.scss";
import StudentMainPageWorkshopList from "./components/student-workshop-list/StudentMainPageWorkshopList";

const StudentMainPageSection = () => {
  const [workshopList, setWorkshopList] = useState<
    StudentWorkshopLoginType[] | null
  >([
    {
      id: 15,
      workshop: {
        id: 10,
        user: {
          id: 2,
          username: "Jakov",
          email: "jakov@gmail.com",
          bio: "Jakov biografija1",
          role: "prof",
        },
        numb_of_users: 1,
        name: "Radionica 2",
        time: "2024-06-13T21:11:00Z",
        info: "afasgag",
        level: "jun",
        subject: "rjs",
        user_id: 2,
      },
      workshop_id: 10,
    },
    {
      id: 17,
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
    <section className={styles.student_main_section}>
      <StudentMainPageWorkshopList workshopList={workshopList} />
    </section>
  );
};

export default StudentMainPageSection;
