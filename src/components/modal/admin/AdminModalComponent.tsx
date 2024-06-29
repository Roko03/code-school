import DialogComponent from "../../dialog/DialogComponent";
import styles from "./AdminModalComponent.module.scss";

type ModalType = "add" | "edit" | "delete" | "detail";

interface AdminModalComponentProps {
  isOpen: boolean;
  closeDialog: () => void;
  children: React.ReactNode;
  type: ModalType | null;
}

const AdminModalComponent: React.FC<AdminModalComponentProps> = ({
  isOpen,
  closeDialog,
  children,
  type,
}) => {
  if (type == null) {
    return <></>;
  }

  const getModalStyleVariant = (type: ModalType): string => {
    const modalStyle: { [key in ModalType]: string } = {
      add: styles.add_modal,
      edit: styles.edit_modal,
      delete: styles.delete_modal,
      detail: styles.detail_modal,
    };

    return modalStyle[type];
  };

  return (
    <DialogComponent closeDialog={closeDialog} isOpen={isOpen}>
      <div className={`${styles.modal} ${getModalStyleVariant(type)}`}>
        {children}
      </div>
    </DialogComponent>
  );
};

export default AdminModalComponent;
