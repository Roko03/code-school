import ButtonComponent from "../../../../../components/button/ButtonComponent";
import { LEVELS, SUBJECTS } from "../../../../../constants";
import { formatDate } from "../../../../../util/formatDate";
import styles from "./AdminWorkshopListItem.module.scss";

interface AdminWorkshopListItemProps {
  workshop: WorkshopType;
  openModalByVariant: (
    variant: "edit" | "delete",
    userid: null | number
  ) => void;
}

const AdminWorkshopListItem: React.FC<AdminWorkshopListItemProps> = ({
  workshop,
  openModalByVariant,
}) => {
  return (
    <div className={styles.workshop_item}>
      <div className={styles.workshop_item__image}>
        <img src={"/background-banner.png"} alt={`${workshop.name}-image`} />
        <div className={styles.workshop_item__buttons}>
          <ButtonComponent
            variant={"adminEdit"}
            onClick={() => openModalByVariant("edit", workshop.id)}
          >
            <img src={"/pencil.svg"} alt="edit" />
            <span>
              <p>Edit</p>
            </span>
          </ButtonComponent>
          <ButtonComponent
            variant={"adminTrash"}
            onClick={() => openModalByVariant("delete", workshop.id)}
          >
            <img src={"/trash.svg"} alt="trash" />
            <span>
              <p>Trash</p>
            </span>
          </ButtonComponent>
        </div>
      </div>
      <div className={styles.workshop_item__info}>
        <div className={styles.workshop_item__info__top}>
          <h2>{workshop.name}</h2>
          <span>{workshop.user.username}</span>
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

export default AdminWorkshopListItem;
