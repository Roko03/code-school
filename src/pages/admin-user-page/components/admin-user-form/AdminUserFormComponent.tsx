import { z } from "zod";
import { adminUserFormSchema } from "../../../../types/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import { useEffect } from "react";

export type TAdminUserSchema = z.infer<typeof adminUserFormSchema>;

interface AdminUserFormComponentProps {
  user?: UserType;
}

const AdminUserFormComponent: React.FC<AdminUserFormComponentProps> = ({
  user,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TAdminUserSchema>({
    resolver: zodResolver(adminUserFormSchema),
  });

  const onSubmit = async (data: TAdminUserSchema) => {
    console.log(data);

    reset();
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
    <form onSubmit={handleSubmit(onSubmit)}>
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
