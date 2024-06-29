import styles from "./AdminOrganizationMobileListComponent.module.scss";
import AdminOrganizationMobileListItem from "./admin-organization-list-mobile-item/AdminOrganizationMobileListItem";

interface AdminOrganizationMobileListComponentProps {
  organizationList: null | OrganizationType[];
}

const AdminOrganizationMobileListComponent: React.FC<
  AdminOrganizationMobileListComponentProps
> = ({ organizationList }) => {
  if (organizationList == null) {
    return <></>;
  }

  if (organizationList.length == 0) {
    return <p>Nema prikaza</p>;
  }

  return (
    <div className={styles.organization_list}>
      {organizationList.map((organization) => {
        return (
          <AdminOrganizationMobileListItem
            key={organization.id}
            organization={organization}
          />
        );
      })}
    </div>
  );
};

export default AdminOrganizationMobileListComponent;
