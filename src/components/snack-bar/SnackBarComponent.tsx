import styles from "./SnackBarComponent.module.scss";

interface SnackBarComponentProps {
  variant: "success" | "error" | null;
  message: string | null;
  isVisible: boolean;
  closeSnackBar: () => void;
}

const SnackBarComponent: React.FC<SnackBarComponentProps> = ({
  variant,
  message,
  isVisible,
  closeSnackBar,
}) => {
  if (message == null || variant == null) {
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
    <div
      className={`${styles.snack_bar} ${snackBarStyle()} ${
        isVisible ? styles.snack_bar_visible : ""
      }`}
      onClick={closeSnackBar}
    >
      <p>{message}</p>
    </div>
  );
};

export default SnackBarComponent;
