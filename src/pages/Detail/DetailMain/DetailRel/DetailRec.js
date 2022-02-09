import React, { useState, useRef, useEffect } from 'react';
import DetailRecProd from './DetailRecProd';
import './DetailRec.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const DetailRec = ({ productBox }) => {
  const TOTAL_SLIDES = 4;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide * 35}%)`;
  }, [currentSlide]);

  return (
    <div className="rec-wrap">
      <div className="rec-container">
        <h2 className="rec-products">추천 제품</h2>
        <div className="top">
          <button className="slide-prev-icon" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} className="prev-icon" />
          </button>
          <button className="slide-next-icon" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} className="next-icon" />
          </button>
          <div className="rec-products-list-wrap">
            <div className="rec-products-list" ref={slideRef}>
              {productBox.map(
                ({ id, name, type, unit, price, review, mainSrc }) => {
                  return (
                    <DetailRecProd
                      key={id}
                      id={id}
                      name={name}
                      type={type}
                      unit={unit}
                      price={price}
                      review={review}
                      mainSrc={mainSrc}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRec;
