import ProductCardMain from "../ProductCardMain/ProductCardMain";
import { subscriptionsData } from "../util/bmsPage-data";
import styles from "./Subscriptions.module.css";

const SubscriptionOffers = () => {
  return (
    <section className={styles.subsSection}>
      <h2 className={styles.subsTitle}>Оформити підписку</h2>
      <div className={styles.subsitemContainer}>
        {subscriptionsData.map((sub) => (
          <ProductCardMain
            key={sub.id}
            id={sub.id}
            title={sub.title}
            price={sub.price}
          />
        ))}
      </div>
    </section>
  );
};

export default SubscriptionOffers;
