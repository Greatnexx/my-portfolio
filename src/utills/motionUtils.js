// motionUtils.js
export const fadeIn = (direction = "up", duration = 0.8, delay = 0) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration, delay },
    },
  };
  return variants;
};

export const staggerContainer = (staggerChildren = 0.3, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const zoomIn = (duration = 0.8, delay = 0) => ({
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration, delay } },
});
