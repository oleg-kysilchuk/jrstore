import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import styles from '../../styles/Layout.module.css'

const Layout = () => {
  return (
    <>
      <Header></Header>
      <main className={styles.pageWrapper}>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
