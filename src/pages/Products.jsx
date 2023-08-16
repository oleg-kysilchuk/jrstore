import SectionParallax from "../components/UI/SectionParallax/SectionParallax";
import Divider from "../components/UI/Divider/Divider";
import ProductCardMain from "../components/ProductCardMain/ProductCardMain";
import Section from "../components/UI/Section/Section";
import { readProductsData as productsWatch } from "../components/util/productsPage-data";
import { guidesData as productsRead } from "../components/util/matrixPage-data";
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
          {productsWatch.map((prod) => (
            <ProductCardMain
              key={prod.id}
              id={prod.id}
              title={prod.title}
              price={prod.price}
            />
          ))}
        </div>
      </Section>
      <Divider bold>ЧИТАТИ:</Divider>
      <Section>
        <div className={styles.productsContainer}>
          {productsRead.map((prod) => (
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
