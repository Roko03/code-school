import React, { useEffect, useState } from "react";
import { authManager } from "../util/useAuthContext";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  roles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ roles }) => {
  const [isAuthenticated, setIsAuthorized] = useState<boolean | null>(null);
  const [redirectRoute, setRedirectRoute] = useState<string>("/");

  const auth = authManager();

  const authenticate = () => {
    if (auth.isAuthorized && auth.user) {
      setIsAuthorized(roles.includes(auth.user.role));

      if (auth.user.role == "adm") {
        setRedirectRoute("admin");
      } else if (auth.user.role == "prof") {
        setRedirectRoute("professor");
      } else {
        setRedirectRoute("/");
      }
    }
  };

  useEffect(() => {
    if (auth.isAuthorized && auth.user) {
      authenticate();
    }
  }, [auth.user]);

  if (isAuthenticated == null) {
    return <div>Loading...</div>;
  }

  return auth.isAuthorized == true ? (
    isAuthenticated != null ? (
      isAuthenticated ? (
        <Outlet />
      ) : (
        <Navigate to={`${redirectRoute}`} />
      )
    ) : (
      <div>Loading</div>
    )
  ) : (
    <Navigate to={"/authentication"} />
  );
};

export default ProtectedRoute;
