import ButtonComponent from "../../../../components/button/ButtonComponent";
import styles from "./AdminUserListComponent.module.scss";

const AdminUserListComponent = () => {
  return (
    <table className={styles.admin_user_list}>
      <thead>
        <tr>
          <th>Korisničko ime</th>
          <th>Email</th>
          <th>Uloga</th>
          <th>Biografija</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Roko</td>
          <td>roko@gmail.com</td>
          <td>Student</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            maiores officiis labore quas impedit velit nesciunt culpa beatae
            placeat praesentium.
          </td>
          <td className={styles.td_button}>
            <ButtonComponent variant={"adminEdit"}>
              <img src={"/pencil.svg"} alt="trash" />
              <span>
                <p>Uredi</p>
              </span>
            </ButtonComponent>
          </td>
          <td className={styles.td_button}>
            <ButtonComponent variant={"adminTrash"}>
              <img src={"/trash.svg"} alt="trash" />
              <span>
                <p>Izbriši</p>
              </span>
            </ButtonComponent>
          </td>
        </tr>
        <tr>
          <td>Roko</td>
          <td>roko@gmail.com</td>
          <td>Student</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            maiores officiis labore quas impedit velit nesciunt culpa beatae
            placeat praesentium.
          </td>
          <td className={styles.td_button}>
            <ButtonComponent variant={"adminEdit"}>
              <img src={"/pencil.svg"} alt="trash" />
              <span>
                <p>Uredi</p>
              </span>
            </ButtonComponent>
          </td>
          <td className={styles.td_button}>
            <ButtonComponent variant={"adminTrash"}>
              <img src={"/trash.svg"} alt="trash" />
              <span>
                <p>Izbriši</p>
              </span>
            </ButtonComponent>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AdminUserListComponent;
