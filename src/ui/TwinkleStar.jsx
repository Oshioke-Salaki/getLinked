/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

// STAR COMPONENT THAT RECEIVES CLASSES(top and left/right) and STAR IMG SRC
function TwinkleStar({ className, star }) {
  return (
    <motion.img
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 2 }}
      viewport={{ once: true }}
      src={star}
      alt="star"
      className={`absolute ${className} animate-pulse duration-300`}
    />
  );
}

export default TwinkleStar;
