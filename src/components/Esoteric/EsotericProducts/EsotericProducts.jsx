import Section from "../../UI/Section/Section";
import EsotericProductItem from "./EsotericProductItem";
import styles from "./EsotericProducts.module.css";

const EsotericProducts = (props) => {
  return (
    <Section>
      <h2 className={styles.productsTitle}>{props.title}</h2>
      <div className={styles.productsContainer}>
        {props.data.map((item) => (
          <EsotericProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            text={item.text}
            price={item.price}
            inStock={item.inStock}
          />
        ))}
      </div>
    </Section>
  );
};

export default EsotericProducts;
