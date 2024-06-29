import { useState } from "react";
import styles from "./AdminOrganizationDetailComponent.module.scss";
import AdminOrganizationDetailList from "./admin-organization-detail-list/AdminOrganizationDetailList";

interface AdminOrganizationDetailComponentProps {
  organization: OrganizationType | null;
}

const AdminOrganizationDetailComponent: React.FC<
  AdminOrganizationDetailComponentProps
> = ({ organization }) => {
  const [organizationUserList, setOrganizationUserList] = useState<
    null | UserType[]
  >([
    {
      id: 2,
      username: "Jakov",
      email: "jakov@gmail.com",
      bio: "Jakov biografija1",
      role: "prof",
    },
    {
      id: 15,
      username: "karlo",
      email: "karlo@gmail.com",
      bio: null,
      role: "prof",
    },
  ]);

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
