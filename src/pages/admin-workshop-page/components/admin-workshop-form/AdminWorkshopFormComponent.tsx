import styles from "./AdminWorkshopFormComponent.module.scss";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminWorkshopFormSchema } from "../../../../types/schema";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import { useEffect } from "react";
import { LEVELS, SUBJECTS } from "../../../../constants";

export type TAdminWorkshopSchema = z.infer<typeof adminWorkshopFormSchema>;

interface AdminWorkshopFormComponentProps {
  workshop: WorkshopType | null;
}

const AdminWorkshopFormComponent: React.FC<AdminWorkshopFormComponentProps> = ({
  workshop,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TAdminWorkshopSchema>({
    resolver: zodResolver(adminWorkshopFormSchema),
  });

  const onSubmit = async (data: TAdminWorkshopSchema) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.admin_workshop_form}
    >
      <label>
        <input
          type="text"
          {...register("name")}
          placeholder="Upiši ime radionice"
        />
        {errors.name && (
          <p className="form_error">{`${errors.name.message}`}</p>
        )}
      </label>
      <label>
        <input
          type="date"
          {...register("date")}
          placeholder="Upiši ime radionice"
        />
        {errors.date && (
          <p className="form_error">{`${errors.date.message}`}</p>
        )}
      </label>
      <label>
        <select {...register("instructor")}>
          <option value="">Izaberi predavača</option>
        </select>
        {errors.instructor && (
          <p className="form_error">{`${errors.instructor.message}`}</p>
        )}
      </label>
      <label>
        <textarea
          {...register("info")}
          placeholder="Unesite informacije o radionici"
        />
        {errors.info && (
          <p className="form_error">{`${errors.info.message}`}</p>
        )}
      </label>
      <label>
        <select {...register("level")}>
          <option value="">Odaberite težinu</option>
          {Object.keys(LEVELS).map((level, index) => {
            const levelKey = level as keyof typeof LEVELS;
            return (
              <option key={index} value={level}>
                {LEVELS[levelKey]}
              </option>
            );
          })}
        </select>
        {errors.level && (
          <p className="form_error">{`${errors.level.message}`}</p>
        )}
      </label>
      <label>
        <select {...register("subject")}>
          <option value="">Odaberite temu</option>
          {Object.keys(SUBJECTS).map((subject, index) => {
            const subjectKey = subject as keyof typeof SUBJECTS;
            return (
              <option key={index} value={subject}>
                {SUBJECTS[subjectKey]}
              </option>
            );
          })}
        </select>
        {errors.subject && (
          <p className="form_error">{`${errors.subject.message}`}</p>
        )}
      </label>
      <ButtonComponent variant={"add"} onClick={handleSubmit(onSubmit)}>
        <p>Potvrdi</p>
      </ButtonComponent>
    </form>
  );
};

export default AdminWorkshopFormComponent;
