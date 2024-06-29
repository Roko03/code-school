import AdminOrganizationTableItem from "./admin-organization-table-item/AdminOrganizationTableItem";
import styles from "./AdminOrganizationTableComponent.module.scss";

interface AdminOrganizationTableComponentProps {
  organizationList: OrganizationType[];
}

const AdminOrganizationTableComponent: React.FC<
  AdminOrganizationTableComponentProps
> = ({ organizationList }) => {
  return (
    <table className={styles.admin_organization_table}>
      <thead>
        <tr>
          <th>Naziv organizacije</th>
          <th>Info</th>
          <th>Broj pripadnika</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {organizationList.map((organization) => {
          return (
            <AdminOrganizationTableItem
              key={organization.id}
              organization={organization}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default AdminOrganizationTableComponent;
