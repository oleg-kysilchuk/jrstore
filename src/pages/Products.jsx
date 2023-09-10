import SectionParallax from "../components/UI/SectionParallax/SectionParallax";
import Divider from "../components/UI/Divider/Divider";
import ProductCardMain from "../components/ProductCardMain/ProductCardMain";
import Section from "../components/UI/Section/Section";
import { watchProducts as productsWatch } from "../components/util/products-data";
import { guides as productsRead } from "../components/util/products-data";
import bgImg from "../assets/products-bg.jpg";
import styles from "../styles/Products.module.css";

const Products = () => {
  return (
    <>
      <SectionParallax
        bgImage={bgImg}
        title="Продукти в записі"
        text="для самостійного опрацювання"
      />
      <Divider>ДИВИТИСЬ ТА СЛУХАТИ:</Divider>
      <Section>
        <div className={styles.productsContainer}>
          {productsWatch.map((item) => (
            <ProductCardMain
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              details={item.details}
            />
          ))}
        </div>
      </Section>
      <Divider>ЧИТАТИ:</Divider>
      <Section>
        <div className={styles.productsContainer}>
          {productsRead.map((item) => (
            <ProductCardMain
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              details={item.details}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Products;
