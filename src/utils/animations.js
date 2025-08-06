// src\utils\animations.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// ✅ ScrollSmoother
export function initScrollSmoother() {
  const wrapper = document.querySelector('#smooth-wrapper');
  const content = document.querySelector('#smooth-content');

  if (wrapper && content) {
    ScrollSmoother.create({
      wrapper,
      content,
      smooth: 1,
      effects: true,
    });
  } else {
    console.warn('⚠️ ScrollSmoother requires #smooth-wrapper and #smooth-content');
  }
}

// ✅ Main data-driven animation logic
export function animateWithDataAttributes(selector = '.gsap-animate') {
  const groups = {};

  const elements = document.querySelectorAll(selector);
  if (!elements.length) {
    console.warn('⚠️ No elements found with selector:', selector);
    return;
  }

  elements.forEach((el, index) => {
    const animation = el.dataset.animation ?? 'fade';
    const direction = el.dataset.direction ?? 'up';
    let duration = parseFloat(el.dataset.duration) || 1;
    let delay = el.dataset.delay ?? 0;
    const scroll = el.dataset.scroll === 'true';
    const ease = el.dataset.ease || 'power2.out';
    const repeatAttr = el.dataset.repeat;
    const hover = el.dataset.hover === 'true';
    const exit = el.dataset.exit ?? null;
    const origin = el.dataset.origin || 'center center';
    const group = el.dataset.staggerGroup;
    const scrollReverse = el.dataset.scrollReverse === 'true';

    // Debug: Log element and its attributes
    // console.log(`Processing element ${index}:`, {
    //   el,
    //   animation,
    //   direction,
    //   duration,
    //   delay,
    //   scroll,
    //   group,
    // });

    // Ensure elements have an initial state
    const initialState = { opacity: 0 };
    if (animation === 'slide') {
      if (direction === 'left') initialState.x = -50;
      else if (direction === 'right') initialState.x = 50;
      else if (direction === 'up') initialState.y = 50;
      else if (direction === 'down') initialState.y = -50;
      else {
        console.warn(`⚠️ Invalid direction "${direction}" for slide animation`, el);
        initialState.y = 50; // Fallback to 'up'
      }
    }
    gsap.set(el, initialState);

    // Smart delay
    if (delay === 'rand') {
      delay = Math.random();
    } else if (delay === 'index') {
      delay = index * 0.2;
    } else {
      delay = parseFloat(delay) || 0;
    }

    // Repeat logic
    const repeat = repeatAttr === 'true' ? -1 : isNaN(parseInt(repeatAttr)) ? 0 : parseInt(repeatAttr);

    // Set transform origin for zoom/scale
    if ((animation === 'scale' || animation === 'zoom') && origin) {
      el.style.transformOrigin = origin;
    }

    // Base animation object
    const base = {
      duration,
      delay,
      ease,
      repeat,
      opacity: 1, // Ensure final opacity is 1
    };

    switch (animation) {
      case 'fade':
        break;
      case 'slide':
        if (direction === 'left') base.x = 0;
        else if (direction === 'right') base.x = 0;
        else if (direction === 'up') base.y = 0;
        else if (direction === 'down') base.y = 0;
        else {
          console.warn(`⚠️ Invalid direction "${direction}" for slide animation`, el);
          base.y = 0; // Fallback to 'up'
        }
        break;
      case 'scale':
        base.scale = 1;
        break;
      case 'rotate':
        base.rotate = 0;
        break;
      case 'zoom':
        base.scale = 1;
        base.opacity = 1;
        break;
      default:
        console.warn(`⚠️ Unknown animation type "${animation}"`, el);
    }

    // Timeline animation (optional)
    const enterAnim = () => {
      // console.log(`Triggering enter animation for element ${index}`, el); // Debug
      if (el.dataset.timeline === 'true') {
        const tl = gsap.timeline();
        tl.fromTo(el, initialState, { ...base });

        if (el.dataset.scaleAfter) {
          tl.to(el, {
            scale: parseFloat(el.dataset.scaleAfter),
            duration: 0.3,
          });
        }

        if (el.dataset.fadeAfter === 'true') {
          tl.to(el, {
            opacity: 0,
            duration: 0.3,
          });
        }

        gsap.delayedCall(delay, () => tl.play());
      } else {
        gsap.fromTo(el, initialState, { ...base });
      }
    };

    // Exit animation logic
    const exitAnim = () => {
      if (!exit) return;
      const exitBase = {
        duration,
        ease,
        opacity: 0,
      };

      if (exit === 'slide') exitBase.y = 50;
      else if (exit === 'zoom') exitBase.scale = 0.8;
      else if (exit === 'rotate') exitBase.rotate = 15;

      gsap.to(el, exitBase);
    };

    // Hover-triggered animation
    if (hover) {
      el.addEventListener('mouseenter', () => {
        gsap.fromTo(
          el,
          { scale: 1 },
          {
            scale: 1.1,
            duration: 0.3,
            ease: 'power1.out',
          },
        );
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          scale: 1,
          duration: 0.3,
          ease: 'power1.inOut',
        });
      });
      return;
    }

    // Stagger group collection
    if (group) {
      if (!groups[group]) groups[group] = [];
      groups[group].push({ el, base, delay });
    } else if (scroll) {
      // Scroll-triggered animation
      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        onEnter: () => {
          // console.log(`ScrollTrigger onEnter for element ${index}`, el); // Debug
          enterAnim();
        },
        onLeaveBack: scrollReverse ? exitAnim : undefined,
      });
    } else {
      enterAnim(); // Fire immediately if no scroll
    }
  });

  // Stagger group animation
  for (const groupName in groups) {
    const items = groups[groupName];
    const base = items[0].base;
    // Use the parent of the first element as the trigger, or the section itself
    const triggerEl = items[0].el.closest('.section') || items[0].el.parentElement;

    // console.log(`Stagger group: ${groupName}, Trigger:`, triggerEl, 'Items:', items); // Debug

    ScrollTrigger.create({
      trigger: triggerEl,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        // console.log(`Stagger group onEnter: ${groupName}`); // Debug
        gsap.fromTo(
          items.map((i) => i.el),
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            ...base,
            stagger: 0.2,
          },
        );
      },
    });
  }
}
