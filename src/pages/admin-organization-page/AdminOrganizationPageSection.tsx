import { useState } from "react";
import styles from "./AdminOrganizationPageSection.module.scss";
import AdminOrganizationListComponent from "./components/admin-organization-list/AdminOrganizationListComponent";

const AdminOrganizationPageSection = () => {
  const [organizationList, setOrganizationList] = useState<
    null | OrganizationType[]
  >([
    {
      id: 1,
      name: "Organizacija",
      info: "Organizacija info",
      numb_of_users: 2,
    },
    {
      id: 2,
      name: "Organizacija",
      info: "Organizacija info",
      numb_of_users: 3,
    },
  ]);

  return (
    <section className={styles.organization_section}>
      <h1>Organizacije</h1>
      <AdminOrganizationListComponent organizationList={organizationList} />
    </section>
  );
};

export default AdminOrganizationPageSection;
