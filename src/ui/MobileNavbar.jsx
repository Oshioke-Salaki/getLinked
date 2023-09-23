/* eslint-disable react/prop-types */
// import React, { useEffect } from "react";
// import Link from "next/link";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const MobileNavbar = ({ setToggle }) => {
  const location = useLocation();
  const currentRoute = location.pathname;

  const parentAnimationVariants = {
    init: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
  };

  const toggleNav = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div
      className={`absolute left-0 top-0 z-30 flex h-screen w-[100%] list-none flex-col items-center justify-center text-center  text-white backdrop-blur-sm md:hidden lg:hidden`}
    >
      <motion.div
        variants={parentAnimationVariants}
        initial="init"
        animate="animate"
        exit={"init"}
        transition={{
          ease: "easeInOut",
          type: "string",
        }}
        className="bg-scheme-bg-color flex h-full w-full items-center justify-center rounded-md p-2 text-center"
      >
        <ul className="flex w-[90%] flex-col gap-8 text-left">
          <li className="">
            <Link href={"#timeline"} onClick={toggleNav} className={`text-xl`}>
              Timeline
            </Link>
          </li>
          <li className="">
            <Link
              href={"/"}
              onClick={toggleNav}
              className={`text-xl ${currentRoute === "/" ? "active" : ""}`}
            >
              Overview
            </Link>
          </li>
          <li className="">
            <Link href={"#faqs"} onClick={toggleNav} className={`text-xl`}>
              FAQs
            </Link>
          </li>
          <li className="">
            <Link
              to={"/contact"}
              onClick={toggleNav}
              className={`text-xl ${
                currentRoute === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </li>
          <Link
            to={"/register"}
            onClick={toggleNav}
            className={`flex w-36 items-center p-3 ${
              currentRoute === "/register"
                ? "border-schemeViolet border-2 bg-transparent"
                : "from-schemePink to-schemePurple bg-gradient-to-r"
            }  justify-center rounded-sm font-semibold`}
          >
            Register
          </Link>
        </ul>
      </motion.div>
    </div>
  );
};

export default MobileNavbar;
