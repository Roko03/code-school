import { ReactNode, useEffect, useState } from "react";
import styles from "./AdminOrganizationPageSection.module.scss";
import AdminOrganizationListComponent from "./components/admin-organization-list/AdminOrganizationListComponent";
import getAllOrganizations from "../../lib/organization/getAllOrganization";
import AdminModalComponent from "../../components/modal/admin/AdminModalComponent";
import getOrganizationById from "../../lib/organization/getOrganizationById";
import AdminOrganizationDetailComponent from "./components/admin-organization-detail/AdminOrganizationDetailComponent";
import AdminOrganizationFormComponent, {
  TAdminOrganizationSchema,
} from "./components/admin-organization-form/AdminOrganizationFormComponent";
import editOrganizationById from "../../lib/organization/editOrganizationById";
import ButtonComponent from "../../components/button/ButtonComponent";
import createOrganization from "../../lib/organization/createOrganization";
import AdminOrganizationDeleteComponent from "./components/admin-organization-delete/AdminOrganizationDeleteComponent";
import deleteOrganizationById from "../../lib/organization/deleteOrganizationById";

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

  const editOrganizationFunction = async (data: TAdminOrganizationSchema) => {
    if (targetId == null) {
      return;
    }

    const response = await editOrganizationById(data, targetId);

    if (!response.success) {
      return;
    }

    closeModal();
    fetchOrganizations();
  };

  const makeOrganizationFunction = async (data: TAdminOrganizationSchema) => {
    const response = await createOrganization(data);

    if (!response.success) {
      return;
    }

    closeModal();
    fetchOrganizations();
  };

  const deleteOrganizationFunction = async () => {
    if (targetId == null) {
      return;
    }

    const response = await deleteOrganizationById(targetId);

    if (!response.success) {
      return;
    }

    closeModal();
    fetchOrganizations();
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
        <AdminOrganizationFormComponent
          variant={"add"}
          organization={null}
          makeFunction={(data: TAdminOrganizationSchema) =>
            makeOrganizationFunction(data)
          }
        />
      ),
      edit: (
        <AdminOrganizationFormComponent
          variant={"edit"}
          organization={targetOrganization}
          editFunction={(data: TAdminOrganizationSchema) =>
            editOrganizationFunction(data)
          }
        />
      ),
      delete: (
        <AdminOrganizationDeleteComponent
          organization={targetOrganization}
          closeDialog={closeModal}
          deleteFunction={deleteOrganizationFunction}
        />
      ),
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
        <ButtonComponent
          variant={"add"}
          onClick={() => {
            setIsModalOpen(true);
            setModalVariant("add");
          }}
        >
          <p>Dodaj organizaciju</p>
        </ButtonComponent>
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
