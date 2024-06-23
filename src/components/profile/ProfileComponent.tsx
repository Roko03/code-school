import { useEffect, useRef, useState } from "react";
import styles from "./ProfileComponent.module.scss";
import { authManager } from "../../util/useAuthContext";
import ButtonComponent from "../button/ButtonComponent";
import CircularProgressComponent from "../circular-progress/CircularProgressComponent";

const ProfileComponent = () => {
  const auth = authManager();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const modalButton = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target as Node) &&
        modalButton.current &&
        !modalButton.current.contains(e.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.addEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className={styles.profile} ref={modalButton}>
        <div
          className={styles.profile__button}
          onClick={() => setIsModalOpen(!isModalOpen)}
        ></div>
        <div
          className={`${styles.profile__modal} ${
            isModalOpen ? styles.profile__modal_open : ""
          }`}
          ref={modalRef}
        >
          <div className={styles.profile__modal__container}>
            {auth.user ? (
              <p>{auth.user.username}</p>
            ) : (
              <CircularProgressComponent />
            )}
            <ButtonComponent variant={"add"} onClick={() => auth.logout()}>
              <p>Odjavi se</p>
            </ButtonComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
