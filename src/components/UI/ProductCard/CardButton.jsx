import styles from '../../../styles/ProductCard/CardButton.module.css';

const CardButton = (props) => {

    let style;

    if(props.details) {
        style = styles.detailsBtn;
    }

    if(props.buy) {
        style = styles.buyBtn;
    }

    if(props.detailsAroma) {
        style = styles.aromaBtn;
    }

    return (
        <button className={style} type="button">{props.children}</button>
    )
}

export default CardButton;