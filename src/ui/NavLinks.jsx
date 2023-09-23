import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function NavLinks() {
  const location = useLocation();

  const { pathname } = location;

  const [atContactPage, setAtContactPage] = useState(() => {
    if (pathname === "/contact") return true;

    return false;
  });

  useEffect(() => {
    if (pathname === "/contact") setAtContactPage(true);
    else setAtContactPage(false);
  }, [pathname]);

  return (
    <ul className="body-font flex items-center gap-x-14 font-mons">
      <li className="text-base font-normal text-white">Timeline</li>
      <li className="text-base font-normal text-white">Overview</li>
      <li className="text-base font-normal text-white">FAQs</li>
      <li
        className={`text-base font-normal text-white ${
          atContactPage && "text-6xl"
        }`}
      >
        <NavLink to="contact">Contact</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
