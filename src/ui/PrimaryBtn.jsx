/* eslint-disable react/prop-types */
function PrimaryBtn({ children }) {
  return (
    <button
      className=" font-mons inline-block rounded px-[46px] py-[15px] text-[13px] font-normal text-white sm:px-[52px] sm:py-[17px] sm:text-base"
      style={{
        background:
          "linear-gradient(270deg, rgb(144, 58, 255) 0%, rgb(212, 52, 254) 56.42%, rgb(255, 38, 185) 99.99%, rgb(254, 52, 185) 100%)",
      }}
    >
      {children}
    </button>
  );
}

export default PrimaryBtn;
