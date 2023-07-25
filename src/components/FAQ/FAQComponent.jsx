import FAQItem from "./FAQItem";
import styles from "./FAQComponent.module.css";
import { useState } from "react";
import { faqQuestions as matrixPageFaq } from "../util/matrixPage-data";
import { faqQuestions as coachingFaq } from "../util/coachingPage-data";
import { faqQuestions as bmsFaq } from "../util/bmsPage-data";

const FAQComponent = (props) => {
  const [faqs, setFaqs] = useState(props.matrixPage ? matrixPageFaq : (props.coachingPage ? coachingFaq : bmsFaq));
  const toggleFAQ = (id) => {
    setFaqs(
      faqs.map((faq) => {
        faq._id === id ? (faq.open = !faq.open) : (faq.open = false);
        
        return faq;
      })
    );
  };

  return (
    <div className={styles.faqComponent}>
      <ul>
        {faqs.map((item) => (
          <li className={styles.faqListItem} key={item._id}>
            <FAQItem
              key={item._id}
              question={item.question}
              answer={item.answer}
              open={item.open}
              id={item._id}
              lists={item.lists}
              toggleFAQ={toggleFAQ}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQComponent;
