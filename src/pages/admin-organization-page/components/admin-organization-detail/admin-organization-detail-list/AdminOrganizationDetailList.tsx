import styles from "./AdminOrganizationDetailList.module.scss";
import AdminOrganizationDetailListItem from "./admin-organization-detail-list-item/AdminOrganizationDetailListItem";

interface AdminOrganizationDetailListProps {
  organizationUserList: UserType[] | null;
}

const AdminOrganizationDetailList: React.FC<
  AdminOrganizationDetailListProps
> = ({ organizationUserList }) => {
  if (organizationUserList == null) {
    return <></>;
  }

  return (
    <div className={styles.admin_organization_user_list}>
      {organizationUserList.map((user) => {
        return <AdminOrganizationDetailListItem key={user.id} user={user} />;
      })}
    </div>
  );
};

export default AdminOrganizationDetailList;
