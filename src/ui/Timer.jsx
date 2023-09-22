import useTime from "../hooks/useTime";

// TIMER COMPONENT ON THE HERO SECTION
function Timer() {
  const { hours, mins, secs } = useTime();

  // TIME format function to add a '0' at the beginning if needed
  const timeFormatter = (val) => {
    return val.toString().padStart(2, "0");
  };

  return (
    <div className="font-unica mb-[17px] mt-[14px] flex items-center gap-[20px] sm:mb-[95px] sm:mt-[50px]">
      <h5 className="sm:leading[85px] text-[48px] font-normal leading-[64px] text-white sm:text-[64px]">
        {timeFormatter(hours)}
        <span className="font-mons leading[18px] text-sm font-normal">H</span>
      </h5>
      <h5 className="sm:leading[85px] text-[48px] font-normal leading-[64px] text-white sm:text-[64px]">
        {timeFormatter(mins)}
        <span className="font-mons leading[18px] text-sm font-normal">M</span>
      </h5>
      <h5 className="sm:leading[85px] text-[48px] font-normal leading-[64px] text-white sm:text-[64px]">
        {timeFormatter(secs)}
        <span className="font-mons leading[18px] text-sm font-normal">S</span>
      </h5>
    </div>
  );
}

export default Timer;
