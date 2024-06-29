import ButtonComponent from "../../../../../../../components/button/ButtonComponent";
import styles from "./AdminOrganizationTableItem.module.scss";

interface AdminOrganizationTableItemProps {
  organization: OrganizationType;
  openModalByVariant: (
    variant: "edit" | "detail" | "delete",
    userId: null | number
  ) => void;
}

const AdminOrganizationTableItem: React.FC<AdminOrganizationTableItemProps> = ({
  organization,
  openModalByVariant,
}) => {
  return (
    <tr>
      <td>{organization.name}</td>
      <td>{organization.info}</td>
      <td>{organization.numb_of_users}</td>
      <td className={styles.td_button_entry}>
        <button
          className={styles.table_link}
          onClick={() => openModalByVariant("detail", organization.id)}
        >
          <p>Detalji</p>
        </button>
      </td>
      <td className={styles.td_button}>
        <ButtonComponent
          variant={"adminEdit"}
          onClick={() => openModalByVariant("edit", organization.id)}
        >
          <img src={"/pencil.svg"} alt="trash" />
          <span>
            <p>Uredi</p>
          </span>
        </ButtonComponent>
      </td>
      <td className={styles.td_button}>
        <ButtonComponent
          variant={"adminTrash"}
          onClick={() => openModalByVariant("delete", organization.id)}
        >
          <img src={"/trash.svg"} alt="trash" />
          <span>
            <p>Izbriši</p>
          </span>
        </ButtonComponent>
      </td>
    </tr>
  );
};

export default AdminOrganizationTableItem;
