/* eslint-disable react/prop-types */
function PrimaryBtn({ children }) {
  return (
    <button
      className=" inline-block w-fit rounded px-[52px] py-[17px] text-white"
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
