import { useEffect, useState } from "react";
import { authManager } from "../util/useAuthContext";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import CircularProgressComponent from "../components/circular-progress/CircularProgressComponent";

interface ProtectedRouteProps {
  roles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ roles }) => {
  const [isAuthenticated, setIsAuthorized] = useState<boolean | null>(null);

  const auth = authManager();
  const navigate = useNavigate();

  const authenticate = () => {
    if (auth.isAuthorized && auth.user) {
      setIsAuthorized(roles.includes(auth.user.role));
    }
  };

  useEffect(() => {
    if (auth.isAuthorized && auth.user) {
      authenticate();
    }
  }, [auth.user]);

  if (isAuthenticated == null) {
    return (
      <>
        <CircularProgressComponent />
      </>
    );
  }

  return auth.isAuthorized == true ? (
    isAuthenticated != null ? (
      isAuthenticated ? (
        <Outlet />
      ) : (
        <>{navigate(-1)}</>
      )
    ) : (
      <>
        <CircularProgressComponent />
      </>
    )
  ) : (
    <Navigate to={"/authentication"} />
  );
};

export default ProtectedRoute;
