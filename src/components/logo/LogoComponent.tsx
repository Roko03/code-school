import { Link } from "react-router-dom";
import { authManager } from "../../util/useAuthContext";
import styles from "./LogoComponent.module.scss";

const LogoComponent = () => {
  const auth = authManager();

  const getLinkByRole = (): string => {
    if (auth.isAuthorized) {
      if (auth.user) {
        if (auth.user.role == "adm") {
          return "/admin";
        } else if (auth.user.role == "prof") {
          return "/professor";
        } else {
          return "/";
        }
      } else {
        return "";
      }
    } else {
      return "/authentication";
    }
  };
  return (
    <Link to={`${getLinkByRole()}`} className={styles.logo}>
      <img
        src={"/logo-desktop.svg"}
        alt="logo"
        className={styles.logo__desktop}
      />
      <img
        src={"/logo-mobile.svg"}
        alt="logo"
        className={styles.logo__mobile}
      />
    </Link>
  );
};

export default LogoComponent;
