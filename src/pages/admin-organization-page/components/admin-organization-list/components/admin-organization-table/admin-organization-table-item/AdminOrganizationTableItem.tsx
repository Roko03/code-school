import { Link } from "react-router-dom";
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
      <td>0</td>
      <td className={styles.td_button_entry}>
        <Link to={"/admin/organization/"} className={styles.table_link}>
          <p>Detalji</p>
        </Link>
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
