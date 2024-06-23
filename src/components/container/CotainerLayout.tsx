import styles from "./CotainerLayout.module.scss";

const CotainerLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export default CotainerLayout;
