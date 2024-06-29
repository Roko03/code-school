import { useEffect, useState } from "react";
import styles from "./AdminOrganizationPageSection.module.scss";
import AdminOrganizationListComponent from "./components/admin-organization-list/AdminOrganizationListComponent";
import getAllOrganizations from "../../lib/organization/getAllOrganization";

const AdminOrganizationPageSection = () => {
  const [organizationList, setOrganizationList] = useState<
    null | OrganizationType[]
  >(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchOrganization = async () => {
    setIsLoading(true);

    const respose = await getAllOrganizations();

    setOrganizationList(respose);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchOrganization();
  }, []);

  return (
    <section className={styles.organization_section}>
      <h1>Organizacije</h1>
      <AdminOrganizationListComponent
        isLoading={isLoading}
        organizationList={organizationList}
      />
    </section>
  );
};

export default AdminOrganizationPageSection;
