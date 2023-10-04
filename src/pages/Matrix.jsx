import useFetchData from "../hooks/use-fetchData";
import { Fragment, useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";
import Error from "../components/UI/Error/Error";
import SectionParallax from "../components/UI/SectionParallax/SectionParallax";
import Divider from "../components/UI/Divider/Divider";
import ContactForm from "../components/Forms/ContactForm";
import ProductCardMain from "../components/ProductCardMain/ProductCardMain";
import TestimonialsSlider from "../components/Slider/TestimonialsSlider";
import Achievements from "../components/Achievements/Achievements";
import FAQComponent from "../components/FAQ/FAQComponent";
import Section from "../components/UI/Section/Section";
import List from "../components/List/List";
import { ScrollRestoration } from "react-router-dom";
import bgImg from "../assets/matrix-bg.jpg";
import styles from "../styles/Matrix.module.css";

const Matrix = () => {
  useEffect(() => {
    document.title = "Матриця Долі";
  }, []);

  const pageData = useFetchData("http://localhost:8000/matrix-page-data");

  const productsData = useFetchData("http://localhost:8000/products-data");

  return (
    <>
      {pageData.status === "loading" ||
        (productsData.status === "loading" && <LoadingSpinner />)}
      {pageData.error ||
        (productsData.error && (
          <Error message={pageData.error || productsData.error} />
        ))}
      {pageData.data && productsData.data && (
        <Fragment>
          <SectionParallax
            bgImage={bgImg}
            title="Матриця Долі"
            text="Отримайте можливість прийняти свою силу і слабкість, зцілити самооцінку, повірити в себе і стати вільними від чужих шаблонів"
          />
          <section className={styles.matrixDescription}>
            <p className={styles.descriptionText}>
              <strong>Матриця Долі</strong> - унікальна система самопізнання,
              яка завдяки зашифрованій в даті народження інформації здатна
              допомогти розкрити потенціал своєї особистості, усвідомити
              кармічні задачі та призначення в різних сферах життя
            </p>
          </section>
          <Section>
            <List
              title="Які результати отримали мої клієнти після консультації:"
              data={pageData.data.listItems}
            />
          </Section>
          <Divider>
            Запис на індивідуальні консультації призупинений, <br /> та ви
            можете стати в чергу на розбір
          </Divider>
          <Section>
            <ContactForm />
          </Section>
          <Divider>Крім консультацій</Divider>
          <Section>
            <div className={styles.guidesContainer}>
              {productsData.data.guides.map((guide) => (
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
          {/* <Divider>
            Пропрацювання енергій та допомога в розкритті <br /> їх позитивного
            потенціалу
          </Divider>
          <Section>
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
            <TestimonialsSlider data={pageData.data.testimonials} />
          </Section>
          <Achievements data={pageData.data.achievements} />
          <Divider>Відповіді на популярні запитання</Divider>
          <Section>
            <FAQComponent data={pageData.data.faqData} />
          </Section>
          <ScrollRestoration />
        </Fragment>
      )}
    </>
  );
};

export default Matrix;
