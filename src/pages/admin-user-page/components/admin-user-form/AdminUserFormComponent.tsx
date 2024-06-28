import { z } from "zod";
import { adminUserFormSchema } from "../../../../types/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import { useEffect } from "react";
import styles from "./AdminUserFormComponent.module.scss";

export type TAdminUserSchema = z.infer<typeof adminUserFormSchema>;

interface AdminUserFormComponentProps {
  variant: "add" | "edit";
  user?: null | UserType;
  editFunction?: (data: TAdminUserSchema) => void;
}

const AdminUserFormComponent: React.FC<AdminUserFormComponentProps> = ({
  variant,
  user,
  editFunction,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TAdminUserSchema>({
    resolver: zodResolver(adminUserFormSchema),
  });

  const editUser = (data: TAdminUserSchema) => {
    if (user && editFunction) {
      editFunction(data);
    }
  };

  const onSubmit = async (data: TAdminUserSchema) => {
    if (variant == "add") {
      reset();
      return;
    } else {
      editUser(data);
    }
  };

  useEffect(() => {
    if (user) {
      if (user.bio == null) {
        reset({ ...user, password: "", bio: "" });
      } else {
        reset({ ...user, password: "", bio: user.bio });
      }
    }
  }, [user]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.admin_user_form}>
      <label>
        <input
          type="text"
          placeholder="Korisničko ime"
          {...register("username")}
          autoComplete={"on"}
        />
        {errors.username && (
          <p className="form_error">{`${errors.username.message}`}</p>
        )}
      </label>
      <label>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          autoComplete={"on"}
        />
        {errors.email && (
          <p className="form_error">{`${errors.email.message}`}</p>
        )}
      </label>
      <label>
        <input
          type="password"
          placeholder="Šifra"
          {...register("password")}
          autoComplete={"on"}
        />
        {errors.password && (
          <p className="form_error">{`${errors.password.message}`}</p>
        )}
      </label>
      <label>
        <textarea {...register("bio")} placeholder="Biografija" />
        {errors.bio && <p className="form_error">{`${errors.bio.message}`}</p>}
      </label>
      <label>
        <select {...register("role")}>
          <option>Odaberi ulogu</option>
          <option value={"adm"}>Admin</option>
          <option value={"prof"}>Profesor</option>
          <option value={"stu"}>Student</option>
        </select>
      </label>
      <ButtonComponent onClick={handleSubmit(onSubmit)} variant={"add"}>
        <p>Potvrdi</p>
      </ButtonComponent>
    </form>
  );
};

export default AdminUserFormComponent;
