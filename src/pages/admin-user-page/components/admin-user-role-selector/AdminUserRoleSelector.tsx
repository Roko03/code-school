import { useSearchParams } from "react-router-dom";
import styes from "./AdminUserRoleSelector.module.scss";

interface AdminUserRoleSelector {
  value: "-" | "adm" | "prof" | "stu";
  onChange: (value: "-" | "adm" | "prof" | "stu") => void;
}

const AdminUserRoleSelector: React.FC<AdminUserRoleSelector> = ({
  value,
  onChange,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as "-" | "adm" | "prof" | "stu");

    if (e.target.value == "-") {
      searchParams.delete("role");
      setSearchParams(searchParams);
    } else {
      setSearchParams({
        role: e.target.value,
      });
    }
  };

  return (
    <select
      className={styes.admin_user_role_selector}
      value={value}
      onChange={onRoleChange}
    >
      <option value={"-"}>Prikaži sve</option>
      <option value={"adm"}>Admin</option>
      <option value={"prof"}>Profesor</option>
      <option value={"stu"}>Student</option>
    </select>
  );
};

export default AdminUserRoleSelector;
