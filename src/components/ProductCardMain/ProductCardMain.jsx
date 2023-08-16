import CardButton from './CardButton';
import styles from './ProductCardMain.module.css';

const ProductCardMain = (props) => {
    return (
        <div className={styles.card}>
            <p className={styles.cardTitle}>{props.title}</p>
            <p className={styles.cardPrice}>{props.price} ₴</p>
            <CardButton details>Детальніше</CardButton>
            <CardButton buy>Купити</CardButton>
        </div>
    )
}

export default ProductCardMain;