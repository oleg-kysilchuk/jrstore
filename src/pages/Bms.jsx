import SectionParallax from "../components/UI/SectionParallax/SectionParallax";
import Subscriptions from "../components/Subscriptions/Subscriptions";
import SubscriptionOffers from "../components/Subscriptions/SubscriptionOffers";
import Section from "../components/UI/Section/Section";
import TestimonialsSlider from "../components/Slider/TestimonialsSlider";
import Achievements from "../components/Achievements/Achievements";
import Divider from "../components/UI/Divider/Divider";
import FAQComponent from "../components/FAQ/FAQComponent";
import * as bmsData from "../components/util/bmsPage-data";
import bgImg from "../assets/bms-bg.jpg";
import styles from "../styles/Bms.module.css";

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
      <Subscriptions />
      <SubscriptionOffers />
      <Divider>Відгуки</Divider>
      <Section className={styles.testimonials}>
        <TestimonialsSlider data={bmsData.testimonialsData} />
      </Section>
      <Achievements data={bmsData.achievementsData} />
      <Divider>Відповіді на популярні запитання</Divider>
      <Section>
        <FAQComponent bmsPage />
      </Section>
    </>
  );
};

export default Bms;
