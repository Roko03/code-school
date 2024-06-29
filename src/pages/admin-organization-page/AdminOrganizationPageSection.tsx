import { ReactNode, useEffect, useState } from "react";
import styles from "./AdminOrganizationPageSection.module.scss";
import AdminOrganizationListComponent from "./components/admin-organization-list/AdminOrganizationListComponent";
import getAllOrganizations from "../../lib/organization/getAllOrganization";
import AdminModalComponent from "../../components/modal/admin/AdminModalComponent";
import { number } from "zod";
import getOrganizationById from "../../lib/organization/getOrganizationById";
import AdminOrganizationDetailComponent from "./components/admin-organization-detail/AdminOrganizationDetailComponent";
import AdminOrganizationFormComponent from "./components/admin-organization-form/AdminOrganizationFormComponent";

const AdminOrganizationPageSection = () => {
  const [organizationList, setOrganizationList] = useState<
    null | OrganizationType[]
  >(null);

  const [modalVariant, setModalVariant] = useState<
    null | "add" | "edit" | "delete" | "detail"
  >(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [targetId, setTargetId] = useState<null | number>(null);
  const [targetOrganization, setTargetOrganization] =
    useState<null | OrganizationType>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchOrganizations = async () => {
    setIsLoading(true);

    const response = await getAllOrganizations();

    setOrganizationList(response);
    setIsLoading(false);
  };

  const fetchOrganization = async () => {
    if (targetId == null) {
      return;
    }

    const response = await getOrganizationById(targetId);

    setTargetOrganization(response);
  };

  const openModalByVariant = (
    variant: "edit" | "delete" | "detail",
    userid: number | null
  ) => {
    setIsModalOpen(true);
    setModalVariant(variant);
    setTargetId(userid);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTargetId(null);
    setTargetOrganization(null);
  };

  const getContainerByModalVariant = (
    type: null | "add" | "edit" | "delete" | "detail"
  ) => {
    if (type == null) {
      return <></>;
    }

    const containerVariant: {
      [key in "add" | "edit" | "delete" | "detail"]: ReactNode;
    } = {
      add: (
        <AdminOrganizationFormComponent variant={"edit"} organization={null} />
      ),
      edit: (
        <AdminOrganizationFormComponent
          variant={"edit"}
          organization={targetOrganization}
        />
      ),
      delete: <></>,
      detail: (
        <AdminOrganizationDetailComponent organization={targetOrganization} />
      ),
    };

    return containerVariant[type];
  };

  useEffect(() => {
    fetchOrganizations();
  }, []);

  useEffect(() => {
    fetchOrganization();
  }, [targetId]);

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
        closeDialog={closeModal}
      >
        {getContainerByModalVariant(modalVariant)}
      </AdminModalComponent>
    </>
  );
};

export default AdminOrganizationPageSection;
