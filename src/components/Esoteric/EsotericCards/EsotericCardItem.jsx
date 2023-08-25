import styles from './EsotericCardItem.module.css';

const EsotericCardItem = (props) => {
  return (
    <div className={styles.cardItem}>
      <img className={styles.itemImage} src={props.src} alt={props.title} />
      <h3 className={styles.itemTitle}>{props.title}</h3>
      <p className={styles.itemText}>{props.text}</p>
    </div>
  );
};

export default EsotericCardItem;
