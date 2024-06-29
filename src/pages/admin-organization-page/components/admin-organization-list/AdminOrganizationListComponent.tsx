import AdminOrganizationMobileListComponent from "./components/admin-organization-list-mobile/AdminOrganizationMobileListComponent";
import AdminOrganizationTableComponent from "./components/admin-organization-table/AdminOrganizationTableComponent";

interface AdminOrganizationListComponentProps {
  organizationList: null | OrganizationType[];
}

const AdminOrganizationListComponent: React.FC<
  AdminOrganizationListComponentProps
> = ({ organizationList }) => {
  if (organizationList == null) {
    return <></>;
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
