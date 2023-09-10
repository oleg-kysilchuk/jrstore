import { useState } from 'react';
import CardButton from './CardButton';
import Modal from '../UI/Modal/Modal';
import styles from './ProductCardMain.module.css';

const ProductCardMain = (props) => {
    const [isModal, setIsModal] = useState(false);

    const openModal = () => {
        setIsModal(true);
    }

    const closeModal = () => {
        setIsModal(false);
    }

    return (
        <div className={styles.card}>
            <p className={styles.cardTitle}>{props.title}</p>
            <p className={styles.cardPrice}>{props.price} ₴</p>
            <CardButton details onClick={openModal}>Детальніше</CardButton>
            <CardButton buy>Купити</CardButton>

            {isModal && <Modal title={props.title} price={props.price} details={props.details} onClick={closeModal} />}
        </div>
    )
}

export default ProductCardMain;