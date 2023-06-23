import styles from "../../styles/Button.module.css";

const ButtonLink = (props) => {
  return (
    <button
      type={props.type}
      className={styles.btn}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonLink;
