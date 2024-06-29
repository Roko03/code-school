import AdminOrganizationTableItem from "./admin-organization-table-item/AdminOrganizationTableItem";
import styles from "./AdminOrganizationTableComponent.module.scss";

interface AdminOrganizationTableComponentProps {
  organizationList: OrganizationType[];
  openModalByVariant: (
    variant: "edit" | "detail" | "delete",
    userId: null | number
  ) => void;
}

const AdminOrganizationTableComponent: React.FC<
  AdminOrganizationTableComponentProps
> = ({ organizationList, openModalByVariant }) => {
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
              openModalByVariant={(
                variant: "edit" | "detail" | "delete",
                userid: null | number
              ) => openModalByVariant(variant, userid)}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default AdminOrganizationTableComponent;
