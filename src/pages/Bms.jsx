import styles from "../styles/Bms.module.css";
import bgImg from "../assets/bms-bg.jpg";
import SectionParallax from "../components/UI/SectionParallax/SectionParallax";
import * as bmsData from "../components/util/bmsPage-data";
import SubscriptionItem from "../components/SubscriptionItem/SubscriptionItem";
import Section from "../components/UI/Section/Section";
import ProductCardMain from "../components/ProductCardMain/ProductCardMain";
import SliderTestimonials from "../components/Slider/Slider";
import AchievementItem from "../components/AchievementItem/AchievementItem";
import Divider from "../components/UI/Divider/Divider";
import FAQComponent from "../components/FAQ/FAQComponent";

const Bms = () => {
  return (
    <>
      <SectionParallax
        bgImage={bgImg}
        title="Be My Sister"
        text="станьте важливою частиною жіночої спільноти і не будьте більше самотні на шляху самопізнання"
      />
      <section className={styles.description}>
        <div className={styles.descriptionText}>
          <span className={styles.descriptionHighlight}>Be My Sister</span> -
          спільнота для жінок, які цікавляться особистісним та духовним
          розвитком, психологією, езотерикою, пропрацюванням травм та
          переконань. Місія спільноти - об'єднати в одному полі тих, хто
          потребує підтримки та тих, хто може її надати
        </div>
      </section>
      <section className={styles.subscriptionSection}>
        <h2 className={styles.subscriptionTitle}>Що входить в підписку</h2>
        <p className={styles.subscriptionDate}>на місяць? 202?</p>
        <div className={styles.subscriptionContainer}>
          {bmsData.subscriptionsInfo.map((item) => (
            <SubscriptionItem
              key={item._id}
              id={item._id}
              src={item.src}
              title={item.title}
              list={item.list}
              listTitle={item.listTitle}
              text={item.text}
            />
          ))}
        </div>
        <h2 className={styles.subscriptionTitle}>Додаткова опція:</h2>
        <div className={styles.subscriptionContainer}>
          {bmsData.bonusOptions.map((item) => (
            <SubscriptionItem
              key={item._id}
              id={item._id}
              src={item.src}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </section>
      <Section>
        <h2 className={styles.subscriptionTitle}>Оформити підписку</h2>
        <div className={styles.subscriptionContainer}>
          {bmsData.subscriptionsData.map((sub) => (
            <ProductCardMain
              key={sub._id}
              id={sub._id}
              title={sub.title}
              price={sub.price}
            />
          ))}
        </div>
      </Section>
      <Divider bold>Відгуки</Divider>
      <Section className={styles.testimonials}>
        <SliderTestimonials data={bmsData.testimonials} />
      </Section>
      <Section className={styles.achievements}>
        {bmsData.achievements.map((a) => (
          <AchievementItem key={a._id} numbers={a.numbers} text={a.text} />
        ))}
      </Section>
      <Divider medium>Відповіді на популярні запитання</Divider>
      <Section>
        <FAQComponent bmsPage />
      </Section>
    </>
  );
};

export default Bms;
