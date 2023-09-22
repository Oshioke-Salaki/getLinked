/* eslint-disable react/prop-types */
function FaqItem({ children }) {
  return (
    <div className="flex border-b-[1px] border-b-[#D434FE] pb-[8px] text-left sm:pb-[13px] sm:text-left">
      <h1 className="font-mons flex w-full items-center justify-between text-xs font-normal leading-[18px] text-white sm:text-sm sm:leading-7">
        {children} <span className="text-xl text-[#D434FE]">+</span>
      </h1>
    </div>
  );
}

export default FaqItem;
