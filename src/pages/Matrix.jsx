import SectionParallax from "../components/UI/SectionParallax/SectionParallax";
import Divider from "../components/UI/Divider/Divider";
import ContactForm from "../components/Forms/ContactForm";
import ProductCardMain from "../components/ProductCardMain/ProductCardMain";
import TestimonialsSlider from "../components/Slider/TestimonialsSlider";
import Achievements from "../components/Achievements/Achievements";
import FAQComponent from "../components/FAQ/FAQComponent";
import Section from "../components/UI/Section/Section";
import List from "../components/List/List";
import { guides } from "../components/util/products-data";
import * as matrixPageData from "../components/util/matrixPage-data";
import bgImg from "../assets/matrix-bg.jpg";
import styles from "../styles/Matrix.module.css";

const Matrix = () => {
  return (
    <>
      <SectionParallax
        bgImage={bgImg}
        title="Матриця Долі"
        text="Отримайте можливість прийняти свою силу і слабкість, зцілити самооцінку, повірити в себе і стати вільними від чужих шаблонів"
      />
      <section className={styles.matrixDescription}>
        <p className={styles.descriptionText}><strong>Матриця Долі</strong> - унікальна система самопізнання, яка завдяки зашифрованій
        в даті народження інформації здатна допомогти розкрити потенціал своєї
        особистості, усвідомити кармічні задачі та призначення в різних сферах
        життя</p>
      </section>
      <Section>
        <List title="Які результати отримали мої клієнти після консультації:" data={matrixPageData.listItems} />
      </Section>
      <Divider>
        Запис на індивідуальні консультації призупинений, <br /> та ви можете
        стати в чергу на розбір
      </Divider>
      <Section>
        <ContactForm />
      </Section>
      <Divider>Крім консультацій</Divider>
      <Section>
        <div className={styles.guidesContainer}>
          {guides.map((guide) => (
            <ProductCardMain
              key={guide.id}
              id={guide.id}
              title={guide.title}
              price={guide.price}
              details={guide.details}
            />
          ))}
        </div>
      </Section>
      <Divider>
        Пропрацювання енергій та допомога в розкритті <br /> їх позитивного
        потенціалу
      </Divider>
      {/* <Section>
        <div className={styles.correctionsContainer}>
          {corrections.map((correction) => (
            <ProductCardSecondary
              key={correction.id}
              id={correction.id}
              title={correction.title}
              description={correction.description}
              price={correction.price}
            />
          ))}
        </div>
      </Section> */}
      <Divider>Відгуки</Divider>
      <Section className={styles.testimonials}>
        <TestimonialsSlider data={matrixPageData.testimonials} />
      </Section>
      <Achievements data={matrixPageData.achievements} />
      <Divider>Відповіді на популярні запитання</Divider>
      <Section>
        <FAQComponent matrixPage />
      </Section>
    </>
  );
};

export default Matrix;
