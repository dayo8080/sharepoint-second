import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './OrigamiCarousel.module.scss';
import { IOrigamiCarouselProps } from './IOrigamiCarouselProps';

const OrigamiCarousel: React.FC<IOrigamiCarouselProps> = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={styles.origamiCarousel}>
      <Slider {...settings}>
        <div>
          <img src="https://via.placeholder.com/600x400" alt="Slide 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x400" alt="Slide 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x400" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
}

export default OrigamiCarousel;
