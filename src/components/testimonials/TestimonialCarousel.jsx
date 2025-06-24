import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { testimonials } from '../../data/js/testimonials';
// TODO: colors and sized with variables

const TestimonialCarousel = forwardRef(({ setStyle }, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCount = 3;

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useImperativeHandle(ref, () => ({
    next,
    prev,
  }));

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const getVisibleTestimonials = () => {
    return Array.from({ length: visibleCount }, (_, i) => {
      const index = (currentIndex + i) % testimonials.length;
      return testimonials[index];
    });
  };

  return (
    <section {...swipeHandlers} className="section relative overflow-hidden" style={{ background: setStyle }}>
      <h2 className="mb-10 text-center">
        What our <span className="halfHeading">clients say!</span>
      </h2>
      <div className="maxwidth relative">
        <div className="mx-[3%] grid grid-cols-1 gap-6 transition-all duration-500 ease-in-out select-none md:grid-cols-3">
          {getVisibleTestimonials().map((testimonial, idx) => (
            <div key={idx} className="flex min-h-[300px] flex-col justify-between rounded-2xl bg-white p-6 shadow">
              <p className="mb-4 italic">“{testimonial.quote}”</p>
              <div>
                <p className="text-right font-semibold">{testimonial.name}</p>
                <p className="text-right">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 left-0 hidden -translate-y-1/2 transform lg:block">
          <button
            onClick={prev}
            className="bg-secondary hover:bg-secondary-light cursor-pointer rounded-full p-2 px-3 text-4xl text-white shadow"
          >
            ‹
          </button>
        </div>
        <div className="absolute top-1/2 right-0 hidden -translate-y-1/2 transform lg:block">
          <button
            onClick={next}
            className="bg-secondary hover:bg-secondary-light cursor-pointer rounded-full p-2 px-3 text-4xl text-white shadow"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
});

export default TestimonialCarousel;
