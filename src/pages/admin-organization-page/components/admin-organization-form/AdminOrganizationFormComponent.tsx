import styles from "./AdminOrganizationFormComponent.module.scss";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminOrganizationFormSchema } from "../../../../types/schema";
import { useEffect } from "react";
import ButtonComponent from "../../../../components/button/ButtonComponent";

export type TAdminOrganizationSchema = z.infer<
  typeof adminOrganizationFormSchema
>;

interface AdminOrganizationFormComponentProps {
  variant: "add" | "edit";
  organization: null | OrganizationType;
  makeFunction?: (data: TAdminOrganizationSchema) => void;
  editFunction?: (data: TAdminOrganizationSchema) => void;
}

const AdminOrganizationFormComponent: React.FC<
  AdminOrganizationFormComponentProps
> = ({ variant, organization, makeFunction, editFunction }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TAdminOrganizationSchema>({
    resolver: zodResolver(adminOrganizationFormSchema),
  });

  const onSubmit = async (data: TAdminOrganizationSchema) => {
    if (variant == "add") {
      console.log(data);
      reset();
    } else {
      if (editFunction) editFunction(data);
    }
  };

  useEffect(() => {
    if (organization == null) {
      reset({
        name: "",
        info: "",
      });
    } else {
      reset(organization);
    }
  }, [organization]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.admin_organization_form}
    >
      <label>
        <input
          type="text"
          placeholder="Ime organizacije"
          {...register("name")}
          autoComplete={"on"}
        />
        {errors.name && (
          <p className="form_error">{`${errors.name.message}`}</p>
        )}
      </label>
      <label>
        <textarea {...register("info")} placeholder="Info" />
        {errors.info && (
          <p className="form_error">{`${errors.info.message}`}</p>
        )}
      </label>
      <ButtonComponent onClick={handleSubmit(onSubmit)} variant={"add"}>
        <p>Potvrdi</p>
      </ButtonComponent>
    </form>
  );
};

export default AdminOrganizationFormComponent;
