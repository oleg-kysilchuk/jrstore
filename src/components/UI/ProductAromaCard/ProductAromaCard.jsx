import styles from '../../../styles/ProductAromaCard/ProductAromaCard.module.css';
import CardButton from '../ProductCard/CardButton';

const ProductAromaCard = (props) => {
    return (
        <div className={styles.card}>
            <p className={styles.cardTitle}>{props.title}</p>
            <p className={styles.cardDescription}>{props.description}</p>
            <p className={styles.cardPrice}>{props.price} ₴</p>
            <CardButton detailsAroma>Детальніше</CardButton>
        </div>
    )
}

export default ProductAromaCard;