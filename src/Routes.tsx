import { Route, Routes, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/student/HomePage";
import Layout from "./components/layout/Layout";
import AdminPage from "./routes/admin/AdminPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import AuthenticationRoute from "./routes/AuthenticationRoute";
import AuthenticationPage from "./routes/authentication/AuthenticationPage";
import InstructorPage from "./routes/professor/InstructorPage";
import AdminUserPage from "./routes/admin/AdminUserPage";
import AdminOrganizationPage from "./routes/admin/AdminOrganizationPage";
import AdminWorkshopPage from "./routes/admin/AdminWorkshopPage";
import InstructorWorkshopPage from "./routes/professor/InstructorWorkshopPage";
import WorkshopPage from "./routes/student/WorkshopPage";

function Root() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<AuthenticationRoute />}>
          <Route path="/authentication" element={<AuthenticationPage />} />
        </Route>

        <Route element={<ProtectedRoute roles={["adm"]} />}>
          <Route path="/admin/" element={<AdminPage />} />
          <Route path="/admin/user/" element={<AdminWorkshopPage />} />
          <Route path="/admin/workshop/" element={<AdminUserPage />} />
          <Route
            path="/admin/organization/"
            element={<AdminOrganizationPage />}
          />
        </Route>
        <Route element={<ProtectedRoute roles={["prof"]} />}>
          <Route path="/professor/" element={<InstructorPage />} />
          <Route
            path="/professor/workshop/"
            element={<InstructorWorkshopPage />}
          />
        </Route>
        <Route element={<ProtectedRoute roles={["stu"]} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/workshop/" element={<WorkshopPage />} />
          <Route path="/instructor/" element={<InstructorPage />} />
        </Route>
      </Route>
      <Route path="*" element={<h1>404 page</h1>}></Route>
    </Routes>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default router;
