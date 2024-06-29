import ButtonComponent from "../../../../../../../components/button/ButtonComponent";
import styles from "./AdminOrganizationTableItem.module.scss";

interface AdminOrganizationTableItemProps {
  organization: OrganizationType;
}

const AdminOrganizationTableItem: React.FC<AdminOrganizationTableItemProps> = ({
  organization,
}) => {
  return (
    <tr>
      <td>{organization.name}</td>
      <td>{organization.info}</td>
      <td>{organization.numb_of_users}</td>
      <td className={styles.td_button_entry}>
        <button className={styles.table_link}>
          <p>Detalji</p>
        </button>
      </td>
      <td className={styles.td_button}>
        <ButtonComponent variant={"adminEdit"}>
          <img src={"/pencil.svg"} alt="trash" />
          <span>
            <p>Uredi</p>
          </span>
        </ButtonComponent>
      </td>
      <td className={styles.td_button}>
        <ButtonComponent variant={"adminTrash"}>
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
