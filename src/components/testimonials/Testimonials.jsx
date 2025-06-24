import TestimonialCarousel from './TestimonialCarousel.jsx';
import React, { useRef, useEffect } from 'react';

const TestimonialSection = ({ setStyle }) => {
  const carouselRef = useRef();

  useEffect(() => {
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');

    if (prevBtn && nextBtn) {
      prevBtn.onclick = () => carouselRef.current?.prev();
      nextBtn.onclick = () => carouselRef.current?.next();
    }
  }, []);

  return <TestimonialCarousel ref={carouselRef} setStyle={setStyle} />;
};

export default TestimonialSection;
