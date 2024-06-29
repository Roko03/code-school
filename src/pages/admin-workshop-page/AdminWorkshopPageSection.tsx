import styles from "./AdminWorkshopPageSection.module.scss";
import ButtonComponent from "../../components/button/ButtonComponent";

const AdminWorkshopPageSection = () => {
  return (
    <section className={styles.admin_workshop_section}>
      <ButtonComponent variant={"add"}>
        <p>Dodaj radionicu</p>
      </ButtonComponent>
    </section>
  );
};

export default AdminWorkshopPageSection;
