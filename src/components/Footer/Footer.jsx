import styles from "./Footer.module.css";
import scrollToTop from "../util/scroll";

const Footer = () => {
  const scrollOnKey = (e) => {
    if (e.keyCode === 13) {
      scrollToTop();
    } else {
      return;
    }
  };

  return (
    <footer className={styles.pageFooter}>
      <p>&#169; JRStore</p>

      <div className={styles.socialWrap}>
        <a className={styles.socialLink} href="" target="_blank">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles.socialIcon}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM25 39.3918C25 31.4558 31.4566 25 39.3918 25H60.6082C68.5442 25 75 31.4566 75 39.3918V60.8028C75 68.738 68.5442 75.1946 60.6082 75.1946H39.3918C31.4558 75.1946 25 68.738 25 60.8028V39.3918ZM36.9883 50.0054C36.9883 42.8847 42.8438 37.0922 50.0397 37.0922C57.2356 37.0922 63.0911 42.8847 63.0911 50.0054C63.0911 57.1252 57.2356 62.9177 50.0397 62.9177C42.843 62.9177 36.9883 57.1252 36.9883 50.0054ZM41.7422 50.0054C41.7422 54.5033 45.4641 58.1638 50.0397 58.1638C54.6153 58.1638 58.3372 54.5041 58.3372 50.0054C58.3372 45.5066 54.6145 41.8469 50.0397 41.8469C45.4641 41.8469 41.7422 45.5066 41.7422 50.0054ZM63.3248 39.6355C65.0208 39.6355 66.3956 38.2606 66.3956 36.5646C66.3956 34.8687 65.0208 33.4938 63.3248 33.4938C61.6288 33.4938 60.2539 34.8687 60.2539 36.5646C60.2539 38.2606 61.6288 39.6355 63.3248 39.6355Z"
              fill="#ffffff"
            ></path>
          </svg>
        </a>
        <a className={styles.socialLink} href="" target="_blank">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles.socialIcon}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50Zm21.977-68.056c.386-4.38-4.24-2.576-4.24-2.576-3.415 1.414-6.937 2.85-10.497 4.302-11.04 4.503-22.444 9.155-32.159 13.734-5.268 1.932-2.184 3.864-2.184 3.864l8.351 2.577c3.855 1.16 5.91-.129 5.91-.129l17.988-12.238c6.424-4.38 4.882-.773 3.34.773l-13.49 12.882c-2.056 1.804-1.028 3.35-.129 4.123 2.55 2.249 8.82 6.364 11.557 8.16.712.467 1.185.778 1.292.858.642.515 4.111 2.834 6.424 2.319 2.313-.516 2.57-3.479 2.57-3.479l3.083-20.226c.462-3.511.993-6.886 1.417-9.582.4-2.546.705-4.485.767-5.362Z"
              fill="#ffffff"
            ></path>
          </svg>
        </a>
      </div>

      <a
        tabIndex="0"
        className={styles.scrollBtn}
        onClick={scrollToTop}
        onKeyUp={scrollOnKey}
      >
        <span className={styles.scrollText}>на верх</span>
        <span className={styles.scrollArrow}>
          <svg
            role="presentation"
            width="5px"
            height="17px"
            viewBox="0 0 6 20"
            version="1.1"
          >
            <defs></defs>
            <g
              id="Welcome"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Desktop-HD-Copy-39"
                transform="translate(-569.000000, -1797.000000)"
                fill="#ffffff"
              >
                <path
                  d="M565.662286,1804.2076 L562.095536,1806.87166 C561.958036,1807.00916 561.958036,1807.16385 562.095536,1807.30135 L565.662286,1809.96541 C565.799786,1810.10291 565.941411,1810.0431 565.941411,1809.83616 L565.941411,1808.11741 L581.816411,1808.11741 L581.816411,1806.05491 L565.941411,1806.05491 L565.941411,1804.33616 C565.941411,1804.18147 565.866474,1804.1141 565.769536,1804.14297 C565.737224,1804.1526 565.696661,1804.17322 565.662286,1804.2076 Z"
                  id="Shape"
                  transform="translate(571.904411, 1807.088000) rotate(-270.000000) translate(-571.904411, -1807.088000) "
                ></path>
              </g>
            </g>
          </svg>
        </span>
      </a>
    </footer>
  );
};

export default Footer;
