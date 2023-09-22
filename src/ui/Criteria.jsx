/* eslint-disable react/prop-types */

function Criteria({ children, criteria }) {
  return (
    <p className="font-mons text-xs font-normal leading-4 text-white sm:text-sm sm:leading-7">
      <span className="mr-1 text-[13px] font-bold text-[#f784d2] sm:text-base">
        {criteria}:
      </span>
      {children}
    </p>
  );
}

export default Criteria;
