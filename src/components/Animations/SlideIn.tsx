import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function SlideIn({
  children,
  index = 1,
  direction,
}: {
  children: JSX.Element | JSX.Element[];
  index?: number;
  direction?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControls.start("visible");
    }
  }, [inView, animationControls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, [direction === "x" ? "x" : "y"]: 75 },
        visible: { opacity: 100, [direction === "x" ? "x" : "y"]: 0 },
      }}
      initial="hidden"
      animate={animationControls}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  );
}
