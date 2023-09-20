/* eslint-disable react/prop-types */
function FaqItem({ children }) {
  return (
    <div className="flex border-b-[1px] border-b-[#D434FE] pb-[13px]">
      <h1 className="font-mons flex w-full items-center justify-between text-sm font-normal leading-7 text-white">
        {children} <span className="text-xl text-[#D434FE]">+</span>
      </h1>
    </div>
  );
}

export default FaqItem;
