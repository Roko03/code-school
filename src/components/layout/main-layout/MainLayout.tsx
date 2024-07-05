import styles from "./MainLayout.module.scss";
import ContainerLayout from "../../container/ContainerLayout";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContainerLayout>
      <div className={styles.main_layout}>{children}</div>
    </ContainerLayout>
  );
};

export default MainLayout;
