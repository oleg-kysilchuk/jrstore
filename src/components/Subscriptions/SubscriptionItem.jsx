import styles from "./SubscriptionItem.module.css";

const SubscriptionItem = (props) => {
  return (
    <div className={styles.subItem}>
      <div
        style={{ backgroundImage: `url(${props.src})` }}
        className={styles.imageContainer}
      ></div>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>{props.title}</h2>
        {props.list ? (
          <ul className={styles.subList}>
            {props.listTitle}
            {props.list.map((i) => (
              <li className={styles.subListItem} key={i.index}>
                {i.text}
              </li>
            ))}
          </ul>
        ) : null}
        <p className={styles.subText}>{props.text}</p>
      </div>
    </div>
  );
};

export default SubscriptionItem;
