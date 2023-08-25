import styles from './EsotericCardSmallItem.module.css';

const EsotericCardSmallItem = (props) => {
    return (
        <div className={styles.cardItem}>
            <img className={styles.cardImage} src={props.src} alt={props.title} />
            <div className={styles.textConrainer}>
                <p className={styles.cardTitle}>{props.title}</p>
                <p className={styles.cardText}>{props.text}</p>
            </div>
        </div>
    )
}

export default EsotericCardSmallItem;