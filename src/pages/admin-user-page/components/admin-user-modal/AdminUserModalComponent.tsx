import React from "react";
import DialogComponent from "../../../../components/dialog/DialogComponent";

interface AdminUserModalComponentProps {}

const AdminUserModalComponent = () => {
  return (
    <DialogComponent isOpen={false} closeDialog={() => {}}>
      <div></div>
    </DialogComponent>
  );
};

export default AdminUserModalComponent;
