import ProductDetails from "../../ProductDetails/ProductDetails";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={styles.modal}>
        <button className={styles.backBtn} onClick={props.onClick}>← Інші послуги</button>
      <div className={styles.modalContent}>
        <p className={styles.modalTitle}>{props.title}</p>
        <p className={styles.modalPrice}>{props.price} ₴</p>
        <button className={styles.buyBtn}>Купити</button>

        <ProductDetails details={props.details} />
      </div>

      <button className={styles.closeBtn} onClick={props.onClick}>
        <svg
          role="presentation"
          width="23px"
          height="23px"
          viewBox="0 0 23 23"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="none" strokeWidth="1" fill="#000000" fillRule="evenodd">
            <rect
              transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) "
              x="10.3137085"
              y="-3.6862915"
              width="2"
              height="30"
            ></rect>
            <rect
              transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) "
              x="10.3137085"
              y="-3.6862915"
              width="2"
              height="30"
            ></rect>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Modal;
