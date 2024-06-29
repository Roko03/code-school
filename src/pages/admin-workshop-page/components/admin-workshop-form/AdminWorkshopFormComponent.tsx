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
  professorList: UserType[] | null;
}

const AdminWorkshopFormComponent: React.FC<AdminWorkshopFormComponentProps> = ({
  workshop,
  professorList,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TAdminWorkshopSchema>({
    resolver: zodResolver(adminWorkshopFormSchema),
  });

  if (professorList == null) {
    return <p>Potrebni su instruktori kako bi dodali radionicu</p>;
  }

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
          type="datetime-local"
          {...register("time")}
          placeholder="Upiši vrijeme radionice"
        />
        {errors.time && (
          <p className="form_error">{`${errors.time.message}`}</p>
        )}
      </label>
      <label>
        <select {...register("user_id")}>
          <option value="">Izaberi predavača</option>
          {professorList.length > 0 ? (
            <>
              {professorList.map((instructor) => {
                return (
                  <option key={instructor.id} value={instructor.id}>
                    {instructor.username}
                  </option>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </select>
        {errors.user_id && (
          <p className="form_error">{`${errors.user_id.message}`}</p>
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
