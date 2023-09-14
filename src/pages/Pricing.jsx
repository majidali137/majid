import React,{ useEffect }  from "react";
import PricingSection from "../feacture/pricing/PricingSection";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function Pricing() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div id="pricing">
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}

      >
        <PricingSection />
      </motion.div>
    </div>
  );
}
