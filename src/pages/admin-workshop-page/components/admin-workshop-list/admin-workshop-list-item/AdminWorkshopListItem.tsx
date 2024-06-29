import ButtonComponent from "../../../../../components/button/ButtonComponent";
import styles from "./AdminWorkshopListItem.module.scss";

interface AdminWorkshopListItemProps {
  workshop: WorkshopType;
}

const AdminWorkshopListItem: React.FC<AdminWorkshopListItemProps> = ({
  workshop,
}) => {
  return (
    <div className={styles.workshop_item}>
      <div className={styles.workshop_item__image}>
        <img src={"/background-banner.png"} alt={`${workshop.name}-image`} />
        <div className={styles.workshop_item__buttons}>
          <ButtonComponent variant={"adminEdit"} onClick={() => {}}>
            <img src={"/pencil.svg"} alt="edit" />
            <span>
              <p>Edit</p>
            </span>
          </ButtonComponent>
          <ButtonComponent variant={"adminTrash"} onClick={() => {}}>
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
          <span>{workshop.user_id}</span>
          <p>{workshop.time}</p>
          <p>{workshop.info}</p>
          <span className={styles.workshop_item__info__top__level}>
            {workshop.level}
          </span>
        </div>
        <div className={styles.workshop_item__info__bottom}>
          <span className={styles.workshop_item__info__bottom__counter}>
            <img src={"/people.svg"} alt="people" width={28} height={28} />
            <p>0</p>
          </span>
          <p className={styles.workshop_item__info__bottom__subject}>
            {workshop.subject}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminWorkshopListItem;
