import styles from "./ListItem.module.css";

const ListItem = (props) => {
  return <li className={styles.listItem}>{props.children}</li>;
};

export default ListItem;
