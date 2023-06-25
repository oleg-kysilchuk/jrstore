import CardButton from '../ProductCard/CardButton';
import styles from '../../../styles/ProductCard/ProductCard.module.css';

const ProductCard = (props) => {
    return (
        <div className={styles.card}>
            <p className={styles.cardTitle}>{props.title}</p>
            <p className={styles.cardPrice}>{props.price} ₴</p>
            <CardButton details>Детальніше</CardButton>
            <CardButton buy>Купити</CardButton>
        </div>
    )
}

export default ProductCard;