import { Route, Routes, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";

function Root() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default router;
