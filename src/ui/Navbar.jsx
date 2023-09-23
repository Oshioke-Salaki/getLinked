/* eslint-disable react/prop-types */
// import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import PrimaryBtn from "./PrimaryBtn";
import hamburger from "../assets/hamburgerIcon.svg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Navbar({ hasBorder }) {
  // const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  // function toggleMenu() {
  //   setShowHamburgerMenu((show) => !show);
  // }

  const location = useLocation();

  const { pathname } = location;

  const [atRegPage, setAtRegPage] = useState(() => {
    if (pathname === "/register") return true;
    return false;
  });

  useEffect(() => {
    if (pathname === "/register") setAtRegPage(true);
    else setAtRegPage(false);
  }, [pathname]);

  return (
    <nav
      className={`${
        hasBorder && "border-b-[1px] border-b-borderColor"
      }  flex items-center justify-between  px-[48px] pb-[21px] pt-[36px] sm:px-[128px] sm:pb-[25px] sm:pt-[63px]`}
    >
      <Logo />
      <div className="hidden gap-[121px] sm:flex sm:justify-end">
        <NavLinks />
        <PrimaryBtn atRegPage={atRegPage} type="reg">
          Register
        </PrimaryBtn>
      </div>
      <button className="cursor-pointer sm:hidden">
        <img src={hamburger} alt="" className="flex h-[14px] w-[19px] " />
      </button>
    </nav>
  );
}

export default Navbar;
