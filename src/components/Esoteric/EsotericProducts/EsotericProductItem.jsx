import EsotericProductButton from './EsotericProductButton';
import styles from './EsotericProductItem.module.css';

const EsotericProductItem = (props) => {
    return (
        <div className={styles.productItem}>
            <p className={styles.itemTitle}>{props.title}</p>
            <p className={styles.itemText}>{props.text}</p>
            <p className={styles.itemPrice}>{props.price} грн</p>
            <EsotericProductButton>{props.inStock ? 'Замовити' : 'Продано!'}</EsotericProductButton>
        </div>
    )
}

export default EsotericProductItem;