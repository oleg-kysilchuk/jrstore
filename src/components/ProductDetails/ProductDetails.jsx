import { NavLink } from "react-router-dom";
import styles from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  return (
    <div className={styles.detailsContainer}>
      {props.details.link && (
        <p className={styles.detailsLinkItem}>
          Посилання на окремий сайт продукту
          <NavLink
            className={styles.detailsLink}
            to={props.details.link.to}
            title={props.details.link.title}
          >
            {props.details.link.text}
          </NavLink>
        </p>
      )}
      {props.details.title && (
        <p className={styles.detailsTitle}>{props.details.title}</p>
      )}
      {props.details.description && (
        <p className={styles.detailsDescription}>{props.details.description}</p>
      )}
      {props.details.text && (
        <p className={styles.detailsText}>{props.details.text}</p>
      )}
      <ul className={styles.detailsList}>
        {props.details.list &&
          props.details.list.map((item, index) => (
            <li className={styles.detailsListItem} key={`${index}${item}`}>
              {item}
            </li>
          ))}
      </ul>
      {props.details.format && (
        <p className={styles.detailsFormat}>{props.details.format}</p>
      )}
      {props.details.lang && (
        <p className={styles.detailsLanguage}>{props.details.lang}</p>
      )}
    </div>
  );
};

export default ProductDetails;
