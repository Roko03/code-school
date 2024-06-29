import styles from "./AdminWorkshopPageSection.module.scss";
import ButtonComponent from "../../components/button/ButtonComponent";
import AdminWorkshopListComponent from "./components/admin-workshop-list/AdminWorkshopListComponent";
import { ReactNode, useEffect, useState } from "react";
import getAllWorkshop from "../../lib/workshop/getAllWorkshop";
import AdminModalComponent from "../../components/modal/admin/AdminModalComponent";
import getWorkshopById from "../../lib/workshop/getWorkshopById";
import AdminWorkshopFormComponent, {
  TAdminWorkshopSchema,
} from "./components/admin-workshop-form/AdminWorkshopFormComponent";
import getProfessor from "../../lib/user/getProfessor";
import createWorkshop from "../../lib/workshop/createWorkshop";
import editWorkshopById from "../../lib/workshop/editWorkshopById";
import AdminWorkshopDeleteComponent from "./components/admin-workshop-delete/AdminWorkshopDeleteComponent";
import deleteWorkshopById from "../../lib/workshop/deleteWorkshopById";
import SnackBarComponent from "../../components/snack-bar/SnackBarComponent";

const AdminWorkshopPageSection = () => {
  const [workshopList, setWorkshopList] = useState<null | WorkshopType[]>(null);
  const [professorList, setProfessorList] = useState<null | UserType[]>(null);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalVariant, setModalVariant] = useState<
    null | "add" | "delete" | "edit"
  >(null);

  const [targetWorkshopId, setTargetWorkshopId] = useState<null | number>(null);
  const [targetWorkshop, setTargetWorkshop] = useState<null | WorkshopType>(
    null
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [snackBar, setSnackBar] = useState<SnackBarType>({
    isOpen: false,
    message: null,
    type: null,
  });

  const closeSnackBarComponent = () => {
    setSnackBar((prev) => {
      return {
        ...prev,
        isOpen: false,
      };
    });
  };

  const openSnackBar = (type: "error" | "success", message: string) => {
    setSnackBar({
      isOpen: true,
      message: message,
      type: type,
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTargetWorkshopId(null);
    setTargetWorkshop(null);
  };

  const openModalByVariant = (
    variant: "edit" | "delete",
    workshopId: number | null
  ) => {
    setIsModalOpen(true);
    setModalVariant(variant);
    setTargetWorkshopId(workshopId);
  };

  const fetchData = async () => {
    setIsLoading(true);
    const workshops = await getAllWorkshop();

    const professors = await getProfessor();

    setWorkshopList(workshops);
    setProfessorList(professors);

    setIsLoading(false);
  };

  const fetchWorkshop = async () => {
    if (targetWorkshopId == null) {
      return;
    }
    const response = await getWorkshopById(targetWorkshopId);

    setTargetWorkshop(response);
  };

  const makeWorkshopFunction = async (data: TAdminWorkshopSchema) => {
    const response = await createWorkshop(data);

    if (!response.success) {
      openSnackBar("error", response.message);
      return;
    }

    fetchData();
    closeModal();
    openSnackBar("success", response.message);
  };

  const editWorkshopFunciton = async (data: TAdminWorkshopSchema) => {
    if (targetWorkshopId == null) {
      return;
    }

    const response = await editWorkshopById(data, targetWorkshopId);

    if (!response.success) {
      openSnackBar("error", response.message);
      return;
    }

    fetchData();
    closeModal();
    openSnackBar("success", response.message);
  };

  const deleteWorkshopFunction = async () => {
    if (targetWorkshopId == null) {
      return;
    }

    const response = await deleteWorkshopById(targetWorkshopId);

    if (!response.success) {
      openSnackBar("error", response.message);
      return;
    }

    fetchData();
    closeModal();
    openSnackBar("success", response.message);
  };

  const getModalContainerByVariant = (
    variant: null | "add" | "edit" | "delete"
  ) => {
    if (variant == null) {
      return <></>;
    }

    const containerVariant: { [key in "add" | "edit" | "delete"]: ReactNode } =
      {
        add: (
          <AdminWorkshopFormComponent
            workshop={null}
            variant={"add"}
            professorList={professorList}
            makeFunction={(data: TAdminWorkshopSchema) =>
              makeWorkshopFunction(data)
            }
          />
        ),
        edit: (
          <AdminWorkshopFormComponent
            workshop={targetWorkshop}
            variant={"edit"}
            professorList={professorList}
            editFunction={(data: TAdminWorkshopSchema) =>
              editWorkshopFunciton(data)
            }
          />
        ),
        delete: (
          <AdminWorkshopDeleteComponent
            workshop={targetWorkshop}
            closeDialog={closeModal}
            deleteFunction={deleteWorkshopFunction}
          />
        ),
      };

    return containerVariant[variant];
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchWorkshop();
  }, [targetWorkshopId]);

  return (
    <>
      <section className={styles.admin_workshop_section}>
        <ButtonComponent
          variant={"add"}
          onClick={() => {
            setIsModalOpen(true);
            setModalVariant("add");
          }}
        >
          <p>Dodaj radionicu</p>
        </ButtonComponent>
        <AdminWorkshopListComponent
          workshopList={workshopList}
          isLoading={isLoading}
          openModalByVariant={(
            variant: "edit" | "delete",
            workshopId: null | number
          ) => openModalByVariant(variant, workshopId)}
        />
      </section>
      <AdminModalComponent
        type={modalVariant}
        isOpen={isModalOpen}
        closeDialog={closeModal}
      >
        {getModalContainerByVariant(modalVariant)}
      </AdminModalComponent>
      <SnackBarComponent
        variant={snackBar.type}
        message={snackBar.message}
        isVisible={snackBar.isOpen}
        closeSnackBar={() => closeSnackBarComponent()}
      />
    </>
  );
};

export default AdminWorkshopPageSection;
