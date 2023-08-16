import SubscriptionItem from "./SubscriptionItem";
import styles from "./Subscriptions.module.css";
import { subscriptionsInfoData } from "../util/bmsPage-data";
import { bonusData } from "../util/bmsPage-data";

const Subscriptions = () => {
  return (
    <section className={styles.subsSection}>
      <h2 className={styles.subsTitle}>Що входить в підписку</h2>
      <p className={styles.subsDate}>на місяць? 202?</p>
      <div className={styles.subsitemContainer}>
        {subscriptionsInfoData.map((item) => (
          <SubscriptionItem
            key={item.id}
            id={item.id}
            src={item.src}
            title={item.title}
            list={item.list}
            listTitle={item.listTitle}
            text={item.text}
          />
        ))}
      </div>
      <h2 className={styles.subsTitle}>Додаткова опція:</h2>
      <div className={styles.subsitemContainer}>
        {bonusData.map((item) => (
          <SubscriptionItem
            key={item.id}
            id={item.id}
            src={item.src}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Subscriptions;
