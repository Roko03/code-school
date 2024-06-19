import styles from "./LinkListComponent.module.scss";

interface LinkListComponentProps {
  variant: "header" | "footer";
}

const LinkListComponent: React.FC<LinkListComponentProps> = ({ variant }) => {
  return (
    <ul
      className={`${styles.link_list} ${
        variant == "header" ? styles.link_list_header : styles.link_list_footer
      }`}
    ></ul>
  );
};

export default LinkListComponent;
