import styles from "./EsotericWorkplanItem.module.css";

const EsotericWorkplanItem = (props) => {
  return (
    <ul className={styles.list}>
      <p className={styles.listTitle}>{props.title}</p>
      {props.listData.map((item, index) => (
        <li className={styles.listItem} key={index}>
          {item}
        </li>
      ))}
      <div className={styles.itemLabel}>{props.labelNum}</div>
    </ul>
  );
};

export default EsotericWorkplanItem;
