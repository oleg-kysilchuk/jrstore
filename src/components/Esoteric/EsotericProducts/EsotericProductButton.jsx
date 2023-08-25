import styles from "./EsotericProductButton.module.css";

const EsotericProductButton = (props) => {
  return <button className={styles.productButton}>{props.children}</button>;
};

export default EsotericProductButton;
