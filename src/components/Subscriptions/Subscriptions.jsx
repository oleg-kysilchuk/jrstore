import SubscriptionItem from "./SubscriptionItem";
import styles from "./Subscriptions.module.css";
import { subscriptionsInfo, bonusOptions } from "../util/bmsPage-data";
import { date } from "../util/currentDate";

const Subscriptions = () => {
  return (
    <section className={styles.subsSection}>
      <h2 className={styles.subsTitle}>Що входить в підписку</h2>
      <p className={styles.subsDate}>на {date.currentMonth} {date.currentYear}</p>
      <div className={styles.subsitemContainer}>
        {subscriptionsInfo.map((item, index) => (
          <SubscriptionItem
            key={`${index}${item.title}`}
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
        {bonusOptions.map((item, index) => (
          <SubscriptionItem
            key={`${index}${item.title}`}
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
