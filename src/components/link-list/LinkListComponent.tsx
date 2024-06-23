import { NavLink } from "react-router-dom";
import { authManager } from "../../util/useAuthContext";
import styles from "./LinkListComponent.module.scss";

interface LinkListComponentProps {
  variant: "header" | "footer";
}

const LinkListComponent: React.FC<LinkListComponentProps> = ({ variant }) => {
  const auth = authManager();

  const getLinkListByRoutre = () => {
    if (auth.isAuthorized) {
      if (auth.user) {
        if (auth.user.role == "adm") {
          return (
            <>
              <li>
                <NavLink
                  to={"/admin/user/"}
                  className={({ isActive }) =>
                    isActive ? styles.link_list__active : ""
                  }
                >
                  Korisnici
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/admin/workshop/"}
                  className={({ isActive }) =>
                    isActive ? styles.link_list__active : ""
                  }
                >
                  Radionice
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/admin/organization/"}
                  className={({ isActive }) =>
                    isActive ? styles.link_list__active : ""
                  }
                >
                  Organizacije
                </NavLink>
              </li>
            </>
          );
        } else if (auth.user.role == "prof") {
          return (
            <>
              <li>
                <NavLink
                  to={"/professor/workshop/"}
                  className={({ isActive }) =>
                    isActive ? styles.link_list__active : ""
                  }
                >
                  Moje radionice
                </NavLink>
              </li>
            </>
          );
        } else {
          return (
            <>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? styles.link_list__active : ""
                  }
                >
                  Naslovna
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/workshop/"}
                  className={({ isActive }) =>
                    isActive ? styles.link_list__active : ""
                  }
                >
                  Radionice
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/instructor/"}
                  className={({ isActive }) =>
                    isActive ? styles.link_list__active : ""
                  }
                >
                  Predavači
                </NavLink>
              </li>
            </>
          );
        }
      } else {
        return <></>;
      }
    } else {
      return <></>;
    }
  };

  return (
    <ul
      className={`${styles.link_list} ${
        variant == "header" ? styles.link_list_header : styles.link_list_footer
      }`}
    >
      {getLinkListByRoutre()}
    </ul>
  );
};

export default LinkListComponent;
