import { Route, Routes, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";
import Layout from "./components/layout/Layout";
import AuthenticationPage from "./routes/AuthenticationPage";
import AdminPage from "./routes/AdminPage";
import WorkshopPage from "./routes/WorkshopPage";
import ProtectedRoute from "./routes/ProtectedRoute";

function Root() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/authentication" element={<AuthenticationPage />} />

        <Route element={<ProtectedRoute roles={["adm"]} />}>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/users" element={<WorkshopPage />} />
        </Route>
        <Route element={<ProtectedRoute roles={["prof"]} />}>
          <Route path="/professor" element={<HomePage />} />
        </Route>
      </Route>
      <Route path="*" element={<h1>404 page</h1>}></Route>
    </Routes>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default router;
