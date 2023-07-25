import styles from "../styles/Products.module.css";
import bgImg from "../assets/products-bg.jpg";
import SectionParallax from "../components/UI/SectionParallax/SectionParallax";
import Divider from "../components/UI/Divider/Divider";
import ProductCardMain from "../components/ProductCardMain/ProductCardMain";
import Section from "../components/UI/Section/Section";
import { readProducts } from "../components/util/productsPage-data";
import { guidesData as listenProducts } from "../components/util/matrixPage-data";

const Products = () => {
  return (
    <>
      <SectionParallax
        bgImage={bgImg}
        title="Продукти в записі"
        text="для самостійного опрацювання"
      />
      <Divider bold>ДИВИТИСЬ ТА СЛУХАТИ:</Divider>
      <Section>
        <div className={styles.productsContainer}>
          {readProducts.map((prod) => (
            <ProductCardMain
              key={prod._id}
              id={prod._id}
              title={prod.title}
              price={prod.price}
            />
          ))}
        </div>
      </Section>
      <Divider bold>ЧИТАТИ:</Divider>
      <Section>
        <div className={styles.productsContainer}>
          {listenProducts.map((prod) => (
            <ProductCardMain
              key={prod._id}
              id={prod._id}
              title={prod.title}
              price={prod.price}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Products;
