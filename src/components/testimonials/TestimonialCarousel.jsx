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
            <div
              key={idx}
              className="relative isolate flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 shadow"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
              <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 md:right-1/3 lg:mr-0 xl:mr-16 xl:origin-center" />
              <div
                style={{ backgroundImage: `url('../../opening-quotes.png')` }}
                className="absolute top-1/25 left-[10%] h-1/4 w-1/4 rotate-[10deg] overflow-visible bg-cover bg-center opacity-10 md:h-1/3 md:w-1/3"
              />
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
