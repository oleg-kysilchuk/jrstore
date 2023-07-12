import SectionParallax from "../components/UI/SectionParallax/SectionParallax";
import Divider from "../components/UI/Divider/Divider";
import ContactForm from "../components/Forms/ContactForm";
import bgImg from "../assets/matrix-bg.jpg";
import styles from "../styles/Matrix.module.css";
import ProductCardMain from "../components/ProductCardMain/ProductCardMain";
import ProductCardSecondary from "../components/ProductCardSecondary/ProductCardSecondary";
import SliderTestimonials from "../components/Slider/Slider";
import AchievementItem from "../components/AchievementItem/AchievementItem";
import FAQComponent from "../components/FAQ/FAQComponent";
// import { productGuidesData as guidesData } from "../components/util/matrixPage-data";
// import { productCorrectionData as correctionData } from "../components/util/matrixPage-data";
// import { testimonialsMatrixPage as sliderImages } from "../components/util/matrixPage-data";
// import { achievementsMatrixPage as achievements } from "../components/util/matrixPage-data";
// import { faqQuestionsMatrixPage as faqQuestions } from "../components/util/matrixPage-data";
import Section from "../components/UI/Section/Section";
import List from "../components/List/List";
import ListItem from "../components/List/ListItem";
import { * as matrixPageData } from "../components/util/matrixPage-data";

const Matrix = () => {
  return (
    <>
      <SectionParallax
        bgImage={bgImg}
        title="Матриця Долі"
        text="Отримайте можливість прийняти свою силу і слабкість, зцілити самооцінку, повірити в себе і стати вільними від чужих шаблонів"
      />
      <Divider thin>
        Матриця Долі - унікальна система самопізнання, яка завдяки зашифрованій
        в даті народження інформації здатна допомогти розкрити потенціал своєї
        особистості, усвідомити кармічні задачі та призначення в різних сферах
        життя
      </Divider>
      <Section>
        <List title="Які результати отримали мої клієнти після консультації:">
          <ListItem>
            Набуття стану ясності та розслаблення через розуміння себе та тих
            процесів, що відбуваються в житті
          </ListItem>
          <ListItem>
            Усвідомлення того, куди рухатися далі, та віра, що все вийде
          </ListItem>
          <ListItem>
            Збільшення доходу в кілька разів, покращення якості життя
          </ListItem>
          <ListItem>
            Поліпшення відносин із партнером, перезавантаження сфери відносин
          </ListItem>
          <ListItem>
            Прийняття себе, налагодження контакту з собою, усвідомлення своєї
            сили та «тіні»
          </ListItem>
          <ListItem>Набуття улюбленої справи, нової професії</ListItem>
          <ListItem>
            Поліпшення стосунків з батьками, відпускання образ
          </ListItem>
          <ListItem>Набуття впевненості та зцілення самооцінки</ListItem>
        </List>
      </Section>
      <Divider bold>
        Запис на індивідуальні консультації призупинений, <br /> та ви можете
        стати в чергу на розбір
      </Divider>
      <Section>
        <div className={styles.formContainer}>
          <ContactForm />
        </div>
      </Section>
      <Divider bold>Крім консультацій</Divider>
      <Section className={styles.guides}>
        <div className={styles.guidesContainer}>
          {matrixPageData.guidesData.map((guide) => (
            <ProductCardMain
              key={guide.id}
              title={guide.title}
              price={guide.price}
            />
          ))}
        </div>
      </Section>
      <Divider bold>
        Пропрацювання енергій та допомога в розкритті <br /> їх позитивного
        потенціалу
      </Divider>
      <Section>
        <div className={styles.correctionsContainer}>
          {matrixPageData.correctionsData.map((correction) => (
            <ProductCardSecondary
              key={correction.id}
              title={correction.title}
              description={correction.description}
              price={correction.price}
            />
          ))}
        </div>
      </Section>
      <Section className={styles.testimonials}>
        <h3 className={styles.testimonialsTitle}>Відгуки</h3>
        <SliderTestimonials data={sliderImages}></SliderTestimonials>
      </Section>
      <Section className={styles.achievements}>
        {matrixPageData.achievements.map((a) => (
          <AchievementItem key={a.id} numbers={a.numbers} text={a.text} />
        ))}
      </Section>
      <Divider medium>Відповіді на популярні запитання</Divider>
      <Section>
        <FAQComponent matrixPage />
      </Section>
    </>
  );
};

export default Matrix;
