import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import refreshToken from "../lib/authentication/refreshToken";
import { useNavigate } from "react-router-dom";
import getProfile from "../lib/authentication/getProfile";

const AuthContext = createContext<{
  isAuthorized: boolean | null;
  setIsAuthorized: React.Dispatch<React.SetStateAction<boolean | null>>;
  user: object | null;
  logout: () => void;
} | null>(null);

export const authManager = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error(`It must be used as provider`);
  }

  return auth;
};

export const AuthManagerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [user, setUser] = useState<object | null>(null);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setIsAuthorized(false);
  };

  const updateToken = async () => {
    const rToken = localStorage.getItem(REFRESH_TOKEN);

    if (!rToken) return false;

    const refreshTokenFunction = await refreshToken(rToken);

    if (!refreshTokenFunction.success) {
      setIsAuthorized(false);
      return;
    }

    localStorage.setItem(ACCESS_TOKEN, refreshTokenFunction.tokenAccess);
    setIsAuthorized(true);
  };

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (!token) {
      setIsAuthorized(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const tokenExiration: number | undefined = decoded.exp;
      const now = Date.now() / 1000;

      if (tokenExiration) {
        if (tokenExiration < now) {
          await updateToken();
        } else {
          setIsAuthorized(true);
        }
      }
    } catch (error) {
      setIsAuthorized(false);
    }
  };

  const fetchUserProfile = async () => {
    const aToken = localStorage.getItem(ACCESS_TOKEN);

    if (!aToken) {
      setIsAuthorized(false);
      return;
    }

    const response = await getProfile(aToken);

    if (!response.success) {
      logout();
      return;
    }

    setUser(response.user[0]);
  };

  useEffect(() => {
    auth();
  }, []);

  useEffect(() => {
    if (isAuthorized == false) {
      navigate("/authentication");
      return;
    } else if (isAuthorized == true) {
      fetchUserProfile();
    }
  }, [isAuthorized]);

  return (
    <AuthContext.Provider
      value={{ isAuthorized, setIsAuthorized, user, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
