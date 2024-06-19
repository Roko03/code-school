import { Route, Routes, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";
import Layout from "./components/layout/Layout";
import LoginPage from "./routes/LoginPage";

function Root() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<h1>404 page</h1>}></Route>
    </Routes>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default router;
