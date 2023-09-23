import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
function PrimaryBtn({ children, atRegPage, type }) {
  if (atRegPage)
    return (
      <div
        style={{
          background:
            "linear-gradient(270deg, rgb(144, 58, 255) 0%, rgb(212, 52, 254) 56.42%, rgb(255, 38, 185) 99.99%, rgb(254, 52, 185) 100%)",
        }}
        className="rounded p-[2px]"
      >
        <button className=" inline-block rounded bg-bgMain px-[46px] py-[15px] font-mons text-[13px] font-normal text-white sm:px-[50px] sm:py-[15px] sm:text-base">
          {children}
        </button>
      </div>
    );

  return (
    <button
      className=" inline-block rounded px-[46px] py-[15px] font-mons text-[13px] font-normal text-white sm:px-[52px] sm:py-[17px] sm:text-base"
      style={{
        background:
          "linear-gradient(270deg, rgb(144, 58, 255) 0%, rgb(212, 52, 254) 56.42%, rgb(255, 38, 185) 99.99%, rgb(254, 52, 185) 100%)",
      }}
    >
      {type === "reg" ? <NavLink to="/register">{children}</NavLink> : children}
    </button>
  );
}

export default PrimaryBtn;
