import Heading from "../../ui/Heading";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Post from "../../ui/Post";

export default function BlogSectons() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28  border-b">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-[#f8f9ff] sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          {/* blog Heading  */}
          <Heading
            subHeading="Recent Posts"
            mainHeading="From The Blog"
            description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          />
          {/* blog Card */}
          <div className="">
            <Post />
          </div>
          <div className="text-center">
            <button className="bg-[#4a6cf7] py-2 px-3 text-white   rounded-lg mt-4 hover:bg-[#4a64f6e6]">
              <Link to="blog">See more Posts &#8594; </Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
