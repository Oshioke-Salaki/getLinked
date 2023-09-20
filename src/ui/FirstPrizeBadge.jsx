import medal from "../assets/gold_medal 1.png";

function FirstPrizeBadge() {
  return (
    <div className="font-mons relative h-fit rounded-lg border-[1px] border-solid border-[#903AFF] bg-[#903aff1e] px-[23px] pb-[21px] pt-[149px] text-center">
      <img
        src={medal}
        alt=""
        className="absolute left-[0px] top-[-100px] !w-[660px]"
      />
      <h2 className="text-[40px] font-bold leading-[87px] text-white">1st</h2>
      <h6 className="text-2xl font-semibold leading-[52px] text-white">
        Runner
      </h6>
      <h1 className="text-[32px] font-bold leading-[69px] text-[#903AFF]">
        N400,000
      </h1>
    </div>
  );
}

export default FirstPrizeBadge;
