/* eslint-disable react/prop-types */
function PrimaryBtn({ children }) {
  return (
    <button className="bg-primaryColor inline-block w-fit rounded px-[52px] py-[17px] text-white">
      {children}
    </button>
  );
}

export default PrimaryBtn;
