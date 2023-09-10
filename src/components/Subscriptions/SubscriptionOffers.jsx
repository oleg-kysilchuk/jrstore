import ProductCardMain from "../ProductCardMain/ProductCardMain";
import styles from "./Subscriptions.module.css";

const SubscriptionOffers = (props) => {
  return (
    <section className={styles.subsoffersSection}>
      <h2 className={styles.subsTitle}>Оформити підписку</h2>
      <div className={styles.subsitemContainer}>
        {props.data.map((item) => (
          <ProductCardMain
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default SubscriptionOffers;
