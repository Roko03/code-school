import { z } from "zod";
import styles from "./AuthenticationFormComponent.module.scss";
import { authenticationSchema } from "../../../../types/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import loginUser from "../../../../lib/authentication/loginUser";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../../constants";
import { useNavigate } from "react-router-dom";
import { authManager } from "../../../../util/useAuthContext";

export type TAuthenticationSchema = z.infer<typeof authenticationSchema>;

const AuthenticationFormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TAuthenticationSchema>({
    resolver: zodResolver(authenticationSchema),
  });

  const authenticationManager = authManager();

  const onSubmit = async (data: TAuthenticationSchema) => {
    authenticationManager.login(data);

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.authentication_form}
    >
      <label className={styles.authentication_form__label}>
        <input
          type="text"
          {...register("username")}
          placeholder="Unesi korinsičko ime"
          autoComplete={"on"}
        />
        {errors.username && (
          <p className="form_error">{`${errors.username.message}`}</p>
        )}
      </label>
      <label className={styles.authentication_form__label}>
        <input
          type="password"
          {...register("password")}
          placeholder="Unesi šifru"
          autoComplete={"on"}
        />
        {errors.password && (
          <p className="form_error">{`${errors.password.message}`}</p>
        )}
      </label>
      <ButtonComponent variant={"add"} onClick={handleSubmit(onSubmit)}>
        <p>Prijava</p>
      </ButtonComponent>
    </form>
  );
};

export default AuthenticationFormComponent;
