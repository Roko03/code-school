import styles from "./AdminOrganizationDetailListItem.module.scss";

interface AdminOrganizationDetailListItemProps {
  user: UserType;
}

const AdminOrganizationDetailListItem: React.FC<
  AdminOrganizationDetailListItemProps
> = ({ user }) => {
  return (
    <div className={styles.admin_organization_user_list_item}>
      <p>Korisničko ime: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default AdminOrganizationDetailListItem;
