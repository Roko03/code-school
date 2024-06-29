import styles from "./AdminWorkshopPageSection.module.scss";
import ButtonComponent from "../../components/button/ButtonComponent";
import AdminWorkshopListComponent from "./components/admin-workshop-list/AdminWorkshopListComponent";
import { useEffect, useState } from "react";
import getAllWorkshop from "../../lib/workshop/getAllWorkshop";
import AdminModalComponent from "../../components/modal/admin/AdminModalComponent";
import { number } from "zod";
import getWorkshopById from "../../lib/workshop/getWorkshopById";

const AdminWorkshopPageSection = () => {
  const [workshopList, setWorkshopList] = useState<null | WorkshopType[]>(null);

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

  const fetchWorkshops = async () => {
    setIsLoading(true);
    const response = await getAllWorkshop();

    setWorkshopList(response);

    setIsLoading(false);
  };

  const fetchWorkshop = async () => {
    if (targetWorkshopId == null) {
      return;
    }
    const response = await getWorkshopById(targetWorkshopId);

    setTargetWorkshop(response);
  };

  useEffect(() => {
    fetchWorkshops();
  }, []);

  useEffect(() => {
    fetchWorkshop();
  }, [targetWorkshopId]);

  return (
    <>
      <section className={styles.admin_workshop_section}>
        <ButtonComponent variant={"add"}>
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
        <div>Ej</div>
      </AdminModalComponent>
    </>
  );
};

export default AdminWorkshopPageSection;
