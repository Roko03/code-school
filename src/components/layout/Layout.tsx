import { AuthManagerProvider } from "../../util/useAuthContext";
import FooterComponent from "../footer/FooterComponent";
import HeaderComponent from "../header/HeaderComponent";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <AuthManagerProvider>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </AuthManagerProvider>
  );
};

export default Layout;
