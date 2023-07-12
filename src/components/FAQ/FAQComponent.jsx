import FAQItem from "./FAQItem";
import styles from "./FAQComponent.module.css";
import { useState } from "react";
import { faqQuestions as matrixPageFaq } from "../util/matrixPage-data";

const FAQComponent = (props) => {
  const [faqs, setFaqs] = useState(() => {props.matrixPage ? matrixPageFaq : (props.bms ? )});
  const toggleFAQ = (key) => {
    setFaqs(
      faqs.map((faq) => {
        faq._id === key ? (faq.open = !faq.open) : (faq.open = false);

        return faq;
      })
    );
  };

  return (
    <div className={styles.faqComponent}>
      <ul>
        {props.questions.map((item) => (
          <li className={styles.faqListItem} key={item._id}>
            <FAQItem
              question={item.question}
              answer={item.answer}
              open={item.open}
              id={item._id}
              toggleFAQ={toggleFAQ}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQComponent;
