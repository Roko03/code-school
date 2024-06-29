import CircularProgressComponent from "../../../../components/circular-progress/CircularProgressComponent";
import AdminOrganizationMobileListComponent from "./components/admin-organization-list-mobile/AdminOrganizationMobileListComponent";
import AdminOrganizationTableComponent from "./components/admin-organization-table/AdminOrganizationTableComponent";

interface AdminOrganizationListComponentProps {
  isLoading: boolean;
  organizationList: null | OrganizationType[];
  openModalByVariant: (
    variant: "edit" | "detail" | "delete",
    userId: null | number
  ) => void;
}

const AdminOrganizationListComponent: React.FC<
  AdminOrganizationListComponentProps
> = ({ organizationList, isLoading, openModalByVariant }) => {
  if (isLoading) {
    return <CircularProgressComponent />;
  }
  if (organizationList == null) {
    return <></>;
  }

  if (organizationList.length == 0) {
    return <p>Nema prikaza</p>;
  }

  return (
    <>
      <AdminOrganizationMobileListComponent
        organizationList={organizationList}
        openModalByVariant={(
          variant: "edit" | "detail" | "delete",
          userid: null | number
        ) => openModalByVariant(variant, userid)}
      />
      <AdminOrganizationTableComponent
        organizationList={organizationList}
        openModalByVariant={(
          variant: "edit" | "detail" | "delete",
          userid: null | number
        ) => openModalByVariant(variant, userid)}
      />
    </>
  );
};

export default AdminOrganizationListComponent;
