import { useState } from "react";
import AdminUserTableComponent from "./components/admin-user-table/AdminUserTableComponent";

interface AdminUserListComponentProps {
  type: "-" | "adm" | "prof" | "stu";
}

const AdminUserListComponent: React.FC<AdminUserListComponentProps> = ({
  type,
}) => {
  const [userList, setUserList] = useState<null | UserType[]>([
    {
      id: 1,
      username: "User1",
      email: "user1@gmaiil.com",
      bio: "ja",
      role: "prof",
    },
    {
      id: 2,
      username: "User2",
      email: "user2@gmaiil.com",
      bio: null,
      role: "adm",
    },
    {
      id: 3,
      username: "User3",
      email: "user3@gmaiil.com",
      bio: null,
      role: "stu",
    },
  ]);

  return (
    <>
      <AdminUserTableComponent userList={userList} type={type} />
    </>
  );
};

export default AdminUserListComponent;
