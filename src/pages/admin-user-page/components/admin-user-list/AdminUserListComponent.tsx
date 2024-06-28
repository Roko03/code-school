import { useEffect, useState } from "react";
import AdminUserTableComponent from "./components/admin-user-table/AdminUserTableComponent";
import AdminUserListMobileComponent from "./components/admin-user-list-mobile/AdminUserListMobileComponent";
import CircularProgressComponent from "../../../../components/circular-progress/CircularProgressComponent";
import getAllUser from "../../../../lib/user/getAllUser";
import filterUser from "../../../../lib/user/filterUser";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchUsers = async () => {
    setIsLoading(true);

    let response;

    if (type == "-") {
      response = await getAllUser();
    } else {
      response = await filterUser(type);
    }

    setUserList(response);

    setIsLoading(false);
  };

  console.log(userList);

  useEffect(() => {
    fetchUsers();
  }, [type]);

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
