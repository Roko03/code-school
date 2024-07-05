import styles from "./ButtonComponent.module.scss";

type ButtonType =
  | "add"
  | "delete"
  | "entry"
  | "search"
  | "adminEdit"
  | "adminTrash";

interface ButtonComponentProps {
  variant: ButtonType;
  children: React.ReactNode;
  onClick?: () => void;
  enabled?: boolean;
  buttonRef?: React.RefObject<HTMLButtonElement>;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  variant,
  children,
  onClick,
  enabled,
  buttonRef,
}) => {
  const getButtonVariant = (type: ButtonType): string => {
    const buttonStyle: { [key in ButtonType]: string } = {
      add: styles.add_button,
      delete: styles.delete_button,
      entry: styles.entry_button,
      search: styles.search_button,
      adminEdit: `${styles.admin_button} ${styles.edit_button}`,
      adminTrash: `${styles.admin_button} ${styles.trash_button}`,
    };

    return buttonStyle[type];
  };

  return (
    <button
      className={`${styles.button} ${getButtonVariant(variant)}`}
      onClick={onClick}
      disabled={enabled}
      ref={buttonRef ? buttonRef : undefined}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
