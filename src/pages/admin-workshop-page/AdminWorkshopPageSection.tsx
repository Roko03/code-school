import styles from "./AdminWorkshopPageSection.module.scss";
import ButtonComponent from "../../components/button/ButtonComponent";
import AdminWorkshopListComponent from "./components/admin-workshop-list/AdminWorkshopListComponent";
import { ReactNode, useEffect, useState } from "react";
import getAllWorkshop from "../../lib/workshop/getAllWorkshop";
import AdminModalComponent from "../../components/modal/admin/AdminModalComponent";
import { number } from "zod";
import getWorkshopById from "../../lib/workshop/getWorkshopById";
import AdminWorkshopFormComponent from "./components/admin-workshop-form/AdminWorkshopFormComponent";
import getProfessor from "../../lib/user/getProfessor";

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

  const closeModal = () => {
    setIsModalOpen(false);
    setModalVariant(null);
    setTargetWorkshopId(null);
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
          />
        ),
        edit: (
          <AdminWorkshopFormComponent
            workshop={targetWorkshop}
            variant={"edit"}
            professorList={professorList}
          />
        ),
        delete: <></>,
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
    </>
  );
};

export default AdminWorkshopPageSection;
