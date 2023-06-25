import styles from '../../../styles/ProductCard/CardButton.module.css';

const CardButton = (props) => {
    return (
        <button className={props.details ? styles.detailsBtn : styles.buyBtn} type="button">{props.children}</button>
    )
}

export default CardButton;