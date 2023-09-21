/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function TwinkleStar({ className, star }) {
  return (
    <motion.img
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 2 }}
      viewport={{ once: true }}
      src={star}
      alt="star"
      className={`absolute w-3 animate-pulse duration-500 sm:h-5 sm:w-5 ${className}`}
    />
  );
}

export default TwinkleStar;
