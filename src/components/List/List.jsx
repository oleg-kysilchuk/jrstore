import styles from "./List.module.css";

const List = (props) => {
  return (
    <div className={styles.listWrap}>
      <h3 className={styles.listTitle}>{props.title}</h3>
      <ul>
        {props.data.map((item) => (
          <li key={item.id} className={styles.listItem}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
