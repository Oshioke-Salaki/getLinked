/* eslint-disable react/prop-types */

function Criteria({ children, criteria }) {
  return (
    <p className="font-mons text-sm font-normal leading-7 text-white">
      <span className="mr-1 text-base font-bold text-[#f784d2]">
        {criteria}:
      </span>
      {children}
    </p>
  );
}

export default Criteria;
