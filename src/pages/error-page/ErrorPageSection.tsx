import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/button/ButtonComponent";
import styles from "./ErrorPageSection.module.scss";

const ErrorPageSection = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.error_section}>
      <h1>404</h1>
      <p>page not found</p>
      <ButtonComponent variant={"add"} onClick={() => navigate(-1)}>
        <p>Vrati me</p>
      </ButtonComponent>
    </section>
  );
};

export default ErrorPageSection;
