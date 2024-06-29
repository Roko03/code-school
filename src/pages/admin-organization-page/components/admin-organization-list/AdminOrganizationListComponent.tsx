import CircularProgressComponent from "../../../../components/circular-progress/CircularProgressComponent";
import AdminOrganizationMobileListComponent from "./components/admin-organization-list-mobile/AdminOrganizationMobileListComponent";
import AdminOrganizationTableComponent from "./components/admin-organization-table/AdminOrganizationTableComponent";

interface AdminOrganizationListComponentProps {
  isLoading: boolean;
  organizationList: null | OrganizationType[];
}

const AdminOrganizationListComponent: React.FC<
  AdminOrganizationListComponentProps
> = ({ organizationList, isLoading }) => {
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
      />
      <AdminOrganizationTableComponent organizationList={organizationList} />
    </>
  );
};

export default AdminOrganizationListComponent;
