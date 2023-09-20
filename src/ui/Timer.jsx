function Timer() {
  return (
    <div className="font-unica mb-[95px] mt-[50px] flex items-center gap-[20px]">
      <h5 className="leading[85px] text-[64px] text-white">
        00<span className="font-mons leading[18px] text-sm">H</span>
      </h5>
      <h5 className="leading[85px] text-[64px] text-white">
        00<span className="font-mons leading[18px] text-sm">M</span>
      </h5>
      <h5 className="leading[85px] text-[64px] text-white">
        00<span className="font-mons leading[18px] text-sm">S</span>
      </h5>
    </div>
  );
}

export default Timer;
