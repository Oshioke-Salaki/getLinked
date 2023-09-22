// import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import PrimaryBtn from "./PrimaryBtn";
import hamburger from "../assets/hamburgerIcon.svg";

function Navbar() {
  // const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  // function toggleMenu() {
  //   setShowHamburgerMenu((show) => !show);
  // }

  return (
    <nav className="border-b-borderColor flex items-center justify-between border-b-[1px] px-[48px] pb-[21px] pt-[36px] sm:px-[128px] sm:pb-[25px] sm:pt-[63px]">
      <Logo />
      <div className="hidden gap-[121px] sm:flex sm:justify-end">
        <NavLinks />
        <PrimaryBtn>Register</PrimaryBtn>
      </div>
      <button className="cursor-pointer sm:hidden">
        <img src={hamburger} alt="" className="flex h-[14px] w-[19px] " />
      </button>
    </nav>
  );
}

export default Navbar;
