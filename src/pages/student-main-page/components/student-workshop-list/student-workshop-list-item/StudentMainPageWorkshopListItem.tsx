import { formatDate } from "../../../../../util/formatDate";
import styles from "./StudentMainPageWorkshopListItem.module.scss";

interface StudentMainPageWorkshopListItemProps {
  workshop: WorkshopType;
}

const StudentMainPageWorkshopListItem: React.FC<
  StudentMainPageWorkshopListItemProps
> = ({ workshop }) => {
  return (
    <div className={styles.workshop_list_item}>
      <div className={styles.workshop_list_item__image}>
        <img src={"/background-banner.png"} alt="workshop-item-image" />
      </div>
      <div className={styles.workshop_list_item__info}>
        <h2>{workshop.name}</h2>
        <hr></hr>
        <div className={styles.workshop_list_item__info__text}>
          <span>
            <img src={"/profile.svg"} alt="profile" />
            <p>{workshop.user.username}</p>
          </span>

          <span>
            <img src={"/calendar.svg"} alt="profile" />
            <p>{formatDate(workshop.time)}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentMainPageWorkshopListItem;
