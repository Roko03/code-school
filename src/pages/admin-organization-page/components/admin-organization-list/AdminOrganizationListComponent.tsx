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
      <AdminOrganizationTableComponent organizationList={organizationList} />
    </>
  );
};

export default AdminOrganizationListComponent;
