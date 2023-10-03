import useFetchData from "../hooks/use-fetchData";
import { Fragment, useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";
import Error from "../components/UI/Error/Error";
import SectionParallax from "../components/UI/SectionParallax/SectionParallax";
import Divider from "../components/UI/Divider/Divider";
import ProductCardMain from "../components/ProductCardMain/ProductCardMain";
import Section from "../components/UI/Section/Section";
import { ScrollRestoration } from "react-router-dom";
import bgImg from "../assets/products-bg.jpg";
import styles from "../styles/Products.module.css";

const Products = () => {
  useEffect(() => {
    document.title = "Продукти в записі";
  }, []);

  const { status, error, data } = useFetchData(
    "http://localhost:8000/products-data"
  );

  return (
    <>
      {status === "loading" && <LoadingSpinner />}
      {error && <Error message={error} />}
      {data && (
        <Fragment>
          <SectionParallax
            bgImage={bgImg}
            title="Продукти в записі"
            text="для самостійного опрацювання"
          />
          <Divider>ДИВИТИСЬ ТА СЛУХАТИ:</Divider>
          <Section>
            <div className={styles.productsContainer}>
              {data.watchProducts.map((item) => (
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
              {data.guides.map((item) => (
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
          <ScrollRestoration />
        </Fragment>
      )}
    </>
  );
};

export default Products;
