import { useRef } from "react";
import ButtonComponent from "../../../../../components/button/ButtonComponent";
import { formatDate } from "../../../../../util/formatDate";
import styles from "./StudentWorkshopListItemComponent.module.scss";
import { LEVELS, SUBJECTS } from "../../../../../constants";

interface StudentWorkshopListItemComponentProps {
  workshop: WorkshopType;
  workshopItemOpen: number | null;
  setWorkshopItemOpen: (id: number | null) => void;
}

const StudentWorkshopListItemComponent: React.FC<
  StudentWorkshopListItemComponentProps
> = ({ workshop, workshopItemOpen, setWorkshopItemOpen }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleAccordionClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
      if (workshopItemOpen == workshop.id) {
        setWorkshopItemOpen(null);
      } else {
        setWorkshopItemOpen(workshop.id);
      }
    }
  };

  return (
    <div className={styles.workshop_item}>
      <div
        className={styles.workshop_item__accordion}
        onClick={handleAccordionClick}
      >
        <div className={styles.workshop_item__accordion__image}>
          <img src={"/background-banner.png"} alt={"workshop-image"} />
        </div>
        <div className={styles.workshop_item__accordion__main_info}>
          <p>{workshop.name}</p>
          <p>{workshop.user.username}</p>
          <p>{formatDate(workshop.time)}</p>
          <ButtonComponent
            variant={"entry"}
            onClick={() => {}}
            buttonRef={buttonRef}
          >
            <p>Prijavi se</p>
          </ButtonComponent>
        </div>
      </div>
      <div
        className={`${styles.workshop_item__accordion_item} ${
          workshopItemOpen == workshop.id
            ? styles.workshop_item__accordion_item_open
            : styles.workshop_item__accordion_item_close
        }`}
      >
        <div className={styles.workshop_item__accordion_item__box}>
          <p>
            <span>Broj prijava: </span>
            {workshop.numb_of_users}
          </p>
          <p>
            <span>Težina: </span>
            {LEVELS[workshop.level]}
          </p>
          <p>
            <span>Predmet: </span>
            {SUBJECTS[workshop.subject]}
          </p>
          <p>{workshop.info}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentWorkshopListItemComponent;
