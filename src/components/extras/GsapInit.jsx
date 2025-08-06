//src\components\extras\GsapInit.jsx
import { useEffect } from 'react';
import { initScrollSmoother, animateWithDataAttributes } from '@/utils/animations';

export default function GsapInit() {
  useEffect(() => {
    initScrollSmoother();
    animateWithDataAttributes('.gsap-animate');
  }, []);

  return null;
}
