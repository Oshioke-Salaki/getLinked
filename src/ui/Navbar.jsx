/* eslint-disable react/prop-types */
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import hamburger from "../assets/hamburgerIcon.svg";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

function Navbar({ hasBorder }) {
  // Get Current route
  const location = useLocation();
  const { pathname } = location;

  const [atRegPage, setAtRegPage] = useState(() => {
    if (pathname === "/register") return true;
    return false;
  });
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    if (pathname === "/register") setAtRegPage(true);
    else setAtRegPage(false);
  }, [pathname]);

  return (
    <nav
      className={`${
        hasBorder && "border-b-[1px] border-b-borderColor"
      }  relative z-[200] flex  items-center justify-between px-[48px] pb-[21px] pt-[36px] sm:px-[128px] sm:pb-[25px] sm:pt-[63px]`}
    >
      <Logo />
      <div className="hidden gap-[121px] sm:flex sm:justify-end">
        <NavLinks />
        {atRegPage ? (
          <div
            style={{
              background:
                "linear-gradient(270deg, rgb(144, 58, 255) 0%, rgb(212, 52, 254) 56.42%, rgb(255, 38, 185) 99.99%, rgb(254, 52, 185) 100%)",
            }}
            className="rounded p-[2px]"
          >
            <button className=" inline-block rounded bg-bgMain px-[46px] py-[15px] font-mons text-[13px] font-normal text-white sm:px-[50px] sm:py-[15px] sm:text-base">
              Register
            </button>
          </div>
        ) : (
          <button
            className=" z-30 inline-block rounded px-[46px] py-[15px] font-mons text-[13px] font-normal text-white sm:px-[52px] sm:py-[17px] sm:text-base"
            style={{
              background:
                "linear-gradient(270deg, rgb(144, 58, 255) 0%, rgb(212, 52, 254) 56.42%, rgb(255, 38, 185) 99.99%, rgb(254, 52, 185) 100%)",
            }}
          >
            <NavLink to={"/register"}>Register</NavLink>
          </button>
        )}
      </div>
      <button
        className="cursor-pointer sm:hidden"
        onClick={() => {
          setToggleNav(true);
        }}
      >
        <img src={hamburger} alt="" className="flex h-[14px] w-[19px] " />
      </button>
      {toggleNav && (
        <MobileNavbar setToggle={setToggleNav} toggle={toggleNav} />
      )}
    </nav>
  );
}

export default Navbar;
