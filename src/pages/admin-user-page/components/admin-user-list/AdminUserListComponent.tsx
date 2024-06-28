import AdminUserTableComponent from "./components/admin-user-table/AdminUserTableComponent";
import AdminUserListMobileComponent from "./components/admin-user-list-mobile/AdminUserListMobileComponent";
import CircularProgressComponent from "../../../../components/circular-progress/CircularProgressComponent";

interface AdminUserListComponentProps {
  type: "-" | "adm" | "prof" | "stu";
  userList: null | UserType[];
  isLoading: boolean;
}

const AdminUserListComponent: React.FC<AdminUserListComponentProps> = ({
  type,
  userList,
  isLoading,
}) => {
  if (isLoading) {
    return <CircularProgressComponent />;
  }

  if (userList == null || userList.length == 0) {
    return (
      <div style={{ marginTop: "36px" }}>
        <p>Nema prikaza</p>
      </div>
    );
  }

  return (
    <>
      <AdminUserTableComponent userList={userList} type={type} />
      <AdminUserListMobileComponent userList={userList} type={type} />
    </>
  );
};

export default AdminUserListComponent;
