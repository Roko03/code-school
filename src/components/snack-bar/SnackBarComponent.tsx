import styles from "./SnackBarComponent.module.scss";

interface SnackBarComponentProps {
  variant: "success" | "error";
  message: string;
}

const SnackBarComponent: React.FC<SnackBarComponentProps> = ({
  variant,
  message,
}) => {
  if (!message) {
    return <></>;
  }

  const snackBarStyle = () => {
    switch (variant) {
      case "success":
        return styles.snack_bar_success;
      case "error":
        return styles.snack_bar_error;
    }
  };

  return (
    <div className={`${styles.snack_bar} ${snackBarStyle()}`}>
      <p>{message}</p>
    </div>
  );
};

export default SnackBarComponent;
