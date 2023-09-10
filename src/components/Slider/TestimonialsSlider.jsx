import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './TestimonialsSlider.module.css';

const TestimonialsSlider = (props) => {
  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...sliderSettings}>
        {props.data.map((slide, index) => (
          <div className={styles.slide} key={`${index}${slide.src}`}>
            <img width='260' height='260' src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
