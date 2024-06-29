import ButtonComponent from "../../../../../../../components/button/ButtonComponent";
import styles from "./AdminOrganizationMobileListItem.module.scss";

interface AdminOrganizationMobileListItemProps {
  organization: OrganizationType;
}

const AdminOrganizationMobileListItem: React.FC<
  AdminOrganizationMobileListItemProps
> = ({ organization }) => {
  return (
    <div className={styles.organization_item}>
      <div className={styles.organization_item__data}>
        <p>{organization.name}</p>
        <span>
          <img src={"/people.svg"} alt="people" width={28} height={28} />
          {organization.numb_of_users}
        </span>
        <p>{organization.info}</p>
      </div>
      <div className={styles.organization_item__function}>
        <button className={styles.organization_link}>
          <p>Detalji</p>
        </button>
        <div className={styles.organization_item__function__buttons}>
          <ButtonComponent variant={"adminEdit"}>
            <img src={"/pencil.svg"} alt="trash" />
            <span>
              <p>Uredi</p>
            </span>
          </ButtonComponent>
          <ButtonComponent variant={"adminTrash"}>
            <img src={"/trash.svg"} alt="trash" />
            <span>
              <p>Izbriši</p>
            </span>
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default AdminOrganizationMobileListItem;
