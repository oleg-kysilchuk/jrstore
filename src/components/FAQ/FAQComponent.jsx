import { useState } from "react";
import useFetchData from '../../hooks/use-fetchData';
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';
import Error from '../UI/Error/Error';
import FAQItem from "./FAQItem";
import styles from "./FAQComponent.module.css";

const FAQComponent = (props) => {

  const { status, error, data } = useFetchData('http://localhost:8000/faq-data');
  console.log(data)
  
  let defaultFaqs;

  switch (props.pageType) {
    case 'matrixPage':
      defaultFaqs = data.matrixPageFAQ;
      break;
    case 'coachingPage':
      defaultFaqs = data.coachingPageFAQ;
      break;
    case 'bmsPage':
      defaultFaqs = data.bmsPageFAQ;
      break;
    case 'workshop1':
      defaultFaqs = data.workshop01FAQ;
      break;
    default:
      defaultFaqs = null;
      break;
  }

  const [faqs, setFaqs] = useState(defaultFaqs);

  const toggleFAQ = (id) => {
    setFaqs(
      faqs.map((faq) => {
        faq.id === id ? (faq.open = !faq.open) : (faq.open = false);

        return faq;
      })
    );
  };

  return (
    <>
    {status === 'loading' && <LoadingSpinner />}
    {error && <Error />}
    {data && <div className={styles.faqComponent}>
      <ul>
        {faqs.map((item) => (
          <li className={styles.faqListItem} key={item.id}>
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              open={item.open}
              id={item.id}
              lists={item.lists}
              toggleFAQ={toggleFAQ}
            />
          </li>
        ))}
      </ul>
    </div>}
    </>
  );
};

export default FAQComponent;
