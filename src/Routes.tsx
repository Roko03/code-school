import { Route, Routes, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/student/HomePage";
import Layout from "./components/layout/Layout";
import AdminPage from "./routes/admin/AdminPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import AuthenticationRoute from "./routes/AuthenticationRoute";
import AuthenticationPage from "./routes/authentication/AuthenticationPage";
import AdminUserPage from "./routes/admin/AdminUserPage";
import AdminOrganizationPage from "./routes/admin/AdminOrganizationPage";
import AdminWorkshopPage from "./routes/admin/AdminWorkshopPage";
import WorkshopPage from "./routes/student/WorkshopPage";
import ProfessorPage from "./routes/professor/ProfessorPage";
import ProfessorWorkshopPage from "./routes/professor/ProfessorWorkshopPage";
import InstructorPage from "./routes/student/InstructorPage";
import ErrorPage from "./routes/ErrorPage";

function Root() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<AuthenticationRoute />}>
          <Route path="/authentication" element={<AuthenticationPage />} />
        </Route>

        <Route element={<ProtectedRoute roles={["adm"]} />}>
          <Route path="/admin/" element={<AdminPage />} />
          <Route path="/admin/user" element={<AdminUserPage />} />
          <Route path="/admin/workshop/" element={<AdminWorkshopPage />} />
          <Route
            path="/admin/organization/"
            element={<AdminOrganizationPage />}
          />
        </Route>
        <Route element={<ProtectedRoute roles={["prof"]} />}>
          <Route path="/professor/" element={<ProfessorPage />} />
          <Route
            path="/professor/workshop/"
            element={<ProfessorWorkshopPage />}
          />
        </Route>
        <Route element={<ProtectedRoute roles={["stu"]} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/workshop/" element={<WorkshopPage />} />
          <Route path="/instructor/" element={<InstructorPage />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default router;
