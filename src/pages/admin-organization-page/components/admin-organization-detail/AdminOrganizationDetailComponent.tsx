import { useEffect, useState } from "react";
import styles from "./AdminOrganizationDetailComponent.module.scss";
import AdminOrganizationDetailList from "./admin-organization-detail-list/AdminOrganizationDetailList";
import getUserByOrganization from "../../../../lib/organization/getUserByOrganization";

interface AdminOrganizationDetailComponentProps {
  organization: OrganizationType | null;
}

const AdminOrganizationDetailComponent: React.FC<
  AdminOrganizationDetailComponentProps
> = ({ organization }) => {
  const [organizationUserList, setOrganizationUserList] = useState<
    null | UserType[]
  >(null);

  const fetchUserByOrganization = async () => {
    if (organization == null) {
      return;
    }

    const response = await getUserByOrganization(organization.id);

    setOrganizationUserList(response);
  };

  useEffect(() => {
    fetchUserByOrganization();
  }, [organization]);

  if (organization == null) {
    return <></>;
  }
  return (
    <div className={styles.admin_organization_detail}>
      <h2>{organization.name}</h2>
      <p>{organization.info}</p>
      <h2>Sudionici</h2>
      <AdminOrganizationDetailList
        organizationUserList={organizationUserList}
      />
    </div>
  );
};

export default AdminOrganizationDetailComponent;
