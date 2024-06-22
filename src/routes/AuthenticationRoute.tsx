import { authManager } from "../util/useAuthContext";
import { Outlet, useNavigate } from "react-router-dom";

const AuthenticationRoute = () => {
  const auth = authManager();

  const navigate = useNavigate();

  if (auth.isAuthorized == true) {
    navigate(-1);
    return null;
  }

  return <Outlet />;
};

export default AuthenticationRoute;
