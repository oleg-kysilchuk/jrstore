import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <main className={styles.pageWrapper}>
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
