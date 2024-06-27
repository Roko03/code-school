import { useState } from "react";
import AdminUserTableComponent from "./components/admin-user-table/AdminUserTableComponent";
import AdminUserListMobileComponent from "./components/admin-user-list-mobile/AdminUserListMobileComponent";

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
      bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed libero ab praesentium molestias quaerat, dolore autem fuga necessitatibus minus. Voluptatum placeat enim cum sunt ad nihil rerum impedit similique? Odit illum, natus praesentium dolores asperiores tempore voluptatibus, quaerat rem modi quia maxime ab quo dolore reprehenderit. Facere officiis dolore quis!",
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
      <AdminUserListMobileComponent userList={userList} type={type} />
    </>
  );
};

export default AdminUserListComponent;
