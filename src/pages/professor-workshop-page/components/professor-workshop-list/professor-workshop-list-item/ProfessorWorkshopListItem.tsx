import { LEVELS, SUBJECTS } from "../../../../../constants";
import { formatDate } from "../../../../../util/formatDate";
import styles from "./ProfessorWorkshopListItem.module.scss";

interface ProfessorWorkshopListItemProps {
  workshop: ProfessorWorkshopType;
}

const ProfessorWorkshopListItem: React.FC<ProfessorWorkshopListItemProps> = ({
  workshop,
}) => {
  return (
    <div className={styles.workshop_item}>
      <div className={styles.workshop_item__image}>
        <img src={"/background-banner.png"} alt={`${workshop.name}-image`} />
      </div>
      <div className={styles.workshop_item__info}>
        <div className={styles.workshop_item__info__top}>
          <h2>{workshop.name}</h2>
          <p>{formatDate(workshop.time)}</p>
          <p>{workshop.info}</p>
          <span className={styles.workshop_item__info__top__level}>
            {LEVELS[workshop.level]}
          </span>
        </div>
        <div className={styles.workshop_item__info__bottom}>
          <span className={styles.workshop_item__info__bottom__counter}>
            <img src={"/people.svg"} alt="people" width={28} height={28} />
            <p>{workshop.numb_of_users}</p>
          </span>
          <p className={styles.workshop_item__info__bottom__subject}>
            {SUBJECTS[workshop.subject]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessorWorkshopListItem;
