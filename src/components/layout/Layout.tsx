import FooterComponent from "../footer/FooterComponent";
import HeaderComponent from "../header/HeaderComponent";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

export default Layout;
