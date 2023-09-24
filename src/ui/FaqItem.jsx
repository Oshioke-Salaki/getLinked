import { useState } from "react";

/* eslint-disable react/prop-types */
function FaqItem({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex border-b-[1px] border-b-[#D434FE] pb-[8px] text-left sm:pb-[13px] sm:text-left">
      <h1 className="flex w-full items-center justify-between font-mons text-xs font-normal leading-[18px] text-white sm:text-sm sm:leading-7">
        {children}{" "}
        <span
          className="cursor-pointer text-xl text-[#D434FE]"
          onClick={() => {
            setOpen((open) => !open);
          }}
        >
          {open ? "-" : "+"}
        </span>
      </h1>
      <p
        className={`w-full font-mons text-xs font-normal leading-[18px] text-white transition-all duration-150 sm:text-sm sm:leading-7 ${
          open ? "block" : "hidden"
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius
        veritatis rerum possimus ullam provident fuga amet nemo similique fugit!
      </p>
    </div>
  );
}

export default FaqItem;
