import ButtonComponent from "../../../../../../../components/button/ButtonComponent";
import styles from "./AdminOrganizationMobileListItem.module.scss";

interface AdminOrganizationMobileListItemProps {
  organization: OrganizationType;
  openModalByVariant: (
    variant: "edit" | "detail" | "delete",
    userId: null | number
  ) => void;
}

const AdminOrganizationMobileListItem: React.FC<
  AdminOrganizationMobileListItemProps
> = ({ organization, openModalByVariant }) => {
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
        <button
          className={styles.organization_link}
          onClick={() => openModalByVariant("detail", organization.id)}
        >
          <p>Detalji</p>
        </button>
        <div className={styles.organization_item__function__buttons}>
          <ButtonComponent
            variant={"adminEdit"}
            onClick={() => openModalByVariant("edit", organization.id)}
          >
            <img src={"/pencil.svg"} alt="trash" />
            <span>
              <p>Uredi</p>
            </span>
          </ButtonComponent>
          <ButtonComponent
            variant={"adminTrash"}
            onClick={() => openModalByVariant("delete", organization.id)}
          >
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
