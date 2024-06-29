import { useEffect, useState } from "react";
import styles from "./AdminOrganizationPageSection.module.scss";
import AdminOrganizationListComponent from "./components/admin-organization-list/AdminOrganizationListComponent";
import getAllOrganizations from "../../lib/organization/getAllOrganization";
import AdminModalComponent from "../../components/modal/admin/AdminModalComponent";
import { number } from "zod";

const AdminOrganizationPageSection = () => {
  const [organizationList, setOrganizationList] = useState<
    null | OrganizationType[]
  >(null);

  const [modalVariant, setModalVariant] = useState<
    null | "add" | "edit" | "delete" | "detail"
  >(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [targetId, setTargetId] = useState<null | number>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchOrganization = async () => {
    setIsLoading(true);

    const respose = await getAllOrganizations();

    setOrganizationList(respose);
    setIsLoading(false);
  };

  const openModalByVariant = (
    variant: "edit" | "delete" | "detail",
    userid: number | null
  ) => {
    setIsModalOpen(true);
    setModalVariant(variant);
    setTargetId(userid);
  };

  useEffect(() => {
    fetchOrganization();
  }, []);

  return (
    <>
      <section className={styles.organization_section}>
        <h1>Organizacije</h1>
        <AdminOrganizationListComponent
          isLoading={isLoading}
          organizationList={organizationList}
          openModalByVariant={(
            variant: "edit" | "delete" | "detail",
            userid: null | number
          ) => openModalByVariant(variant, userid)}
        />
      </section>
      <AdminModalComponent
        type={modalVariant}
        isOpen={isModalOpen}
        closeDialog={() => setIsModalOpen(false)}
      >
        <p>Ej</p>
      </AdminModalComponent>
    </>
  );
};

export default AdminOrganizationPageSection;
